import { useState } from 'react';
import { useNavigate } from 'react-router';
import { HiChevronDoubleRight } from "react-icons/hi";
import Caab1 from '../../assets/certificate/CAAB Certificate_1.JPEG.jpg';
import Caab2 from '../../assets/certificate/CAAB Certificate_2.JPEG.jpg';
import Caab3 from '../../assets/certificate/CAAB Certificate_3.JPEG.jpg';
import Caab7 from '../../assets/certificate/CAAB Certificate_7.JPEG.jpg';
import Caab4 from '../../assets/certificate/certificate (1).jfif';
import Caab5 from '../../assets/certificate/certificate (2).jfif';
import Caab6 from '../../assets/certificate/certificate (3).jfif';
import Caab8 from '../../assets/certificate/certificate (4).jfif';
import {  Button, Card } from 'antd';
import { Pagination } from 'antd';
const { Meta } = Card;
const Course = () => {
  const navigate = useNavigate();
    const caabImages = [Caab1, Caab2, Caab3, Caab7];
    const caabImages2 = [Caab4, Caab5, Caab6, Caab8];
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
    return (
        
            <div className="min-h-screen bg-gradient-to-r from-indigo-950 to-indigo-800 p-4 flex justify-center items-center">
               <div className='bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl  p-8'>
                   <div className="bg-white rounded-xl shadow-lg h-135 w-250 max-w-5xl flex flex-col md:flex-row overflow-hidden">
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
                         <h2 className='text-2xl font-bold '>Award  </h2>                                
                             <div>
                                
                            <img
                                src={caabImages2[currentPage - 1]}
                                alt={`Certificate ${currentPage}`}
                                className="w-full h-96 object-contain"
                              />
                              <Pagination
                                current={currentPage}
                                onChange={handlePageChange}
                                total={caabImages2.length}
                                pageSize={1}
                                className="mt-4"
                              /> 
                                 
                             </div>
                                                             <div className="text-center text-sm text-gray-400 mt-2">5</div>
                                                                <div className="flex justify-end">
                                                                   <Button type="primary" onClick={() => navigate('/skills')}><HiChevronDoubleRight /></Button>
                                                                   </div>
                         </div>                                         
                       </div>
                     </div>                              
                 </div>
    );
};

export default Course;