import type { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";
// import nodemailer from 'nodemailer';

// Fill these in with the information from your CoinPayments.net account.
const cp_merchant_id = "";
const cp_ipn_secret = "";
const cp_debug_email = "";

// These would normally be loaded from your database, the most common way is to pass the Order ID through the 'custom' POST field.
const order_currency = "USD";
const order_total = 10.0;

const errorAndDie = async (error_msg: string, postData: any) => {
  if (cp_debug_email) {
    let report = `Error: ${error_msg}\n\n`;
    report += "POST Data\n\n";
    for (const [key, value] of Object.entries(postData)) {
      report += `|${key}| = |${value}|\n`;
    }

    //   const transporter = nodemailer.createTransport({
    //     service: 'gmail', // e.g., 'gmail'
    //     auth: {
    //       user: 'your-email@gmail.com', // your email
    //       pass: 'your-email-password' // your email password
    //     }
    //   });

    //   await transporter.sendMail({
    //     from: 'your-email@gmail.com',
    //     to: cp_debug_email,
    //     subject: 'CoinPayments IPN Error',
    //     text: report,
    //   });
  }
  throw new Error(`IPN Error: ${error_msg}`);
};

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    throw new Error("Request method not allowed");
  }

  const headers = req.headers;
  const body = req.body;

  if (!body.ipn_mode || body.ipn_mode !== "hmac") {
    await errorAndDie("IPN Mode is not HMAC", body);
  }

  if (!headers["hmac"] || headers["hmac"] === "") {
    await errorAndDie("No HMAC signature sent.", body);
  }

  const request = JSON.stringify(body);
  if (!request || request === "") {
    await errorAndDie("Error reading POST data", body);
  }

  if (!body.merchant || body.merchant.trim() !== cp_merchant_id) {
    await errorAndDie("No or incorrect Merchant ID passed", body);
  }

  const hmac = crypto
    .createHmac("sha512", cp_ipn_secret.trim())
    .update(request)
    .digest("hex");
  if (hmac !== headers["hmac"]) {
    await errorAndDie("HMAC signature does not match", body);
  }

  // HMAC Signature verified at this point, load some variables.
  const ipn_type = body.ipn_type;
  // const txn_id = body.txn_id;
  // const item_name = body.item_name;
  // const item_number = body.item_number;
  const amount1 = parseFloat(body.amount1);
  // const amount2 = parseFloat(body.amount2);
  const currency1 = body.currency1;
  // const currency2 = body.currency2;
  const status = parseInt(body.status);
  // const status_text = body.status_text;

  if (ipn_type !== "button") {
    // Advanced Button payment
    res.status(200).send("IPN OK: Not a button payment");
    return;
  }

  // Check the original currency to make sure the buyer didn't change it.
  if (currency1 !== order_currency) {
    await errorAndDie("Original currency mismatch!", body);
  }

  // Check amount against order total
  if (amount1 < order_total) {
    await errorAndDie("Amount is less than order total!", body);
  }

  if (status >= 100 || status === 2) {
    // payment is complete or queued for nightly payout, success
    res.status(200).send("IPN OK");
  } else if (status < 0) {
    // payment error, this is usually final but payments will sometimes be reopened if there was no exchange rate conversion or with seller consent
    res.status(200).send("Payment Error");
  } else {
    // payment is pending, you can optionally add a note to the order page
    res.status(200).send("Payment Pending");
  }
}
