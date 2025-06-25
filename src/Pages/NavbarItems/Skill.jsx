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
                         <h2 className='text-2xl font-bold m-4'>skill Pages  </h2>  
                            <div className='flex mb-4'>
                             
                                      <div className='flex flex-wrap justify-start m-4 flex gap-4'>
                                           
                                              <Card
                                                hoverable
                                                style={{ width: 200, height: 260 }}
                                                cover={< img className='h-38 w-full'  alt="example" src={flight} />}
                                            >
                                                <Meta title="Flight Management" description="https://hsia.gov.bd/" />
                                            </Card>
                                              <Card
                                                hoverable
                                                style={{ width: 200, height: 260 }}
                                                cover={< img className='h-38 w-full' alt="example" src={hsia} />}
                                            >
                                                <Meta title="Airport HSIA" description="https://hsia.gov.bd/" />
                                            </Card>
                                              <Card
                                                hoverable
                                                style={{ width: 200, height: 260  }}
                                                cover={< img className='h-38 w-full' alt="example" src={cargo} />}
                                            >
                                                <Meta title="Flight Management" description="www.instagram.com" />
                                            </Card>
                                              <Card
                                                hoverable
                                                style={{ width: 200, height: 260 }}
                                                cover={< img className='h-38 w-full' alt="example" src={cargo2} />}
                                            >
                                                <Meta title="Flight Management" description="www.instagram.com" />
                                            </Card>
                                              <Card
                                                hoverable
                                                style={{ width: 200, height: 260 }}
                                                cover={< img className='h-38 w-full' alt="example" src={avsec} />}
                                            >
                                                <Meta title="Flight Management" description="www.instagram.com" />
                                            </Card>
                                              <Card
                                                hoverable
                                                style={{ width: 200, height: 260 }}
                                                cover={< img className='h-38 w-full' alt="example" src={crisis} />}
                                            >
                                                <Meta title="Flight Management" description="www.instagram.com" />
                                            </Card>

                                              

                                        </div>
                           </div>
                         </div>
                       {/* Right Side - Experience */}                                 
                         <div className="w-full flex flex-wrap justify-start md:w-1/2 bg-gray-100 p-8 gap-4">                                 
                                                                                          <Card
                                                hoverable
                                                style={{ width: 200, height: 260 }}
                                                cover={< img className='h-38 w-full' alt="example" src={joint} />}
                                            >
                                                <Meta title="Flight Management" description="www.instagram.com" />
                                            </Card>
                                              <Card
                                                hoverable
                                                style={{ width: 200, height: 260 }}
                                                cover={< img className='h-38 w-full' alt="example" src={jungle} />}
                                            >
                                                <Meta title="Flight Management" description="www.instagram.com" />
                                            </Card>
                                           <Card
                                                hoverable
                                                style={{ width: 200, height: 260 }}
                                                cover={<img className='h-38 w-full' alt="example" src={militery} />}
                                            >
                                                <Meta title="Flight Management" description="www.instagram.com" />
                                            </Card>
                                              <Card
                                                hoverable
                                                style={{ width: 200, height: 260 }}
                                                cover={<img className='h-38 w-full' alt="example" src={public1} />}
                                            >
                                                <Meta title="Flight Management" description="www.instagram.com" />
                                            </Card>
                                              <Card
                                                hoverable
                                                style={{ width: 200, height: 260 }}
                                                cover={<img className='h-38 w-full' alt="example" src={public2} />}
                                            >
                                                <Meta title="Flight Management" description="www.instagram.com" />
                                            </Card>
                                              <Card
                                                hoverable
                                                style={{ width: 200, height: 260 }}
                                                cover={<img className='h-38 w-full' alt="example" src={weapon} />}
                                            >
                                                <Meta title="Flight Management" description="www.instagram.com" />
                                            </Card>
                                              <Card
                                                hoverable
                                                style={{ width: 200, height: 260 }}
                                                cover={<img className='h-38 w-full' alt="example" src={sita} />}
                                            >
                                                <Meta title="Flight Management" description="www.instagram.com" />
                                            </Card>
                                              <Card
                                                hoverable
                                                style={{ width: 200, height: 260 }}
                                                cover={<img className='h-38 w-full' alt="example" src={security} />}
                                            >
                                                <Meta title="Flight Management" description="www.instagram.com" />
                                            </Card> 
                             
                         </div>                                         
                       </div>
                     </div>                              
                 </div>
    );
};

export default Skill;







