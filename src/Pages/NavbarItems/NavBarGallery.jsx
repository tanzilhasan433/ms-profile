
import React from 'react';
import {  Card } from 'antd';
const { Meta } = Card;
import { Carousel } from 'antd';

const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const NavBarGallery = () => {



  return (
    
                      <div className="min-h-screen bg-gradient-to-r from-indigo-950 to-indigo-800 p-6 flex justify-center items-center">
               <div className='bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl m-4 p-8'>
                   <div className="bg-white rounded-xl shadow-lg w-full max-w-5xl flex flex-col md:flex-row overflow-hidden">
                       {/* Left Side - Profile */}
                         <div className="  w-full md:w-1/2 p-8 flex flex-col items-center "> 
                         
                            hello world..........! 

                                                                  {/* <>
                                        <Carousel arrows infinite={false}>
                                          <div>
                                            <h3 style={contentStyle}>1</h3>
                                          </div>
                                          <div>
                                            <h3 style={contentStyle}>2</h3>
                                          </div>
                                          <div>
                                            <h3 style={contentStyle}>3</h3>
                                          </div>
                                          <div>
                                            <h3 style={contentStyle}>4</h3>
                                          </div>
                                        </Carousel>


                                      </> */}
                                
                           
                         </div>
                       {/* Right Side - Experience */}                                 
                         <div className="w-full md:w-1/2 bg-gray-100 p-8">                                 
                            
                                  <>
                                        <Carousel autoplay arrows infinite={false}>
                                          <div>
                                            <h3 style={contentStyle}>1</h3>
                                          </div>
                                          <div>
                                            <h3 style={contentStyle}>2</h3>
                                          </div>
                                          <div>
                                            <h3 style={contentStyle}>3</h3>
                                          </div>
                                          <div>
                                            <h3 style={contentStyle}>4</h3>
                                          </div>
                                        </Carousel>

                                            <br />
                                            <Carousel autoplay arrows dotPosition="left" infinite={false}>
                                              <div>
                                                <h3 style={contentStyle}>1</h3>
                                              </div>
                                              <div>
                                                <h3 style={contentStyle}>2</h3>
                                              </div>
                                              <div>
                                                <h3 style={contentStyle}>3</h3>
                                              </div>
                                              <div>
                                                <h3 style={contentStyle}>4</h3>
                                              </div>
                                            </Carousel>
                                      </>
                           
                         </div>                                         
                       </div>
                     </div>                              
                 </div>
                 
  );
};

export default NavBarGallery;




