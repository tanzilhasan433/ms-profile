

import React from 'react';
import {  Card } from 'antd';
const { Meta } = Card;
import Caab1 from '../../assets/certificate/CAAB Certificate_1.JPEG.jpg';
import Caab2 from '../../assets/certificate/CAAB Certificate_2.JPEG.jpg';
import Caab3 from '../../assets/certificate/CAAB Certificate_3.JPEG.jpg';
import Caab7 from '../../assets/certificate/CAAB Certificate_7.JPEG.jpg';
import { Carousel } from 'antd';


const Certificate = () => {
    return (
        
                    <div className="min-h-screen bg-gradient-to-r from-indigo-950 to-indigo-800 p-6 flex justify-center items-center">
               <div className='bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl m-4 p-8'>
                   <div className="bg-white rounded-xl shadow-lg w-full max-w-5xl flex flex-col md:flex-row overflow-hidden">
                       {/* Left Side - Profile */}
                         <div className="  w-full h-200 p-8  "> 
                         <h2 className='text-2xl font-bold m-4 text-center'>Certificate  </h2>  
                            
                           <Carousel autoplay>
                                <div>
                                <img src={Caab1} alt="photo" /> 
                                </div>
                                <div>
                                <img src={Caab2} alt="photo" /> 
                                </div>
                                <div>
                                <img src={Caab3} alt="photo" /> 
                                </div>
                                <div>
                                <img src={Caab7} alt="photo" /> 
                                </div>
                            </Carousel>
                         </div>
                                                      
                                                                
                       </div>
                     </div>                              
                 </div>


    );
};

export default Certificate;