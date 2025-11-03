import React, { useRef } from "react";
import { Button, Card } from "antd";
import { HiChevronDoubleRight } from "react-icons/hi";
// import { useNavigate } from "react-router";
import flight from "../../assets/skills/flight management.jpeg";
import cargo from "../../assets/skills/cargo.jpg";
import avsec from "../../assets/skills/avsec.jpg";
// import cargo2 from "../../assets/skills/cargo2.jpg";
import crisis from "../../assets/skills/crisis management.png";
import hsia from "../../assets/skills/hsia.png";
// import joint from "../../assets/skills/joint service.png";
import jungle from "../../assets/skills/jungle survival.png";
// import militery from "../../assets/skills/military traning.png";
// import public1 from "../../assets/skills//public affairs.png";
// import public2 from "../../assets/skills/public service.png";
// import security from "../../assets/skills/security management.png";
// import sita from "../../assets/skills/sita.png";
// import weapon from "../../assets/skills/weapon.jpg";
// import { HiChevronDoubleRight } from "react-icons/hi";
import { HiChevronDoubleLeft } from "react-icons/hi";

const { Meta } = Card;
const Skill = () => {
  const flipBookRef = useRef();
  return (
    <div className="h-[500px]  w-[550px] my-10  p-4 flex justify-center items-center  ">
      <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl p-6">
        <div className="bg-white  rounded-xl">
          {/* Left Side - Profile */}
          <div className="  mx-auto   p-4 rounded-md  ">
            <h2 className="text-2xl font-bold m-2 text-center">Skill Pages </h2>
            <div className="flex ">
              <div className="flex flex-wrap justify-start gap-2">
                <Card
                  hoverable
                  style={{ width: 135, height: 180 }}
                  cover={
                    <img className="h-28 w-full" alt="example" src={flight} />
                  }
                >
                  <Meta
                    className="font-bold"
                    title=""
                    description="Flight Management"
                  />
                </Card>
                <Card
                  hoverable
                  style={{ width: 135, height: 180 }}
                  cover={
                    <img className="h-28 w-full" alt="example" src={hsia} />
                  }
                >
                  <Meta className="font-bold" title="" description="HSIA" />
                </Card>
                <Card
                  hoverable
                  style={{ width: 135, height: 180 }}
                  cover={
                    <img className="h-28 w-full" alt="example" src={cargo} />
                  }
                >
                  <Meta
                    className="font-bold"
                    title=""
                    description="Cargo Operation"
                  />
                </Card>
                {/* <Card
                  hoverable
                  style={{ width: 135, height: 180 }}
                  cover={
                    <img className="h-28 w-full" alt="example" src={cargo2} />
                  }
                >
                  <Meta
                    className="font-bold"
                    title=""
                    description="Cargo Operation"
                  />
                </Card> */}
                <Card
                  hoverable
                  style={{ width: 135, height: 180 }}
                  cover={
                    <img className="h-28 w-full" alt="example" src={avsec} />
                  }
                >
                  <Meta className="font-bold" title="" description="AVSEC" />
                </Card>
                <Card
                  hoverable
                  style={{ width: 135, height: 180 }}
                  cover={
                    <img className="h-28 w-full" alt="example" src={crisis} />
                  }
                >
                  <Meta
                    className="font-bold"
                    title=""
                    description="Crisis Management"
                  />
                </Card>
                <Card
                  hoverable
                  style={{ width: 135, height: 180 }}
                  cover={
                    <img className="h-28 w-full" alt="example" src={jungle} />
                  }
                >
                  <Meta
                    className="font-bold"
                    title=""
                    description="Jungle Survival"
                  />
                </Card>
              </div>
            </div>
            <div className="flex justify-end ">
              <Button
                type="primary"
                size="large"
                onClick={() => flipBookRef.current.pageFlip().flipPrev()}
              >
                <HiChevronDoubleRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
