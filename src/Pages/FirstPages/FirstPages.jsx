import { Button, Avatar, Timeline, Card } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { HiChevronDoubleRight } from "react-icons/hi";
import Masud from "../../../public/masud_cv.pdf";

const { Title, Text } = Typography;
import {
  FacebookFilled,
  TwitterSquareFilled,
  LinkedinFilled,
  InstagramFilled,
} from "@ant-design/icons";
import sirPhoto from "../../assets/FirstPagePhoto/sir-0.jpg";
import { useNavigate } from "react-router";

const { Meta } = Card;

const FirstPages = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[500px]  w-[550px] my-10  p-4 flex justify-center items-center  ">
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl  p-5">
        <div className="bg-white  rounded-xl    overflow-hidden ">
          {/* Left Side - Profile */}
          <div className="w-full  p-8 flex flex-col items-center text-center">
            <Avatar size={165} src={sirPhoto} className="mb-4" />

            <h1 className="text-2xl font-bold">Mahmudul Hasan Masud</h1>
            <h2 className="text-blue-500 text-lg font-semibold mb-4">
              Squadron Leader
            </h2>

            <div className="flex justify-center space-x-4 text-xl text-blue-600 mb-4">
              <a
                href="https://www.facebook.com/voor.hasan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookFilled />
              </a>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterSquareFilled />
              </a>
              <a
                href="https://www.linkedin.com/in/md-mahmudul-hasan-masud-30181b163/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinFilled />
              </a>
              <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramFilled />
              </a>
            </div>

            <p className="text-sm text-gray-600 mb-6">
              Driven and results-oriented Squadron Leader with 10 years 4 month
              of distinguished service in Bangladesh Air Force, Proven expertise
              in leadership, operational excellence, and strategic planning,
              honed through years of diverse operational roles.
            </p>

            <div className="flex space-x-4">
              {/* <a href="/masud_cv.pdf" download> */}
              <a href="/masud_cv.pdf" download>
                <Button type="primary" className="bg-cyan-200" size="large">
                  Download CV
                </Button>
              </a>
              <Button size="large" onClick={() => navigate("/contact")}>
                Contact Me
              </Button>
            </div>
          </div>
          <div className="flex justify-start mb-2 ps-8">
            <Button type="primary">
              {" "}
              <HiChevronDoubleRight />{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPages;

// import { Button, Avatar, Timeline } from 'antd';
// import { ClockCircleOutlined } from '@ant-design/icons';
// import { Typography } from 'antd';
// import { HiChevronDoubleRight } from "react-icons/hi";
// import sirPhoto from '../../assets/FirstPagePhoto/sir-0.jpg';
// import { useNavigate } from 'react-router';
// import { motion } from 'framer-motion';

// const { Title, Text } = Typography;

// const experiences = [
//   { year: '2022 - Present', title: 'Squadron Leader – Bangladesh Air Force', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...' },
//   { year: '2022 - Present', title: 'ASM at Flight Management – HSIA', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...' },
//   { year: '2022 - 2023', title: 'Officer In-charge – Bangladesh Air Force C & M Unit', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...' }
// ];

// const pageVariants = {
//   initial: { opacity: 0, x: 100, scale: 0.95 },
//   animate: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6 } },
//   exit: { opacity: 0, x: -100, scale: 0.95, transition: { duration: 0.4 } }
// };

// const FirstPages = () => {
//   const navigate = useNavigate();

//   return (
//     <motion.div
//       variants={pageVariants}
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       className="min-h-screen bg-gradient-to-r from-indigo-950 to-indigo-800 p-4 flex justify-center items-center"
//     >
//       <div className='bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl p-8'>
//         <div className="bg-white rounded-xl shadow-lg max-w-5xl flex flex-col md:flex-row overflow-hidden h-135 w-250">
//           {/* Left Side */}
//           <div className="w-full md:w-1/2 p-8 flex flex-col items-center text-center">
//             <Avatar size={200} src={sirPhoto} className="mb-4" />
//             <h1 className="text-2xl font-bold">Mahmudul Hasan Masud</h1>
//             <h2 className="text-blue-500 text-lg font-semibold mb-4">Squadron Leader</h2>
//             <p className="text-sm text-gray-600 mb-6">
//               Driven and results-oriented Squadron Leader with 10 years 4 month of distinguished service in Bangladesh Air Force...
//             </p>
//             <div className="flex space-x-4">
//               <a href="/masud_cv.pdf" download>
//                 <Button type="primary" className='bg-cyan-200' size="large">Download CV</Button>
//               </a>
//               <Button size="large" onClick={() => navigate('/contact')}>Contact Me</Button>
//             </div>
//           </div>

//           {/* Right Side */}
//           <div className="max-w-2xl mx-auto md:w-1/2 bg-gray-100 p-6 rounded-md shadow">
//             <Title level={3} className="text-center font-bold mb-8">Work Experience</Title>
//             <Timeline mode="left" className="text-gray-700">
//               {experiences.map((exp, index) => (
//                 <Timeline.Item
//                   key={index}
//                   dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}
//                   color="blue"
//                 >
//                   <Text className="text-blue-500 font-medium">{exp.year}</Text><br />
//                   <Text strong className="text-lg block mt-1">{exp.title}</Text>
//                   <Text className="text-gray-600 text-sm">{exp.description}</Text>
//                 </Timeline.Item>
//               ))}
//             </Timeline>
//             <div className="flex justify-end mt-4">
//               <Button type="primary" onClick={() => navigate('/about')}><HiChevronDoubleRight /></Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default FirstPages;

// import { Button, Avatar, Timeline } from 'antd';
// import { ClockCircleOutlined } from '@ant-design/icons';
// import { Typography } from 'antd';
// import { HiChevronDoubleRight } from "react-icons/hi";
// import sirPhoto from '../../assets/FirstPagePhoto/sir-0.jpg';
// import { useNavigate } from 'react-router';
// import { motion } from 'framer-motion';
// import { flipVariants } from './pageAnimation'; // your animation file

// const { Title, Text } = Typography;

// const experiences = [
//   { year: '2022 - Present', title: 'Squadron Leader – Bangladesh Air Force', description: 'Lorem ipsum...' },
//   { year: '2022 - Present', title: 'ASM at Flight Management – HSIA', description: 'Lorem ipsum...' },
//   { year: '2022 - 2023', title: 'Officer In-charge – Bangladesh Air Force C & M Unit', description: 'Lorem ipsum...' }
// ];

// const FirstPages = () => {
//   const navigate = useNavigate();
//   return (
//     <motion.div
//       className="min-h-screen bg-gradient-to-r from-indigo-950 to-indigo-800 p-4 flex justify-center items-center"
//       variants={flipVariants}
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       style={{ transformStyle: "preserve-3d" }}
//     >

//       <div className='bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl p-8'>

//         <div className="bg-white rounded-xl shadow-lg max-w-5xl flex flex-col md:flex-row overflow-hidden h-135 w-250">
//           {/* Left side */}
//           <div className="w-full md:w-1/2 p-8 flex flex-col items-center text-center">
//             <Avatar size={200} src={sirPhoto} className="mb-4" />
//             <h1 className="text-2xl font-bold">Mahmudul Hasan Masud</h1>
//             <h2 className="text-blue-500 text-lg font-semibold mb-4">Squadron Leader</h2>
//             <p className="text-sm text-gray-600 mb-6">Driven and results-oriented Squadron Leader with 10 years...</p>
//             <div className="flex space-x-4">
//               <a href="/masud_cv.pdf" download>
//                 <Button type="primary" className='bg-cyan-200' size="large">Download CV</Button>
//               </a>
//               <Button size="large" onClick={() => navigate('/contact')}>Contact Me</Button>
//             </div>
//           </div>

//           {/* Right side */}
//           <div className="max-w-2xl mx-auto md:w-1/2 bg-gray-100 p-6 rounded-md shadow">
//             <Title level={3} className="text-center font-bold mb-8">Work Experience</Title>
//             <Timeline mode="left" className="text-gray-700">
//               {experiences.map((exp, index) => (
//                 <Timeline.Item
//                   key={index}
//                   dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}
//                   color="blue"
//                 >
//                   <Text className="text-blue-500 font-medium">{exp.year}</Text><br />
//                   <Text strong className="text-lg block mt-1">{exp.title}</Text>
//                   <Text className="text-gray-600 text-sm">{exp.description}</Text>
//                 </Timeline.Item>
//               ))}
//             </Timeline>
//             <div className="flex justify-end mt-4">
//               <Button className='flipbook' type="primary" onClick={() => navigate('/about')}><HiChevronDoubleRight /></Button>
//             </div>
//           </div>
//         </div>

//       </div>
//     </motion.div>
//   );
// };

// export default FirstPages;

// import { Button, Avatar, Timeline, Typography } from 'antd';
// import { ClockCircleOutlined } from '@ant-design/icons';
// import { HiChevronDoubleRight } from "react-icons/hi";
// import sirPhoto from '../../assets/FirstPagePhoto/sir-0.jpg';
// import { useNavigate } from 'react-router';

// const { Title, Text } = Typography;

// const experiences = [
//   { year: '2022 - Present', title: 'Squadron Leader – Bangladesh Air Force', description: 'Lorem ipsum...' },
//   { year: '2022 - Present', title: 'ASM at Flight Management – HSIA', description: 'Lorem ipsum...' },
//   { year: '2022 - 2023', title: 'Officer In-charge – Bangladesh Air Force C & M Unit', description: 'Lorem ipsum...' }
// ];

// const FirstPages = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl p-8">
//       <div className="bg-white rounded-xl shadow-lg max-w-5xl flex flex-col md:flex-row overflow-hidden h-135 w-250">
//         {/* Left Side */}
//         <div className="w-full md:w-1/2 p-8 flex flex-col items-center text-center">
//           <Avatar size={200} src={sirPhoto} className="mb-4" />
//           <h1 className="text-2xl font-bold">Mahmudul Hasan Masud</h1>
//           <h2 className="text-blue-500 text-lg font-semibold mb-4">Squadron Leader</h2>
//           <p className="text-sm text-gray-600 mb-6">
//             Driven and results-oriented Squadron Leader with 10 years of service...
//           </p>
//           <div className="flex space-x-4">
//             <a href="/masud_cv.pdf" download>
//               <Button type="primary" className="bg-cyan-200" size="large">
//                 Download CV
//               </Button>
//             </a>
//             <Button size="large" onClick={() => navigate('/contact')}>Contact Me</Button>
//           </div>
//         </div>

//         {/* Right Side */}
//         <div className="max-w-2xl mx-auto md:w-1/2 bg-gray-100 p-6 rounded-md shadow">
//           <Title level={3} className="text-center font-bold mb-8">Work Experience</Title>
//           <Timeline mode="left" className="text-gray-700">
//             {experiences.map((exp, index) => (
//               <Timeline.Item
//                 key={index}
//                 dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}
//                 color="blue"
//               >
//                 <Text className="text-blue-500 font-medium">{exp.year}</Text><br />
//                 <Text strong className="text-lg block mt-1">{exp.title}</Text>
//                 <Text className="text-gray-600 text-sm">{exp.description}</Text>
//               </Timeline.Item>
//             ))}
//           </Timeline>
//           <div className="flex justify-end mt-4">
//             <Button type="primary" onClick={() => navigate('/about')}>
//               <HiChevronDoubleRight />
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FirstPages;
