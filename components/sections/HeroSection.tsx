"use client";

import React from "react";
import MarqueeAlongSvgPath from "../LineCmp";

const path =
  "M1 209.434C58.5872 255.935 387.926 325.938 482.583 209.434C600.905 63.8051 525.516 -43.2211 427.332 19.9613C329.149 83.1436 352.902 242.723 515.041 267.302C644.752 286.966 943.56 181.94 995 156.5";

// Local photos from /public/images — resolve to /images/*.jpeg at runtime.
const imgs = [
  { src: "/images/sanju1.jpeg" },
  { src: "/images/sanju2.jpeg" },
  { src: "/images/sanju3.jpeg" },
  { src: "/images/sanj4.jpeg" },
  { src: "/images/sanju5.jpeg" },
  { src: "/images/snaju6.jpeg" },
  { src: "/images/sanju7.jpeg" },
  { src: "/images/sanju8.jpeg" },
  { src: "/images/sanju9.jpeg" },
  { src: "/images/sanju10.jpeg" },
  { src: "/images/sanju11.jpeg" },
  { src: "/images/sanju12.jpeg" },
];

// const imgs = [
//   { src: "/pipis/pipi1.jpg" },
//   { src: "/pipis/pipi2.jpg" },
//   { src: "/pipis/pipi3.jpg" },
//   { src: "/pipis/pipi4.jpg" },
//   { src: "/pipis/pipi5.jpg" },
//   { src: "/pipis/pipi6.jpg" },
//   { src: "/pipis/pipi7.jpg" },
//   { src: "/pipis/pipi8.jpg" },
//   { src: "/pipis/pipi9.jpg" },
//   { src: "/pipis/pipi10.jpg" },
//   { src: "/pipis/pipi11.jpg" },
//   { src: "/pipis/pipi12.jpg" },
//   { src: "/pipis/pipi13.jpg" },
//   { src: "/pipis/pipi14.jpg" },
// ];



// The trail is laid out in the path's own 996x330 coordinate space and then
// scaled down to the container width, so on a phone every photo shrinks with
// it. Phones therefore get their own numbers: fewer photos (they'd overlap on
// the shorter, scaled-down path) and a larger source size, so the trail reads
// at roughly the same on-screen size it does on a laptop.
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const mql = window.matchMedia(query);
    const sync = () => setMatches(mql.matches);
    sync();
    mql.addEventListener("change", sync);
    return () => mql.removeEventListener("change", sync);
  }, [query]);

  return matches;
};

export const HeroSection = () => {
  const isPhone = useMediaQuery("(max-width: 767px)");

  return (
    <section className="birthday-hero relative overflow-hidden flex min-h-dvh w-full flex-col overflow-x-hidden bg-[#FAFAF7]">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300..800&family=Work+Sans:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap");

        .hero-display {
          font-family: "Bricolage Grotesque", sans-serif;
        }
        .hero-body {
          font-family: "Work Sans", sans-serif;
        }
        .hero-mono {
          font-family: "JetBrains Mono", monospace;
        }
      `}</style>

      {/* Top row: quiet date stamp, nothing else competing for attention */}
      <div className="hero-mono flex items-center justify-between px-8 pt-8 text-[11px] uppercase tracking-[0.25em] text-[#8A8A80] sm:px-14">
        <span>Sep 5</span>
        {/* <span>One more lap</span> */}
      </div>

      {/* Headline — centered in the upper half, generous but not stretched to fill the screen */}
      <div className="hero-copy px-8 pt-16 sm:px-14 sm:pt-20">
        <h1 className="hero-display text-[15vw] leading-[0.86] tracking-tight text-[#14140F] sm:text-7xl lg:text-8xl">
          <span className="font-light">Happy</span>
          <br />
          <span className="font-bold">Birthday</span>
          <br/>
          <span className="font-bold mt-1 text-amber-500">Sweety</span>
        </h1>
        <div className="mt-6 h-px w-16 bg-[#9C7A3F]" />
        <p className="hero-body mt-6 max-w-sm text-base leading-relaxed text-[#4A4A42]">
       wishing you a day filled with love, laughter, and all the happiness your heart can hold. May this year bring you endless joy and unforgettable memories. Happy Birthday!
        </p>
      </div>

      {/* The trail — moved up under the headline, full-bleed edge to edge, tilted */}
      <div className="hero-trail absolute top-50 left-1/2 mt-0 w-screen -rotate-10 -translate-x-1/2">
        <MarqueeAlongSvgPath
          /* MarqueeAlongSvgPath runs a hook per item, so changing `repeat` on a
             live instance trips React's "fewer hooks than expected" - key it on
             the breakpoint so the switch remounts instead of re-rendering. */
          key={isPhone ? "phone" : "desktop"}
          path={path}
          viewBox="0 0 996 330"
          width="100%"
          height={isPhone ? 240 : 300}
          baseVelocity={5}
          slowdownOnHover={true}
          draggable={true}
          repeat={isPhone ? 1 : 2}
          dragSensitivity={0.08}
          dragVelocityDecay={0.98}
          slowDownFactor={0.05}
          slowDownSpringConfig={{ damping: 60, stiffness: 300 }}
          className="w-full h-full"
          responsive
          grabCursor
        >
          {imgs.map((img, i) => (
            <div
              key={i}
              className="hero-photo h-14 w-14 overflow-hidden border border-[#14140F]/15 bg-[#14140F]/5 transition-transform duration-300 ease-out hover:scale-105"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={`Memory ${i + 1}`}
                className="h-full w-full object-cover grayscale transition-[filter] duration-300 ease-out hover:grayscale-0"
                draggable={false}
              />
            </div>
          ))}
        </MarqueeAlongSvgPath>
      </div>

      {/* Remaining space stays quiet on purpose — a hairline and a small mark, nothing more */}
      <div className="mt-auto flex items-center justify-between px-8 pb-8 sm:px-14">
        <div className="h-px flex-1 bg-[#14140F]/10" />
        <span className="hero-mono px-4 text-[10px] uppercase tracking-[0.25em] text-[#8A8A80]">
          Made for you
        </span>
      </div>
    </section>
  );
};
