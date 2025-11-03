import React from "react";
import Image from "../../assets/FirstPagePhoto/sir-8.jpeg";
const AboutTwo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-950 to-indigo-800 flex items-center justify-center p-8">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Skills Section */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center">
            Md Mahmudul Hasan Masud
          </h2>
          <div className="flex ">
            <img className="w-auto h-42 " src={Image} alt="About-image" />
            <p className="ms-4 mt-4">
              I am Squadron Leader Md Mahmudul Hasan Masud, a driven and
              results-oriented professional with over 8 years of distinguished
              service in the Bangladesh Air Force.
            </p>
          </div>
          <p>
            My career has been defined by a steadfast commitment to leadership,
            operational excellence, and strategic planning across a range of
            dynamic and high-stakes roles. a range of dynamic and high-stakes
            roles.
          </p>
          <br />
          <p>
            Currently serving as the Airport Security Manager and Flight
            Management Officer at Hazrat Shahjalal International Airport (HSIA)
            since January 10, 2022, I specialize in the comprehensive management
            of airport flight operations. My core responsibilities include
            aircraft parking, gate allocation, airline coordination, slot
            management, and daily flight scheduling, along with the seamless
            facilitation of VIP and chartered flights.
            {/* I’ve also overseen the allocation of check-in counters, entry gates, boarding bridges, and parking bays with precision and foresight. */}
          </p>
        </div>

        {/* Latest Project Section */}
        <div className="p-6 border-l border-gray-300 bg-gray-50">
          <h2 className="text-2xl font-bold ">
            About of ASM Flight Management
          </h2>
          <p className="mt-2">
            Driven and results-oriented Squadron Leader with 7 years 8 months of
            distinguished service in the Bangladesh Air Force. Demonstrated
            expertise in leadership, strategic planning, and operational
            excellence across diverse roles. Specialized in airport security and
            airport flight management operations, including aircraft parking,
            gate allocation, airline coordination, slot management, and crisis
            response. Led key digital transformation initiatives at Hazrat
            Shahjalal International Airport (HSIA), including the
            conceptualization and implementation of the Flight Management
            Software, CRM system, 24/7 call center (13600), and a dynamic public
            web portal (www.hsia.gov.bd). Proven success in managing complex
            international aviation operations and improving passenger
            experience. Recognized for exceptional contributions by prominent
            international organizations such as the United States Air Force, the
            Saudi Embassy, Australian Border Force, U.S. Embassy, Australian
            High Commission, Russian Embassy, Canada High Commission, Airlines
            Operating Committee (AOC), Shajalal International Airport Dhaka and
            Bangladesh Airforce.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
