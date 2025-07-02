import React, { useState } from 'react';
import Caab1 from '../../assets/certificate/CAAB Certificate_1.JPEG.jpg';
import Caab2 from '../../assets/certificate/CAAB Certificate_2.JPEG.jpg';
import Caab3 from '../../assets/certificate/CAAB Certificate_3.JPEG.jpg';
import Caab7 from '../../assets/certificate/CAAB Certificate_7.JPEG.jpg';
import {  Card } from 'antd';
import { Pagination } from 'antd';
const { Meta } = Card;
const Course = () => {
    const caabImages = [Caab1, Caab2, Caab3, Caab7];
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
    return (
        
            <div className="min-h-screen bg-gradient-to-r from-indigo-950 to-indigo-800 p-6 flex justify-center items-center">
               <div className='bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl m-4 p-8'>
                   <div className="bg-white rounded-xl shadow-lg w-full max-w-5xl flex flex-col md:flex-row overflow-hidden">
                       {/* Left Side - Profile */}
                         <div className="  w-full md:w-1/2 p-8 flex flex-col items-center mt-4"> 
                         <h2 className='text-2xl font-bold '>Courses Certificate  </h2>  


                           <img
                                src={caabImages[currentPage - 1]}
                                alt={`Certificate ${currentPage}`}
                                className="w-full h-96 object-contain"
                              />
                              <Pagination
                                current={currentPage}
                                onChange={handlePageChange}
                                total={caabImages.length}
                                pageSize={1}
                                className="mt-4"
                              />
                              <a href="/certificate">Certificate</a>
                              </div>
                       {/* Right Side - Experience */}                                 
                         <div className="w-full md:w-1/2 bg-gray-100 p-8">  
                         <h2 className='text-2xl font-bold mb-4'>Award  </h2>                                
                             <div>
                                
                               <img src={Caab2} alt="photo" />  
                                 
                             </div>
                         </div>                                         
                       </div>
                     </div>                              
                 </div>
    );
};

export default Course;