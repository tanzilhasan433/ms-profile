
import React from 'react';
import { Card } from 'antd';
import { EnvironmentOutlined, ClockCircleOutlined } from '@ant-design/icons';
// import { Timeline, Card } from 'antd';
import Flight from '../../assets/skills/flight management.PNG';
import Leader from '../../assets/skills/avsec.jpg';
import Officer from '../../assets/skills/military traning.png';
const experiences = [
  {
    title: "Airport Flight Management",
    company: "Hazrat Shahjalal International Airport",
    duration: "Jan 2022 - Present",
    time: "3 yrs 6 mos",
    location: "Flight Management Systems, Aviation",
    icon: {Flight}, // optional logo path
  },
  {
    title: "Squadron Leader",
    company: "Bangladesh Air Force",
    duration: "Dec 2017 - Present",
    time: "7 yrs 7 mos",
    location: "Bangladesh",
    icon: {Leader}, // optional logo path
  },
  {
    title: "Officer-In-Charge",
    company: "Bangladesh Air Force C&M Unit LMH",
    duration: "Dec 2018 - Jan 2022",
    time: "3 yrs 2 mos",
    location: "BAF Care and Maintenance Unit Lalmonirhat",
    icon: {Officer},
  },
];

const ExperienceCard = ({ exp }) => (
  <Card className="w-full mb-4 shadow-md">
    <div className="flex items-start gap-4">
      <img src={exp.icon} alt="logo" className="w-36 h-36 object-contain mt-1" />
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
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Experience</h2>
      {experiences.map((exp, idx) => (
        <ExperienceCard exp={exp} key={idx} />
      ))}
    </div>
  );
};

export default ExperienceSection;
