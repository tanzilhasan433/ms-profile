// import { Button, Card } from 'antd';
// // import { useNavigate } from 'react-router';
// import photo8 from '../../assets/GalleryOnePhoto/masud-sir (7).jpeg';
// // import photo2 from '../../assets/GalleryOnePhoto/masud-sir (20).jpeg';
// import { LeftOutlined, RightOutlined } from '@ant-design/icons';
// import { Carousel } from 'antd';
// const { Meta } = Card;
// const GalleryTwo = () => {
// // const navigate = useNavigate();
//   return (
// <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 to-purple-600 px-4">
//       <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-6xl flex flex-col md:flex-row items-center shadow-lg">
        
//         {/* Left Section */}
//         <div className="flex-1 text-white text-center md:text-left space-y-6">
//           <h1 className="text-4xl font-extrabold leading-snug">Hey, This is Mahmudul Hasan</h1>
//           <p className="text-gray-200">You Can Explore My Protfolio...    ei page e all gallery er carusol dite hobe...</p>
//           <Button type="primary" size="large" className="rounded-xl bg-white text-black hover:bg-gray-100">Explore</Button>

//           {/* Carousel Dots */}
//           <div className="flex space-x-2 pt-6 justify-center md:justify-start">
//             <span className="w-4 h-4 rounded-full border-2 border-white bg-blue-500 flex items-center justify-center">
//               <span className="w-2 h-2 bg-white rounded-full"></span>
//             </span>
//             <span className="w-4 h-4 rounded-full bg-white/50"></span>
//             <span className="w-4 h-4 rounded-full bg-white/50"></span>
//           </div>
//         </div>

//         {/* Right Section - Car Image */}
//         <div className="flex-1 mt-8 md:mt-0">
//           <img
//             src={photo8}
//             alt="Dream Car"
//             className="rounded-2xl shadow-2xl"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GalleryTwo;






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

const GalleryTwo = () => {
  const carouselRef = useRef(null);

  return (
    <div className="my-10 flex w-full justify-center">
      <div className="w-[550px] max-w-full rounded-xl bg-gradient-to-r from-blue-400 to-blue-600 p-5">
        <div className="rounded-xl bg-white p-4">
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

          {/* Optional: caption/card under the carousel */}
          {/* <Card className="mt-4">
            <Meta title="Gallery" description="Masud Sir moments" />
          </Card> */}
        </div>
      </div>
    </div>
  );
};

export default GalleryTwo;

