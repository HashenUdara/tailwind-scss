import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="mx-auto  max-w-screen-lg relative w-full h-screen flex items-center justify-center">
        <div className=" -z-50 absolute h-full w-full top-0 left-0   pointer-event-snone">
          <div className=" grid  grid-cols-4 mx-auto my-0  relative  h-full  ">
            <div className="w-px bg-[#1f1f1f]"></div>
            <div className="grid-line "></div>
            <div className="grid-line"></div>
            <div className="grid-line"></div>

            <div className="w-px bg-[#1f1f1f]  absolute top-0  right-0 h-full"></div>
          </div>
        </div>

        <h1 className=" text-7xl font-semibold">Take it Simple</h1>
      </section>
      <div className=" ">
        <section className=" mx-auto max-w-screen-lg relative w-full h-screen   ">
          <div className="  absolute h-full w-full top-0 left-0   pointer-event-snone">
            <div className=" grid  grid-cols-4 mx-auto my-0  relative  h-full  ">
              <div className="w-px bg-[#7e7e7e55]"></div>
              <div className="grid-line "></div>
              <div className="grid-line"></div>
              <div className="grid-line"></div>

              <div className="w-px bg-[#7e7e7e55]  absolute top-0  right-0 h-full"></div>
            </div>
          </div>
          <div>
            <h1 className=" text-8xl font-semibold text- pt-48  tracking-tighter">
              Reliable, fast hosting
            </h1>
            <p className=" text-neutral-100 text-lg pt-10">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis delectus possimus, dolore deleniti ad ea. Quod est
              aliquam officia aut? Veniam, magnam unde voluptatibus eius maxime
              id repudiandae dolorem vero.
            </p>
          </div>
        </section>
      </div>
      <div className=" bg-gradient-to-b from-neutral-900/50 border-t border-neutral-800">
        <section className=" mx-auto max-w-screen-lg relative w-full h-screen   ">
          <div className="  absolute h-full w-full top-0 left-0   pointer-event-snone">
            <div className=" grid  grid-cols-4 mx-auto my-0  relative  h-full  ">
              <div className="w-px bg-[#7e7e7e55]"></div>
              <div className="grid-line "></div>
              <div className="grid-line"></div>
              <div className="grid-line"></div>

              <div className="w-px bg-[#7e7e7e55]  absolute top-0  right-0 h-full"></div>
            </div>
          </div>
          <div>
            <h1 className=" text-8xl font-semibold text- pt-48  tracking-tighter">
              Reliable, fast hosting
            </h1>
            <p className=" text-neutral-100 text-lg pt-10">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis delectus possimus, dolore deleniti ad ea. Quod est
              aliquam officia aut? Veniam, magnam unde voluptatibus eius maxime
              id repudiandae dolorem vero.
            </p>
          </div>
        </section>
      </div>
      <div className=" bg-neutral-50">
        <section className=" mx-auto max-w-screen-lg relative w-full h-screen   ">
          <div className="  absolute h-full w-full top-0 left-0   pointer-event-snone">
            <div className=" grid  grid-cols-4 mx-auto my-0  relative  h-full  ">
              <div className="w-px bg-[#7e7e7e55]"></div>
              <div className="grid-line "></div>
              <div className="grid-line"></div>
              <div className="grid-line"></div>

              <div className="w-px bg-[#7e7e7e55]  absolute top-0  right-0 h-full"></div>
            </div>
          </div>
          <div>
            <h1 className=" text-8xl font-semibold text-black pt-48  tracking-tighter">
              Reliable, fast hosting
            </h1>
            <p className=" text-neutral-900 text-lg pt-10">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis delectus possimus, dolore deleniti ad ea. Quod est
              aliquam officia aut? Veniam, magnam unde voluptatibus eius maxime
              id repudiandae dolorem vero.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
