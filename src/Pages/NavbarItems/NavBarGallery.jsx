// import ms10 from "../../assets/GalleryOnePhoto/masud-sir (10).jpeg";
// import ms11 from "../../assets/GalleryOnePhoto/masud-sir (11).jpeg";
// import ms12 from "../../assets/GalleryOnePhoto/masud-sir (12).jpeg";
// import ms13 from "../../assets/GalleryOnePhoto/masud-sir (13).jpeg";
// // import ms20 from "../../assets/GalleryOnePhoto/masud-sir (20).jpeg";
// // import ms23 from "../../assets/GalleryOnePhoto/masud-sir (23).jpeg";
// // import ms29 from "../../assets/GalleryOnePhoto/masud-sir (29).jpeg";
// // import ms27 from "../../assets/GalleryOnePhoto/masud-sir (27).jpeg";
// // import ms28 from "../../assets/GalleryOnePhoto/masud-sir (28).jpeg";
// // import ms24 from "../../assets/GalleryOnePhoto/masud-sir (24).jpeg";
// // import ms1 from "../../assets/GalleryOnePhoto/masud-sir (1).jpeg";
// // import ms2 from "../../assets/GalleryOnePhoto/masud-sir (2).jpeg";
// // import ms7 from "../../assets/GalleryOnePhoto/masud-sir (7).jpeg";
// // import ms14 from "../../assets/GalleryOnePhoto/masud-sir (14).jpeg";
// // import ms21 from "../../assets/GalleryOnePhoto/masud-sir (21).jpeg";
// // import ms22 from "../../assets/GalleryOnePhoto/masud-sir (22).jpeg";
// import { Button, Card } from "antd";
// // import { useNavigate } from "react-router";
// const { Meta } = Card;
// import { Carousel } from "antd";

// const NavBarGallery = () => {
//   // const navigate = useNavigate();
//   return (
//     <div className="h-[500px]  w-[550px] my-10  p-4 flex justify-center items-center  ">
//       <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl  p-5">
//         <div className="bg-white  rounded-xl  ">
          
//           {/* Left Side - Profile */}
//           <div className=" mx-auto   p-6 rounded-md ">
            
//             <Carousel autoplay arrows infinite={false} >
//               <div>
//                 <img src={ms10} alt="image 10" />
//               </div>
//               <div>
//                 <img src={ms11} alt="image 10" />
//               </div>
//               <div>
//                 <img src={ms12} alt="image 10" />
//               </div>
//               <div>
//                 <img src={ms13} alt="image 10" />
//               </div>
//             </Carousel>
//             {/* <br /> */}
//             {/* <Carousel autoplay arrows infinite={false}>
//               <div>
//                 <img src={ms20} alt="image 10" />
//               </div>
//               <div>
//                 <img src={ms23} alt="image 10" />
//               </div>
//               <div>
//                 <img src={ms29} alt="image 10" />
//               </div>
//               <div>
//                 <img src={ms27} alt="image 10" />
//               </div>
//             </Carousel> */}
           
//           </div>
//           {/* Right Side - Experience */}
//           {/* <div className="w-full md:w-1/2 bg-gray-100 p-8">
//             <div>
//               <Carousel autoplay arrows infinite={false} className="h-50">
//                 <div>
//                   <img src={ms28} alt="image 10" />
//                 </div>
//                 <div>
//                   <img src={ms24} alt="image 10" />
//                 </div>
//                 <div>
//                   <img src={ms1} alt="image 10" />
//                 </div>
//                 <div>
//                   <img src={ms2} alt="image 10" />
//                 </div>
//               </Carousel>
//               <br />
//               <Carousel autoplay arrows infinite={false}>
//                 <div>
//                   <img src={ms14} alt="image 10" />
//                 </div>
//                 <div>
//                   <img src={ms7} alt="image 10" />
//                 </div>
//                 <div>
//                   <img src={ms21} alt="image 10" />
//                 </div>
//                 <div>
//                   <img src={ms22} alt="image 10" />
//                 </div>
//               </Carousel>
//             </div>
//           </div> */}
//           {/* <div className="text-center text-sm text-gray-400 mt-4">4</div> */}
//           {/* <div className="flex justify-end">
//             <Button type="primary" onClick={() => navigate("/")}>
//               1
//             </Button>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavBarGallery;




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

export default NavBarGallery;
