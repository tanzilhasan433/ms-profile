
import React from 'react';

import award1 from '../../assets/award/award-1.jfif'
import award2 from '../../assets/award/award-2.jfif'
import award3 from '../../assets/award/award-3.jfif'
import award4 from '../../assets/award/award-4.jfif'
// import award5 from '../../assets/award/award-5.jfif'
// import award6 from '../../assets/award/award-6.jfif'
// import award7 from '../../assets/award/award-7.jfif'

import {  Card } from 'antd';
const { Meta } = Card;

const awards = [
  {
    title: 'Best Performer Award',
    description: 'Received for outstanding performance in 2023.',
    image: award1,
  },
  {
    title: 'Leadership Excellence',
    description: 'Honored for excellent leadership at BAF 2022.',
    image: award2,
  }

];

const certificates = [
  {
    title: 'Flight Management Certification',
    description: 'Certified in airport flight operations and systems.',
    image: award3,
  },
  {
    title: 'AVSEC Training Completion',
    description: 'Completed advanced Aviation Security training.',
    image: award4,
  }
];
const Award = () => {
    return (
        
            <div className="min-h-screen bg-gradient-to-r from-indigo-950 to-indigo-800 p-6 flex justify-center items-center">
               <div className='bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl m-4 p-8'>
                   <div className="bg-white rounded-xl shadow-lg w-full max-w-5xl flex flex-col md:flex-row overflow-hidden">
                       {/* Left Side - Profile */}
                         <div className="  w-full md:w-1/2 p-8 flex flex-col items-center "> 
                         <h2 className='text-2xl font-bold m-4'>Award 🏆  </h2>  
                            <div className='flex mb-4'>
                             
                                        <div className="w-full md:w-1/2 p-6 flex flex-col items-center">
                                          
                                          <div className="grid grid-cols-1 gap-4">
                                            {awards.map((award, index) => (
                                              <Card
                                                key={index}
                                                hoverable
                                                style={{ width: 200 }}
                                                cover={<img alt={award.title} src={award.image} />}
                                              >
                                                <Meta title={award.title} description={award.description} />
                                              </Card>
                                            ))}
                                          </div>
                                        </div>
                           </div>
                         </div>
                       {/* Right Side - Experience */}                                 
                         <div className="w-full md:w-1/2 bg-gray-100 p-8">                                 
                             <div>
                               <h2 className="text-2xl font-bold mb-4">📜 Certificates</h2>
                              <div className="grid grid-cols-1 gap-4 ">
                                {certificates.map((cert, index) => (
                                  <Card
                                    key={index}
                                    hoverable
                                    style={{ width: 200 }}
                                    cover={<img alt={cert.title} src={cert.image} />}
                                  >
                                    <Meta title={cert.title} description={cert.description} />
                                  </Card>
                                ))}
                              </div>
                             </div>
                         </div>                                         
                       </div>
                     </div>                              
                 </div>
    );
};

export default Award;




