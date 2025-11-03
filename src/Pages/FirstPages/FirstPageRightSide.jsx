import React, { useRef } from "react";
import { Button, Avatar, Timeline, Card } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { HiChevronDoubleRight } from "react-icons/hi";

const { Title, Text } = Typography;
const experiences = [
  {
    year: "2022 - Present",
    title: "Squadron Leader – Bangladesh Air Force",
    description:
      " Spearheaded airport security initiatives ensuring aviation and passenger safety.",
  },
  {
    year: "2022 - Present",
    title: "ASM at Flight Management – HSIA",
    description:
      "Oversaw daily flight operations for over 300 domestic and international flights across 2 terminals and 42 airlines, under the challenge of a single-runway system. Led the development and implementation of the HSIA Flight Management Software to streamline data processing.",
  },
  {
    year: "2022 - 2023",
    title: "Officer In-charge – Bangladesh Air Force C & M Unit",
    description:
      " Oversaw unit security, ensuring a safe and secure operational environment.  ",
  },
];

const FirstPageRightSide = () => {
  const flipBookRef = useRef();
  return (
    <div className="h-[500px]  w-[550px] my-10  p-2 flex justify-center items-center  ">
      <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl  p-4">
        <div className="bg-white  rounded-xl    ">
          <div className="  mx-auto   p-6 rounded-md ">
            <Title level={3} className="text-center font-bold ">
              Work Experience
            </Title>
            <Timeline mode="left" className="text-gray-700">
              {experiences.map((exp, index) => (
                <Timeline.Item
                  key={index}
                  dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
                  color="blue"
                >
                  <Text className="text-blue-500 font-medium">{exp.year}</Text>
                  <br />
                  <Text strong className="text-lg block mt-1">
                    {exp.title}
                  </Text>
                  <Text className="text-gray-600 text-sm">
                    {exp.description}
                  </Text>
                </Timeline.Item>
              ))}
            </Timeline>

            <div className="flex justify-end mb-2">
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
    </div>
  );
};

export default FirstPageRightSide;
