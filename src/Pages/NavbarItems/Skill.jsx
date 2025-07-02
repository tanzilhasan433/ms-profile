import React from 'react';
import { Card } from 'antd';
import flight from '../../assets/skills/flight management.jpeg'
import cargo from '../../assets/skills/cargo.jpg'
import avsec from '../../assets/skills/avsec.jpg'
import cargo2 from '../../assets/skills/cargo2.jpg'
import crisis from '../../assets/skills/crisis management.png'
import hsia from '../../assets/skills/hsia.png'
import joint from '../../assets/skills/joint service.png'
import jungle from '../../assets/skills/jungle survival.png'
import militery from '../../assets/skills/military traning.png'
import public1 from '../../assets/skills//public affairs.png'
import public2 from '../../assets/skills/public service.png'
import security from '../../assets/skills/security management.png'
import sita from '../../assets/skills/sita.png'
import weapon from '../../assets/skills/weapon.jpg'


const { Meta } = Card;
const Skill = () => {
    return (
        
                      <div className="min-h-screen bg-gradient-to-r from-indigo-950 to-indigo-800 p-6 flex justify-center items-center">
               <div className='bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl m-4 p-8'>
                   <div className="bg-white rounded-xl shadow-lg w-full max-w-5xl flex flex-col md:flex-row overflow-hidden">
                       {/* Left Side - Profile */}
                         <div className="  w-full md:w-1/2 p-8 flex flex-col items-center "> 
                         <h2 className='text-2xl font-bold m-4'>Skill Pages  </h2>  
                            <div className='flex mb-4'>
                             
                                      <div className='flex flex-wrap justify-start m-2 flex gap-2'>
                                           
                                              <Card
                                                hoverable
                                                style={{ width: 135, height: 180 }}
                                                cover={< img className='h-28 w-full'  alt="example" src={flight} />}
                                            >
                                                <Meta className='font-bold' title="" description="Flight Management" />
                                            </Card>
                                              <Card
                                                hoverable
                                                style={{ width: 135, height: 180 }}
                                                cover={< img className='h-28 w-full' alt="example" src={hsia} />}  
                                            >
                                                <Meta className='font-bold' title="" description="HSIA" />
                                            </Card>
                                              <Card
                                                hoverable
                                                style={{ width: 135, height: 180  }}
                                                cover={< img className='h-28 w-full' alt="example" src={cargo} />}
                                            >
                                                <Meta className='font-bold' title="" description="Cargo Operation" />
                                            </Card>
                                              <Card
                                                hoverable
                                                style={{ width: 135, height: 180 }}
                                                cover={< img className='h-28 w-full' alt="example" src={cargo2} />}
                                            >
                                                <Meta className='font-bold' title="" description="Cargo Operation" />
                                            </Card>
                                              <Card
                                                hoverable
                                                style={{ width: 135, height: 180 }}
                                                cover={< img className='h-28 w-full' alt="example" src={avsec} />}
                                            >
                                                <Meta className='font-bold' title="" description="AVSEC" />
                                            </Card>
                                              <Card
                                                hoverable
                                                style={{ width: 135, height: 180 }}
                                                cover={< img className='h-28 w-full' alt="example" src={crisis} />}
                                            >
                                                <Meta className='font-bold' title="" description="Crisis Management" />
                                            </Card>
                                            <Card
                                                hoverable
                                                style={{ width: 135, height: 180 }}
                                                cover={< img className='h-28 w-full' alt="example" src={jungle} />}
                                            >
                                                <Meta className='font-bold' title="" description="Jungle Survival" />
                                            </Card>
                                           <Card
                                                hoverable
                                                style={{ width: 135, height: 180 }}
                                                cover={<img className='h-28 w-full' alt="example" src={militery} />}
                                            >
                                                <Meta className='font-bold' title="" description="Military Training" />
                                            </Card>
                                              <Card
                                                hoverable
                                                style={{ width: 135, height: 180 }}
                                                cover={<img className='h-28 w-full' alt="example" src={public1} />}
                                            >
                                                <Meta className='font-bold' title="" description="Public Service" />
                                            </Card>
                                              

                                        </div>
                           </div>
                         </div>
                       {/* Right Side - Experience */}    
                                                  
                         <div className="w-full flex flex-wrap justify-start md:w-1/2 bg-gray-100 p-8 gap-2 mt-18 mb-54">                                 
                                             <Card
                                             
                                                hoverable
                                                style={{ width: 135, height: 180 }}
                                                cover={< img className='h-28 w-full' alt="example" src={joint} />}
                                            >
                                                <Meta className='font-bold' title="" description="Joint Service" />
                                            </Card>

                                              <Card
                                                hoverable
                                                style={{ width: 135, height: 180 }}
                                                cover={<img className='h-28 w-full' alt="example" src={public2} />}
                                            >
                                                <Meta className='font-bold' title="" description="Public Affairs" />
                                            </Card>
                                              <Card
                                                hoverable
                                                style={{ width: 135, height: 180 }}
                                                cover={<img className='h-28 w-full' alt="example" src={weapon} />}
                                            >
                                                <Meta className='font-bold' title="" description="Weapon Traning" />
                                            </Card>
                                              <Card
                                                hoverable
                                                style={{ width: 135, height: 180 }}
                                                cover={<img className='h-28 w-full' alt="example" src={sita} />}
                                            >
                                                <Meta className='font-bold' title="" description="SITA" />
                                            </Card>
                                              <Card
                                                hoverable
                                                style={{ width: 135, height: 180 }}
                                                cover={<img className='h-28 w-full' alt="example" src={security} />}
                                            >
                                                <Meta className='font-bold' title="" description="Security Management" />
                                            </Card> 
                             
                         </div>                                         
                       </div>
                     </div>                              
                 </div>
    );
};

export default Skill;







