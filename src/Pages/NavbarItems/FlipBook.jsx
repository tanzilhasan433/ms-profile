// import React, { useState } from "react";

// import HTMLFlipBook from "react-pageflip";

// import pdfFile from "../../assets/Book/abc.pdf";

// import { Document, pdfjs } from "react-pdf";


// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// const Pages = React.forwardRef((props, ref) => {
//   return (
//     <div className="demoPage" ref={ref}>
//       /* ref required */
//       <h1>Page Header</h1>
//       <p>{props.children}</p>
//       <p>Page number: {props.number}</p>
//     </div>
//   );
// });

// Pages.displayName = "Pages";

// function FlipBook() {
//   const [numPages, setNumPages] = useState(1);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   return (
//     <div className="h-screen w-screen flex flex-col justify-center items-center bg-indigo-400">
//         <h1 className="text-3xl font-bold text-center ">FlipBook</h1>
//       <HTMLFlipBook width={400} height={500}>
//         {[...Array(numPages).keys()].map((pg) => (
//           <Pages key={pg} number={pg + 1}>
//             <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
//               <Pages pageNumber={pg} width={400} />
//             </Document>
//             <p>
//               Page {pg + 1} of {numPages}
//             </p>
//           </Pages>
//         ))}
//       </HTMLFlipBook>
//     </div>
//   );
// }

// export default FlipBook;





// import HTMLFlipBook from "react-pageflip";
// import FirstPages from "../FirstPages/FirstPages";
// import About from "./About";
// import Education from "./Education";
// import { useRef } from "react";
// import {  Button } from 'antd';

// const FlipBook = () => {
//   // const flipBook = useRef();
//   const flipBook = useRef();
//   return (
//     <div className="">
//       <HTMLFlipBook
//         width={500}
//         height={700}
//         size="stretch"
//         minWidth={315}
//         maxWidth={1000}
//         minHeight={400}
//         maxHeight={1536}
//         maxShadowOpacity={1.5}
//         showCover={true}
//         mobileScrollSupport={true}
//         className="shadow-xl"
//       >
//         {/* Each child is one page */}
//         <div className="bg-white p-6">
//           <FirstPages></FirstPages>
//         </div>
//         <div className="bg-white p-6">
//           <About></About>
//         </div>
//         <div className="bg-white p-6">
//           <Education></Education>
//         </div>
//       </HTMLFlipBook>
//       <Button onClick={() => flipBook.current.pageFlip().flipNext()}>Next</Button>
//       <Button onClick={() => flipBook.current.pageFlip().flipPrev()}>Previous</Button>
//     </div>
//   );
// };

// export default FlipBook;




import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import FirstPages from "../FirstPages/FirstPages";
import About from "./About";
import Education from "./Education";
import { Button } from "antd";

const FlipBook = () => {
  const flipBookRef = useRef();

  return (
    <div className=" mx-auto ">
      
      {/* Flipbook Component */}
<div className="flex justify-center bg-gradient-to-r from-indigo-950 to-indigo-800">
        <HTMLFlipBook
        width={800}
        height={500}
        // size="stretch"
        // minWidth={315}
        // maxWidth={1000}
        // minHeight={400}
        // maxHeight={1536}
        // maxShadowOpacity={0.5}
        // showCover={true}
        // mobileScrollSupport={true}
        className="shadow-2xl "
        ref={flipBookRef}

      >
        {/* <div className="bg-white p-6">
          <FirstPages />
        </div>
        <div className="bg-white p-6">
          <About />
        </div>
        <div className="bg-white p-6">
          <Education />
        </div> */}
        <div className="demoPage bg-amber-400"><FirstPages /></div>
            <div className="demoPage bg-cyan-500"><FirstPages /></div>
            <div className="demoPage bg-violet-500"><FirstPages /></div>
            <div className="demoPage bg-red-500"><FirstPages /></div>
      </HTMLFlipBook>
</div>

      {/* Navigation Buttons */}
      <div className="flex space-x-4 mt-6">
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
      </div>
    </div>
  );
};

export default FlipBook;
