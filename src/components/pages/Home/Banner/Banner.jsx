import React from "react";

const Banner = () => {
  return (
    <div className="relative px-12 text-xs overflow-x-hidden md:flex items-center justify-between">
      <div className="w-1/2 z-10">
        <div className="h-[46rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
        
          <h1 className="font-Audiowide md:text-7xl xl:text-8xl lg:text-7xl text-center text-white relative z-20 mb-6">
            Mozilla Firefox
          </h1>


          <p className="md:text-lg lg:text-xl mb-2 text-white">
            Open Minds . Open Ideas . Open Source
          </p>


          <div className="w-[40rem] h-40 relative">

            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm"></div>

            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4"></div>

            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm"></div>

            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4"></div>

            <div className="opacity-0 w-full h-full" style={{ opacity: 1, willChange: "auto" }}>
              <div id="tsparticles" className="h-full w-full">
                <canvas
                  data-generated="true"
                  style={{ width: "100%", height: "100%", pointerEvents: "none" }}
                  aria-hidden="true"
                  width="800"
                  height="200"
                ></canvas>
              </div>
            </div>
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>
      </div>

      <div className="w-1/2 flex justify-center items-center">
        <img
          width="500"
          height="500"
          className=""
          alt="element"
          src="/heroimg.png" 
        />
      </div>
    </div>
  );
};

export default Banner;