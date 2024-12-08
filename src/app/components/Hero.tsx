// components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section className="fill h-screen flex items-center">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Content */}
        <div className="flex flex-col justify-center items-start px-16">
          <h1 className="text-6xl font-medium text-gray-900 mb-4 whitespace-wrap ">
            Rocket Single Seater
          </h1>
          <button className="mt-2 text-lg underline decoration-2 decoration-gray-800">
            Shop Now
          </button>
        </div>
        {/* Right Content */}
        <div className="flex justify-center items-center">
          <img
          width={600}
            src={"/sofa-img.png"} // Replace with the path to your chair image
            alt="Rocket single seater"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
