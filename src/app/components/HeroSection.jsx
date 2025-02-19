"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import BackgroundMusic from "./BackgroundMusic";

const HeroSection = () => {
  return (
    <section className="lg:py-16 flex justify-center items-center min-h-screen">
      <div className="text-center">
        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
            Crusader 2 Championship
          </span>
          <br />
          <TypeAnimation
            sequence={["Winter Agile", 4000]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
          />
        </h1>

        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-lg max-w-2xl mx-auto">
          Let me get straight to the point. The last tournament dragged on for
          far too long, this time we focus on simplicity and activity.
        </p>
        <div>
          <span className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-400 to-blue-440 hover:bg-slate-200 text-white mr-4 cursor-pointer">
            <BackgroundMusic src="/music/GODS.mp3" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
