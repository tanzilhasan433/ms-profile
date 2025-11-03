import React from "react";

import { Card, Button } from "antd";
import {
  CodeOutlined,
  Html5Outlined,
  GithubOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import hsia from "../../assets/EducationPhoto/hsia1.jpg.png";
const SkillTwo = () => {
  const skills = {
    "Bangladesh Air-Forces": [
      "Militery Traning",
      "Security Mangement",
      "Office Administration",
      "Crisis Management",
      "Weapon Handling",
      "Operational Planning",
      "Jungle Survival & Physical Traning",
      "Academic Traning",
    ],
    "Hazrat Shahjalal International Airport": [
      "Aviation",
      "Airport Security Management",
      "Flight Management System",
      "Professional Traning",
      "Airport Management System",
      "Cargo Operation Service",
      "Cargo Handling",
      "Cargo Security",
    ],
  };

  return (
    <div className=" bg-gradient-to-r from-indigo-950 to-indigo-800 flex items-center justify-center p-8">
      <div className="bg-white rounded-xl shadow-lg  max-w-6xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Skills Section */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">My Skills</h2>
          {Object.entries(skills).map(([category, tools]) => (
            <div key={category} className="mb-6">
              <h3 className="text-lg font-semibold mb-2">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <div
                    key={tool}
                    className="px-3 py-1 bg-white border border-blue-500 text-blue-600 rounded shadow-sm"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Latest Project Section */}
        <div className="p-6 border-l border-gray-300 bg-gray-50">
          <h2 className="text-2xl font-bold mb-4">Latest Project</h2>
          <Card
            cover={
              <img
                alt="project preview"
                src={hsia} // You can replace this with your image
                className="rounded-t-lg"
              />
            }
            bordered={false}
            className="shadow"
          >
            <h3 className="text-lg font-semibold">
              Hazrat Shahjalal International Airport
            </h3>
            <a
              href="#"
              className="text-blue-600 text-sm float-right"
              target="_blank"
              rel="noopener noreferrer"
            >
              <a href="">Live preview</a> <EyeOutlined />
            </a>
            <p className="text-gray-600 mt-2 text-sm">
              1. ⁠Flight Management operation software Hazrat Shajalal
              International Airport. <br />
              2. ⁠Web Protal Establishment in Hazrat Shajalal International
              Airport(www.hsia.gov.bd). <br />
              3. ⁠Call Center(13600/09614-013600) Establishment in Hazrat
              Shajalal International Airport. <br />
              4. ⁠SOP for Flight Management Department in Hazrat Shajalal
              International Airport. 
            </p>
            
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SkillTwo;
