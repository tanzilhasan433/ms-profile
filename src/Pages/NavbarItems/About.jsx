import { Button, Card } from "antd";
import { useNavigate } from "react-router";
import HTMLFlipBook from "react-pageflip";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
const { Meta } = Card;
import Image from "../../assets/FirstPagePhoto/sir-8.jpeg";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-950 to-indigo-800 p-4 flex justify-center items-center">
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl  p-8">
        <div className="bg-white rounded-xl shadow-lg h-135 w-250 max-w-5xl flex flex-col md:flex-row overflow-hidden">
          {/* Left Side - Profile */}
          <div className="  w-full md:w-1/2 p-8 flex flex-col items-center ">
            <h2 className="text-2xl font-bold m-4">
              About of ASM Flight Management
            </h2>
            <div className="flex mb-4">
              <img className="w-auto h-42 " src={Image} alt="About-image" />
              <p className="ms-4 mt-4">
                I am Squadron Leader Md Mahmudul Hasan Masud, a driven and
                results-oriented professional with over 8 years of distinguished
                service in the Bangladesh Air Force.
              </p>
            </div>
            <p>
              My career has been defined by a steadfast commitment to
              leadership, operational excellence, and strategic planning across
              a range of dynamic and high-stakes roles.
            </p>
            <br />
            <p>
              Currently serving as the Airport Security Manager and Flight
              Management Officer at Hazrat Shahjalal International Airport
              (HSIA) since January 10, 2022, I specialize in the comprehensive
              management of airport flight
              {/* operations. My core responsibilities include aircraft parking, gate allocation, airline coordination, slot management, and daily flight scheduling, along with the seamless facilitation of VIP and chartered flights. I’ve also overseen the allocation of check-in counters, entry gates, boarding bridges, and parking bays with precision and foresight. */}
            </p>
          
          <div className=" text-sm text-gray-400 mt-2">3</div>
              <div className="mb-2 w-full flex justify-start">
                <Button type="primary" onClick={() => navigate("/")}>
                  <HiChevronDoubleLeft />
                </Button>
              </div>
          </div>
          {/* Right Side - Experience */}
          <div className="w-full md:w-1/2 bg-gray-100 p-8">
            <div>
              <br />
              <p>
                A crucial part of my role has involved spearheading airport
                security operations — including passenger screening, baggage
                handling, and threat assessment — in strict compliance with ICAO
                Annex 17 and Annex 9. My ability to coordinate effectively with
                42 international and domestic airlines, 28 government agencies,
                and various embassies and ministries has been pivotal in
                resolving operational challenges and enhancing airport
                collaboration.
              </p>
              <br />
              <p>
                Throughout my career, I have earned recognition and accolades
                from esteemed national and international bodies such as the
                United States Air Force, Saudi Government, Australian Border
                Force, U.S. Embassy, Australian High Commission, Russian
                Embassy, Airlines Operating Committee (AOC), Hazrat Shajalal
                International Airport and the Civil Aviation Authority of
                Bangladesh.
              </p>
              <br />
              <p>
                {/* I take pride in my capacity to lead with integrity, adapt under pressure, and deliver results in mission-critical environments. */}

                {/* With proven expertise in aviation operations and security, I am confident in my ability to add value in any role—be it in the aviation sector, government service, or within international organizations. */}
              </p>
            </div>
            <div className="text-center text-sm text-gray-400 mt-4 ">4</div>
            <div className="flex justify-end">
              <Button type="primary" onClick={() =>  navigate("/experience")}>
                {" "}
                <HiChevronDoubleRight />{" "}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
