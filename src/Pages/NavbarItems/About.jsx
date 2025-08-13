import React, { useRef } from "react";
import { Button, Card } from "antd";
// import { useNavigate } from "react-router";
import HTMLFlipBook from "react-pageflip";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
const { Meta } = Card;
import Image from "../../assets/FirstPagePhoto/sir-8.jpeg";

const About = () => {
  const flipBookRef = useRef();
  // const navigate = useNavigate();
  return (
    <div className="h-[500px]  w-[550px] my-10  p-4 flex justify-center items-center">
      <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl  p-5">
        <div className="bg-white  rounded-xl ">
          {/* Left Side - Profile */}
          <div className="  mx-auto   p-6 rounded-md ">
            <h2 className="text-2xl font-bold ">
              About of ASM Flight Management
            </h2>
            <div className="flex ">
              <img className="w-auto h-42 " src={Image} alt="About-image" />
              <p className="ms-4 mt-4">
                I am Squadron Leader Md Mahmudul Hasan Masud, a driven and
                results-oriented professional with over 8 years of distinguished
                service in the Bangladesh Air Force.
              </p>
            </div>
            <p>
              My career has been defined by a steadfast commitment to
              leadership, operational excellence, and strategic planning across
              a range of dynamic and high-stakes roles. a range of dynamic and
              high-stakes roles.
            </p>
            <br />
            <p>
              Currently serving as the Airport Security Manager and Flight
              Management Officer at Hazrat Shahjalal International Airport
              (HSIA) since January 10, 2022, I specialize in the comprehensive
              management of airport flight
              operations. My core responsibilities include aircraft parking, 
              gate allocation, 
              {/* airline coordination, slot management, and daily flight scheduling, */}
               {/* along with the seamless facilitation of VIP and chartered flights. */}
               {/* I’ve also overseen the allocation of check-in counters, entry gates, boarding bridges, and parking bays with precision and foresight. */}
            </p>

            {/* <div className=" text-sm text-gray-400 mt-2">3</div> */}
            <div className="mt-4  w-full flex justify-start">
              <Button
                type="primary"
                size="large"
                onClick={() => flipBookRef.current.pageFlip().flipPrev()}
              >
                <HiChevronDoubleLeft />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
