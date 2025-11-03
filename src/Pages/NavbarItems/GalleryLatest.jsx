import React, { useRef } from "react";
import { Carousel, Button, Card } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import ms10 from "../../assets/GalleryOnePhoto/masud-sir (10).jpeg";
import ms11 from "../../assets/GalleryOnePhoto/masud-sir (11).jpeg";
import ms12 from "../../assets/GalleryOnePhoto/masud-sir (12).jpeg";
import ms13 from "../../assets/GalleryOnePhoto/masud-sir (13).jpeg";
import ms24 from "../../assets/GalleryOnePhoto/masud-sir (24).jpeg";
import ms25 from "../../assets/GalleryOnePhoto/masud-sir (25).jpeg";
import ms26 from "../../assets/GalleryOnePhoto/masud-sir (26).jpeg";
import ms27 from "../../assets/GalleryOnePhoto/masud-sir (27).jpeg";
import ms28 from "../../assets/GalleryOnePhoto/masud-sir (28).jpeg";
import ms29 from "../../assets/GalleryOnePhoto/masud-sir (29).jpeg";
import ms1 from "../../assets/GalleryOnePhoto/masud-sir (1).jpeg";
import ms2 from "../../assets/GalleryOnePhoto/masud-sir (2).jpeg";
import ms3 from "../../assets/GalleryOnePhoto/masud-sir (3).jpeg";
import ms4 from "../../assets/GalleryOnePhoto/masud-sir (4).jpeg";
import ms5 from "../../assets/GalleryOnePhoto/masud-sir (5).jpeg";
import ms6 from "../../assets/GalleryOnePhoto/masud-sir (6).jpeg";
import ms7 from "../../assets/GalleryOnePhoto/masud-sir (7).jpeg";
import ms8 from "../../assets/GalleryOnePhoto/masud-sir (8).jpeg";
import ms9 from "../../assets/GalleryOnePhoto/masud-sir (9).jpeg";
import ms14 from "../../assets/GalleryOnePhoto/masud-sir (14).jpeg";
import ms15 from "../../assets/GalleryOnePhoto/masud-sir (15).jpeg";
import ms16 from "../../assets/GalleryOnePhoto/masud-sir (16).jpeg";
import ms17 from "../../assets/GalleryOnePhoto/masud-sir (17).jpeg";
import ms18 from "../../assets/GalleryOnePhoto/masud-sir (18).jpeg";
import ms19 from "../../assets/GalleryOnePhoto/masud-sir (19).jpeg";
import ms20 from "../../assets/GalleryOnePhoto/masud-sir (20).jpeg";
import ms21 from "../../assets/GalleryOnePhoto/masud-sir (21).jpeg";
import ms22 from "../../assets/GalleryOnePhoto/masud-sir (22).jpeg";
import ms23 from "../../assets/GalleryOnePhoto/masud-sir (23).jpeg";



const { Meta } = Card;

const slides = [
  { src: ms10, alt: "image 10" },
  { src: ms11, alt: "image 11" },
  { src: ms12, alt: "image 12" },
  { src: ms13, alt: "image 13" },
  { src: ms24, alt: "image 24" },
  { src: ms25, alt: "image 25" },
  { src: ms26, alt: "image 26" },
  { src: ms27, alt: "image 27" },
  { src: ms28, alt: "image 28" },
  { src: ms1, alt: "image 1" },
  { src: ms2, alt: "image 2" },
  { src: ms29, alt: "image 29" },
  { src: ms3, alt: "image 3" },
  { src: ms4, alt: "image 4" },
  { src: ms5, alt: "image 5" },
  { src: ms6, alt: "image 6" },
  { src: ms7, alt: "image 7" },
  { src: ms8, alt: "image 8" },
  { src: ms9, alt: "image 9" },
  { src: ms14, alt: "image 14" },
  { src: ms15, alt: "image 15" },
  { src: ms16, alt: "image 16" },
  { src: ms17, alt: "image 17" },
  { src: ms18, alt: "image 18" },
  { src: ms19, alt: "image 19" },
  { src: ms20, alt: "image 20" },
  { src: ms21, alt: "image 21" },
  { src: ms22, alt: "image 22" },
  { src: ms23, alt: "image 23" },
];

const GalleryLatest = () => {
     const carouselRef = useRef(null);
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-950 to-indigo-800 flex items-center justify-center p-8">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 overflow-hidden ">
        {/* Skills Section */}
        <div className="p-6 mb-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            Md Mahmudul Hasan Masud
          </h2>
         
          <div className="relative ">
            {/* Controls */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 flex items-center">
              <Button
                type="default"
                shape="circle"
                icon={<LeftOutlined />}
                className="ml-2 shadow"
                onClick={() => carouselRef.current?.prev()}
              />
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 flex items-center">
              <Button
                type="default"
                shape="circle"
                icon={<RightOutlined />}
                className="mr-2 shadow"
                onClick={() => carouselRef.current?.next()}
              />
            </div>

            {/* Carousel */}
            <Carousel
              ref={carouselRef}
              autoplay
              dots
              infinite
              speed={500}
              autoplaySpeed={2500}
              pauseOnHover
              adaptiveHeight
              className="rounded-lg"
            >
              {slides.map((s, idx) => (
                <div key={idx} className="px-1">
                  <img
                    src={s.src}
                    alt={s.alt}
                    className="h-[380px] w-full rounded-lg object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        {/* Latest Project Section */}
        <div className="p-6 border-l border-gray-300 bg-gray-50">
          <h2 className="text-2xl font-bold mb-8">
            About of ASM Flight Management
          </h2>
          <div className="relative">
            {/* Controls */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 flex items-center">
              <Button
                type="default"
                shape="circle"
                icon={<LeftOutlined />}
                className="ml-2 shadow"
                onClick={() => carouselRef.current?.prev()}
              />
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 flex items-center">
              <Button
                type="default"
                shape="circle"
                icon={<RightOutlined />}
                className="mr-2 shadow"
                onClick={() => carouselRef.current?.next()}
              />
            </div>

            {/* Carousel */}
            <Carousel
              ref={carouselRef}
              autoplay
              dots
              infinite
              speed={500}
              autoplaySpeed={2500}
              pauseOnHover
              adaptiveHeight
              className="rounded-lg"
            >
              {slides.map((s, idx) => (
                <div key={idx} className="px-1">
                  <img
                    src={s.src}
                    alt={s.alt}
                    className="h-[380px] w-full rounded-lg object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryLatest;
