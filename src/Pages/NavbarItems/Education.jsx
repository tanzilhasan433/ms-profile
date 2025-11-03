import React, { useRef } from "react";
import { Button, Card } from "antd";
import { HiChevronDoubleRight } from "react-icons/hi";
import { HiChevronDoubleLeft } from "react-icons/hi";
const { Meta } = Card;

const Education = () => {
   const flipBookRef = useRef();
  const educationData = [
    {
      year: "2015 - 2019",
      title: "BBA - Bangladesh University of Professional-BUP",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas obcaecati animi vel minus dolore vitae magni voluptates.",
    },
    {
      year: "2010 - 2012",
      title: "HSC : Business Studies - Dhaka Residential School & College",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas obcaecati animi vel minus dolore vitae magni voluptates.",
    },
    {
      year: "2001 - 2010",
      title: "SSC : Business Studies - Bangladesh Nevy School & College",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas obcaecati animi vel minus dolore vitae magni voluptates.",
    },
  ];

  return (
    <div className="h-[500px]  w-[550px] my-10  p-4 flex justify-center items-center ">
      <div className="bg-gradient-to-r from-blue-600 to-blue-600 rounded-xl  p-5">
        <div className="bg-white  rounded-xl ">
          {/* Left Side - Profile */}
          <div className="  mx-auto   p-4 rounded-md ">
            <h2 className="text-2xl font-bold text-center">Education </h2>
            <div className="flex mb-4">
              <div className="space-y-8 border-l-2 border-blue-500 pl-4">
                {educationData.map((edu, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-[18px] top-1.5 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>
                    <h4 className="font-semibold text-blue-600">{edu.year}</h4>
                    <h3 className="text-lg font-bold">{edu.title}</h3>
                    <p className="text-gray-600 text-sm">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
                        
          </div>
          <div className="flex justify-end ">
                      <Button
                        type="primary"
                        size="large"
                        onClick={() => flipBookRef.current.pageFlip().flipPrev()}
                      >
                        <HiChevronDoubleRight />
                      </Button>
                    </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
