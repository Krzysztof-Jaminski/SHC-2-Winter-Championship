"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import BackgroundMusic from "./BackgroundMusic";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600">
              Crusader 2 Championship
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Winter Showdown",
                1000,
                "Hawt's Mapset",
                1000,
                "Epic Battles",
                1000,
                "Claim Victory",
                1000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-lg">
            Join the ultimate Crusader 2 Tournament Experience the thrill,
            strategize your moves, and emerge as the champion in this epic
            showdown!
          </p>
          <div>
            <span className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-400 to-blue-440 hover:bg-slate-200 text-white mr-4 cursor-pointer">
              <BackgroundMusic src="/music/GODS.mp3" />
            </span>
            <Link href="#rules">
              <span className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-400 to-green-600 hover:bg-slate-200 text-white mr-4 cursor-pointer">
                View Rules
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
