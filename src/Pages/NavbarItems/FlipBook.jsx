
import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import FirstPages from "../FirstPages/FirstPages";
import About from "./About";
import Education from "./Education";
import { Button } from "antd";
import FirstPageRightSide from "../FirstPages/FirstPageRightSide";
import ExperienceSection from "./Experience";
import Service from "./Service";
import Course from "./Course";
import Skill from "./Skill";
import NavBarGallery from "./NavBarGallery";
import GalleryTwo from "../Gallery/GalleryTwo";

const FlipBook = () => {
  const flipBookRef = useRef();
  return (
    <div className=" ">
      {/* <Button
        type="primary"
        size=""
        onClick={() => flipBookRef.current.pageFlip().flipPrev()}
      >
        Previous
      </Button> */}
      {/* Flipbook Component */}
      <div className="flex justify-center items-center bg-gradient-to-r from-indigo-950 to-indigo-800">
        <HTMLFlipBook
          width={500}
          height={600}
          
          // size="stretch"
          // minWidth={315}
          // maxWidth={1000}
          // minHeight={400}
          // maxHeight={1536}
          // maxShadowOpacity={0.5}
          // showCover={true}
          // mobileScrollSupport={true}
          className=" "
          ref={flipBookRef}
        >
          <div className="  ">
            <FirstPages />
          </div>
          <div className="">
            <FirstPageRightSide />
          </div>
          {/* <div className="  ">
            <FirstPages />
          </div> */}
          {/* <div className="">
            <FirstPageRightSide />
          </div> */}
          <div className="">
            <About />
          </div>
          <div className="">
            <ExperienceSection />
          </div>
          <div className="">
            <Service />
          </div>
          <div className="">
            <Education />
          </div>
          {/* <div className="">
            <Service />
          </div> */}
          <div className="">
            <Course />
          </div>
          <div className="">
            <Skill />
          </div>
          <div className="">
            <NavBarGallery />
          </div>
          <div className="">
            <GalleryTwo></GalleryTwo>
          </div>
        </HTMLFlipBook>
        {/* <div>
          <Button
            type="primary"
            size=""
            onClick={() => flipBookRef.current.pageFlip().flipNext()}
          >
            Next
          </Button>
        </div> */}
      </div>

      {/* Navigation Buttons */}
      {/* <div className="flex space-x-4 mt-6">
        <Button
          type="primary"
          size="large"
          onClick={() => flipBookRef.current.pageFlip().flipPrev()}
        >
          Previous
        </Button>
        <Button
          type="primary"
          size="large"
          onClick={() => flipBookRef.current.pageFlip().flipNext()}
        >
          Next
        </Button>
      </div> */}
    </div>
  );
};

export default FlipBook;


