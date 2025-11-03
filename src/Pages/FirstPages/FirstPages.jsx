import { Button, Avatar, Timeline, Card } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { HiChevronDoubleRight } from "react-icons/hi";
import Masud from "../../../public/Sqn Ldr Masud.pdf";

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
        <div className="bg-white  rounded-xl  overflow-hidden ">
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
              in leadership, operational excellence, and strategic planning ...
             
              <a className="text-indigo-600" href="/about-two">...read more</a>
            </p>

            <div className="flex space-x-4">
              {/* <a href="/masud_cv.pdf" download> */}
              <a href="/Sqn Ldr Masud.pdf" download>
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
            <Button type="">
              {" "}
             <span>.</span>
              {" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPages;
