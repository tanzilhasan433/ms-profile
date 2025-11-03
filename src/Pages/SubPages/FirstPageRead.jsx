import React, { useRef } from "react";
import { Button, Card } from "antd";
const { Meta } = Card;
const FirstPageRead = () => {
  const flipBookRef = useRef();
  return (
    <div className="h-[500px]  w-[550px] my-10  p-4 flex justify-center items-center">
      <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl  p-5">
        <div className="bg-white rounded-xl"> 
          <p> 
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
            High Commission, Russian Embassy, Airlines Operating Committee
            (AOC), Hazrat Shajalal International Airport Dhaka and Bangladesh
            Airforce.
          </p>
          <div className="mt-4  w-full flex justify-start">
            <Button
              type="primary"
              size="large"
              onClick={() => flipBookRef.current.pageFlip().flipPrev()}
            >
              Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPageRead;
