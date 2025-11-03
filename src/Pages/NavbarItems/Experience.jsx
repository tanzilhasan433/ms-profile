import React, { useRef } from "react";
import { Button, Card } from "antd";
import { HiChevronDoubleRight } from "react-icons/hi";
import { EnvironmentOutlined, ClockCircleOutlined } from "@ant-design/icons";
import Flight from "../../assets/skills/flight management.jpeg";
import Leader from "../../assets/skills/avsec.jpg";
import Officer from "../../assets/skills/military traning.png";
const { Meta } = Card;
const experiences = [
  {
    title: "Airport Flight Management",
    company: "Hazrat Shahjalal International Airport",
    duration: "Jan 2022 - Present",
    time: "3 yrs 6 mos",
    location: "Flight Management Systems, Aviation",
    icon: Flight, // optional logo path
  },
  {
    title: "Squadron Leader",
    company: "Bangladesh Air Force",
    duration: "Dec 2017 - Present",
    time: "7 yrs 7 mos",
    location: "Bangladesh",
    icon: Leader, // optional logo path
  },
  {
    title: "Officer-In-Charge",
    company: "Bangladesh Air Force C&M Unit LMH",
    duration: "Dec 2018 - Jan 2022",
    time: "3 yrs 2 mos",
    location: "BAF Care and Maintenance Unit Lalmonirhat",
    icon: Officer,
  },
];

const ExperienceCard = ({ exp }) => (
  <Card className="w-full mb-4 shadow-md">
    <div className="flex items-start gap-4">
      <img
        src={exp.icon}
        alt="logo"
        className="w-16 h-16 object-contain mt-1"
      />
      <div>
        <h3 className="text-lg font-semibold">{exp.title}</h3>
        <p className="text-sm text-gray-700">{exp.company}</p>
        <p className="text-sm text-gray-500 flex items-center gap-2">
          <ClockCircleOutlined /> {exp.duration} · {exp.time}
        </p>
        <p className="text-sm text-gray-500 flex items-center gap-2">
          <EnvironmentOutlined /> {exp.location}
        </p>
      </div>
    </div>
  </Card>
);

const ExperienceSection = () => {
  const flipBookRef = useRef();
  return (
    <div className="h-[500px]  w-[550px] my-10   flex justify-center items-center  ">
      <div className="bg-gradient-to-r from-blue-600 to-blue-600 rounded-xl  p-5">
        <div className="bg-white  rounded-xl">
          {/* Left Side - Profile */}
          <div className="  mx-auto   p-6 rounded-md">
            <div className="max-w-2xl mx-auto p-2">
              <h2 className="text-2xl font-bold text-center ">Experience</h2>
              {experiences.map((exp, idx) => (
                <ExperienceCard exp={exp} key={idx} />
              ))}
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

export default ExperienceSection;
