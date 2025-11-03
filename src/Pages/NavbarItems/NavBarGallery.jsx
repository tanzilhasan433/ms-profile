
import React, { useRef } from "react";
import { Carousel, Button, Card } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import ms10 from "../../assets/GalleryOnePhoto/masud-sir (10).jpeg";
import ms11 from "../../assets/GalleryOnePhoto/masud-sir (11).jpeg";
import ms12 from "../../assets/GalleryOnePhoto/masud-sir (12).jpeg";
import ms13 from "../../assets/GalleryOnePhoto/masud-sir (13).jpeg";

const { Meta } = Card;

const slides = [
  { src: ms10, alt: "image 10" },
  { src: ms11, alt: "image 11" },
  { src: ms12, alt: "image 12" },
  { src: ms13, alt: "image 13" },
];

const NavBarGallery = () => {
  const carouselRef = useRef(null);

  return (
    <div className="my-10 flex w-full justify-center">
      <div className="w-[550px] max-w-full rounded-xl bg-gradient-to-r from-blue-400 to-blue-600 p-5">
        <div className="rounded-xl bg-white p-4">
          <h2 className="text-2xl font-bold text-center ">Gallery at HSIA </h2>
          <div className="relative">
            {/* Controls */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 flex items-center mt-8">
              <Button
                type="default"
                shape="circle"
                icon={<LeftOutlined />}
                className="ml-2 shadow mb-4 mt-4"
                onClick={() => carouselRef.current?.prev()}
              />
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 flex items-center mt-8">
              <Button
                type="default"
                shape="circle"
                icon={<RightOutlined />}
                className="mr-2 shadow mb-4 mt-4"
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

export default NavBarGallery;
