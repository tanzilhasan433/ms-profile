import { useState } from "react";
import { HiChevronDoubleLeft } from "react-icons/hi";
import Caab1 from "../../assets/certificate/CAAB Certificate_1.JPEG.jpg";
import Caab2 from "../../assets/certificate/CAAB Certificate_2.JPEG.jpg";
import Caab3 from "../../assets/certificate/CAAB Certificate_3.JPEG.jpg";
import Caab7 from "../../assets/certificate/CAAB Certificate_7.JPEG.jpg";

import { Button, Card } from "antd";
import { Pagination } from "antd";
const { Meta } = Card;
const Course = () => {

  const caabImages = [Caab1, Caab2, Caab3, Caab7];
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="h-[500px]  w-[550px] my-10  p-4 flex justify-center items-center  ">
      <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl  p-5">
        <div className="bg-white  rounded-xl ">
          {/* Left Side - Profile */}
          <div className="  mx-auto   p-6 rounded-md">
            <h2 className="text-2xl font-bold text-center">Courses Certificate </h2>
            <img
              src={caabImages[currentPage - 1]}
              alt={`Certificate ${currentPage}`}
              className="w-full h-96 object-contain mt-4"
            />
            <Pagination
              current={currentPage}
              onChange={handlePageChange}
              total={caabImages.length}
              pageSize={1}
              className="mt-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Course;
