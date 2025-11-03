import React, { useRef } from "react";
import { Carousel, Button, Card } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import ms10 from "../../assets/certificate/CAAB Certificate_1.JPEG.jpg";
import ms11 from "../../assets/certificate/CAAB Certificate_2.JPEG.jpg";
import ms12 from "../../assets/certificate/CAAB Certificate_3.JPEG.jpg";
import ms13 from "../../assets/certificate/CAAB Certificate_7.JPEG.jpg";
import ms1 from "../../assets/certificate/certificate (1).jfif";
import ms2 from "../../assets/certificate/certificate (2).jfif";
import ms3 from "../../assets/certificate/certificate (3).jfif";
import ms4 from "../../assets/certificate/certificate (4).jfif";
import ms5 from "../../assets/certificate/certificate (5).jfif";
import ms6 from "../../assets/certificate/certificate (6).jfif";
import ms7 from "../../assets/certificate/certificate (7).jfif";
// import ms8 from "../../assets/certificate/certificate (8).jfif";
// import ms9 from "../../assets/certificate/certificate (9).jfif";


const { Meta } = Card;

const slides = [
  { src: ms10, alt: "image 10" },
  { src: ms11, alt: "image 11" },
  { src: ms12, alt: "image 12" },
  { src: ms13, alt: "image 13" },
  { src: ms1, alt: "image 1" },
  { src: ms2, alt: "image 2" },
  { src: ms3, alt: "image 3" },
  { src: ms4, alt: "image 4" },
  { src: ms5, alt: "image 5" },
  { src: ms6, alt: "image 6" },
  { src: ms7, alt: "image 7" },
//   { src: ms8, alt: "image 8" },
//   { src: ms9, alt: "image 9" },
  
];
const EducationTwo = () => {
     const carouselRef = useRef(null);
    return (
        
         <div className="min-h-screen bg-gradient-to-r from-indigo-950 to-indigo-800 flex items-center justify-center p-8">
           <div className="bg-white rounded-xl shadow-lg w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
             {/* Skills Section */}
             <div className="p-6">
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

export default EducationTwo;