import React from 'react';
import {  Card } from 'antd';
const { Meta } = Card;
const ProjectsPages = () => {
    return (
        
            <div className="min-h-screen bg-gradient-to-r from-indigo-950 to-indigo-800 p-6 flex justify-center items-center">
               <div className='bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl m-4 p-8'>
                   <div className="bg-white rounded-xl shadow-lg w-full max-w-5xl flex flex-col md:flex-row overflow-hidden">
                       {/* Left Side - Profile */}
                         <div className="  w-full md:w-1/2 p-8 flex flex-col items-center "> 
                         <h2 className='text-2xl font-bold m-4'>Project Pages  </h2>  
                            <div className='flex mb-4'>
                             
                              Project pages,,,,,,, 
                           </div>
                         </div>
                       {/* Right Side - Experience */}                                 
                         <div className="w-full md:w-1/2 bg-gray-100 p-8">                                 
                             <div>
                                
                             Project Pages........ 
                             </div>
                         </div>                                         
                       </div>
                     </div>                              
                 </div>
    );
};

export default ProjectsPages;