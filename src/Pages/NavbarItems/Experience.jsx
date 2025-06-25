
import React from 'react';
import { Card } from 'antd';
import { EnvironmentOutlined, ClockCircleOutlined } from '@ant-design/icons';
// import { Timeline, Card } from 'antd';
import Flight from '../../assets/skills/flight management.PNG';
import Leader from '../../assets/skills/avsec.jpg';
import Officer from '../../assets/skills/military traning.png';
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
      <img src={exp.icon} alt="logo" className="w-24 h-24 object-contain mt-1" />
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
                  <div className="min-h-screen bg-gradient-to-r from-indigo-950 to-indigo-800 p-6 flex justify-center items-center">
                     <div className='bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl m-4 p-8'>
                         <div className="bg-white rounded-xl shadow-lg w-full max-w-5xl flex flex-col md:flex-row overflow-hidden">
                             {/* Left Side - Profile */}
                               <div className="  w-full md:w-1/2 p-8 flex flex-col items-center "> 
                               <h2 className='text-2xl font-bold m-4'>Future Experience </h2>  
                                 <div className='flex mb-4'>
                                     
                                    <p className='ms-4 mt-4'>
                                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quam repudiandae animi aliquam adipisci! Itaque, repellendus laudantium reiciendis libero facere magni, quo hic totam iusto quia saepe delectus maxime, sequi atque iure fugit excepturi! Minima, nobis ad temporibus consequuntur consectetur fuga cum numquam earum veniam, voluptas odit error cumque! Facere accusamus laborum incidunt culpa illum deleniti corporis tenetur provident nemo voluptatibus possimus fugit, neque dolor deserunt dolore quaerat molestiae reprehenderit ut non doloribus inventore. Nulla harum reprehenderit sequi praesentium totam, nam qui repudiandae blanditiis quae ullam, quaerat aperiam fugit! Provident rem reprehenderit at dolores nobis! Unde cumque vitae ullam excepturi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque temporibus incidunt expedita veritatis culpa corporis et possimus unde excepturi vero.
                                    </p>
                                      </div>
                               </div>
                             {/* Right Side - Experience */}                                 
                               <div className="w-full md:w-1/2 bg-gray-100 p-8">                                 
                                   <div>                                   
                                             <div className="max-w-3xl mx-auto p-4">
                                              <h2 className="text-2xl font-bold mb-6">Experience</h2>
                                              {experiences.map((exp, idx) => (
                                                <ExperienceCard exp={exp} key={idx} />
                                              ))}
                                            </div>
                                   </div>
                               </div>                                         
                             </div>
                           </div>                              
                       </div>

  );
};

export default ExperienceSection;





