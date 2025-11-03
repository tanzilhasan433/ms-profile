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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas obcaecati animi vel minus dolore vitae magni voluptates, nihil repellendus, libero dicta, eligendi quis ipsa id.",
  },
  {
    year: "2022 - Present",
    title: "ASM at Flight Management – HSIA",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas obcaecati animi vel minus dolore vitae magni voluptates, nihil repellendus, libero dicta, eligendi quis ipsa id.",
  },
  {
    year: "2022 - 2023",
    title: "Officer In-charge – Bangladesh Air Force C & M Unit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas obcaecati animi vel minus dolore vitae magni voluptates, nihil repellendus, libero dicta, eligendi quis ipsa id.",
  },
];

const FirstPageRightSide = () => {
   const flipBookRef = useRef();
  return (
    <div className="h-[500px]  w-[550px] my-10  p-2 flex justify-center items-center  ">
      <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl  p-5">
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
