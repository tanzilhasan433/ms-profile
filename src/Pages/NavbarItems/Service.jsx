import React from "react";
import { Button, Card } from "antd";

import { HiChevronDoubleRight } from "react-icons/hi";
import { HiChevronDoubleLeft } from "react-icons/hi";

import hsiaLogo from "../../assets/EducationPhoto/hsia.jpg";
import flightLogo from "../../assets/skills/flight management.jpeg";
import officerLogo from "../../assets/EducationPhoto/officer-incharge.jpeg";
import squadronLogo from "../../assets/EducationPhoto/squadron.jpeg";

const Service = () => {
  const servicesData = [
    {
      title: "Flight Management",
      logo: flightLogo, // Path to your image
    },
    {
      title: "Aviation Security Forces",
      logo: hsiaLogo,
    },
    {
      title: "Squadron Leader",
      logo: squadronLogo,
    },
    {
      title: "Officer In-Charge",
      logo: officerLogo,
    },
  ];
  return (
    <div className="h-[500px]  w-[550px] my-10  p-4 flex justify-center items-center  ">
      <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl  p-5">
        <div className="bg-white  rounded-xl  ">
          <h2 className="font-bold text-2xl text-center ">Service</h2>
        <div className="grid grid-cols-2   mt-4 mx-auto  p-6 rounded-md">
           
          {servicesData.map((service, index) => (
            <Card key={index} className="text-center shadow-md">
              <div className="flex flex-col items-center space-y-2">
                {service.logo && (
                  <img
                    src={service.logo}
                    alt={service.title}
                    className="w-12 h-12 object-contain"
                  />
                )}

                <h3 className="font-semibold">{service.title}</h3>
                <p className="text-sm text-gray-600">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, debitis similique 
                </p>
              </div>
            </Card>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
