// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, FreeMode } from "swiper/modules";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/autoplay";
// import "swiper/css/free-mode";

// export default function Carousel() {
//   return (
//     <Swiper
//       modules={[Autoplay]}
//       // Infinite loop
//       loop={true}

//       // Provide freeMode as an object to disable momentum
//       freeMode={{
//         enabled: false,
//         momentum: false,
//         momentumBounce: false,
//         sticky: false,
//       }}

//       // Controls the duration of the continuous scroll
//       // e.g., 8000ms = 8 seconds from first to last slide
//       speed={1500}

//       // Autoplay: no delay between transitions
//       autoplay={{
//         delay: -1,
//         disableOnInteraction: false,
//         pauseOnMouseEnter: true,
//       }}

//       // Possibly prevent manual dragging to avoid reintroducing snaps
//       allowTouchMove={true}

//       // If you want a “marquee” across many slides,
//       // 'slidesPerView: "auto"' often helps
//       slidesPerView="5"
//       spaceBetween={30}
//       breakpoints={{
//         640: {
//           slidesPerView: 5,
//           spaceBetween: 20,
//         },
//         1024: {
//           slidesPerView: 15,
//           spaceBetween: 30,
//         },
//       }}
//     >
//       {/* Programming Languages */}
//       {[
//         "c",
//         "python",
//         "ocaml",
//         "java",
//         "javascript",
//         "typescript",
//         "html",
//         "css",
//         "php",
//         "graphql",
//         "r",
//         "mysql",
//         "sqlite",
//       ].map((icon, index) => (
//         <SwiperSlide key={icon + index}>
//           <img
//             src={`https://skillicons.dev/icons?i=${icon}`}
//             alt={`${icon} icon`}
//             className="w-20 h-20 mx-auto"
//           />
//         </SwiperSlide>
//       ))}

//       {/* Frameworks and Libraries */}
//       {[
//         "tensorflow",
//         "pytorch",
//         "sklearn",
//         "tailwind",
//         "nodejs",
//         "react",
//         "nextjs",
//         "prisma",
//       ].map((icon, index) => (
//         <SwiperSlide key={icon + index}>
//           <img
//             src={`https://skillicons.dev/icons?i=${icon}`}
//             alt={`${icon} icon`}
//             className="w-20 h-20 mx-auto"
//           />
//         </SwiperSlide>
//       ))}

//       {/* Tools and Platforms */}
//       {[
//         "git",
//         "github",
//         "figma",
//         "linux",
//         "kali",
//         "aws",
//         "gcp",
//         "docker",
//         "vercel",
//         "vscode",
//       ].map((icon, index) => (
//         <SwiperSlide key={icon + index}>
//           <img
//             src={`https://skillicons.dev/icons?i=${icon}`}
//             alt={`${icon} icon`}
//             className="w-20 h-20 mx-auto"
//           />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }

"use client";
import React from "react";
import "./Carousel.css";

const programming = [
  "c",
  "python",
  "ocaml",
  "java",
  "javascript",
  "typescript",
  "html",
  "css",
  "php",
  "graphql",
  "r",
  "mysql",
  "sqlite",
];

const frameworks = [
  "tensorflow",
  "pytorch",
  "sklearn",
  "tailwind",
  "nodejs",
  "react",
  "nextjs",
  "prisma",
];

const tools = [
  "git",
  "github",
  "figma",
  "linux",
  "kali",
  "aws",
  "gcp",
  "docker",
  "vercel",
  "vscode",
];

export default function SkillsMarquee() {
  const allSkills = [...programming, ...frameworks, ...tools];

  return (
    <div className="carousel">
      <div className="group">
        {allSkills.map((icon, index) => (
          <div className="card" key={`${icon}-${index}`}>
            <img
              src={`https://skillicons.dev/icons?i=${icon}`}
              alt={`${icon} icon`}
            />
          </div>
        ))}
      </div>

      <div className="group" aria-hidden>
        {allSkills.map((icon, index) => (
          <div className="card" key={`${icon}-duplicate-${index}`}>
            <img
              src={`https://skillicons.dev/icons?i=${icon}`}
              alt={`${icon} icon`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
