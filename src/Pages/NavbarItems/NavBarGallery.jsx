import ms10 from "../../assets/GalleryOnePhoto/masud-sir (10).jpeg";
import ms11 from "../../assets/GalleryOnePhoto/masud-sir (11).jpeg";
import ms12 from "../../assets/GalleryOnePhoto/masud-sir (12).jpeg";
import ms13 from "../../assets/GalleryOnePhoto/masud-sir (13).jpeg";
import ms20 from "../../assets/GalleryOnePhoto/masud-sir (20).jpeg";
import ms23 from "../../assets/GalleryOnePhoto/masud-sir (23).jpeg";
import ms29 from "../../assets/GalleryOnePhoto/masud-sir (29).jpeg";
import ms27 from "../../assets/GalleryOnePhoto/masud-sir (27).jpeg";
import ms28 from "../../assets/GalleryOnePhoto/masud-sir (28).jpeg";
import ms24 from "../../assets/GalleryOnePhoto/masud-sir (24).jpeg";
import ms1 from "../../assets/GalleryOnePhoto/masud-sir (1).jpeg";
import ms2 from "../../assets/GalleryOnePhoto/masud-sir (2).jpeg";
import ms7 from "../../assets/GalleryOnePhoto/masud-sir (7).jpeg";
import ms14 from "../../assets/GalleryOnePhoto/masud-sir (14).jpeg";
import ms21 from "../../assets/GalleryOnePhoto/masud-sir (21).jpeg";
import ms22 from "../../assets/GalleryOnePhoto/masud-sir (22).jpeg";
import { Button, Card } from "antd";
import { useNavigate } from "react-router";
const { Meta } = Card;
import { Carousel } from "antd";

const NavBarGallery = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-950 to-indigo-800 p-4 flex justify-center items-center">
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl  p-8">
        <div className="bg-white rounded-xl shadow-lg h-135 w-250 max-w-5xl flex flex-col md:flex-row overflow-hidden">
          {/* Left Side - Profile */}
          <div className="  w-full  md:w-1/2 p-8 flex flex-col ">
            <Carousel autoplay arrows infinite={false} className="h-50">
              <div>
                <img src={ms10} alt="image 10" />
              </div>
              <div>
                <img src={ms11} alt="image 10" />
              </div>
              <div>
                <img src={ms12} alt="image 10" />
              </div>
              <div>
                <img src={ms13} alt="image 10" />
              </div>
            </Carousel>
            <br />
            <Carousel autoplay arrows infinite={false}>
              <div>
                <img src={ms20} alt="image 10" />
              </div>
              <div>
                <img src={ms23} alt="image 10" />
              </div>
              <div>
                <img src={ms29} alt="image 10" />
              </div>
              <div>
                <img src={ms27} alt="image 10" />
              </div>
            </Carousel>
            <p>hi</p>
          </div>
          {/* Right Side - Experience */}
          <div className="w-full md:w-1/2 bg-gray-100 p-8">
            <div>
              <Carousel autoplay arrows infinite={false} className="h-50">
                <div>
                  <img src={ms28} alt="image 10" />
                </div>
                <div>
                  <img src={ms24} alt="image 10" />
                </div>
                <div>
                  <img src={ms1} alt="image 10" />
                </div>
                <div>
                  <img src={ms2} alt="image 10" />
                </div>
              </Carousel>
              <br />
              <Carousel autoplay arrows infinite={false}>
                <div>
                  <img src={ms14} alt="image 10" />
                </div>
                <div>
                  <img src={ms7} alt="image 10" />
                </div>
                <div>
                  <img src={ms21} alt="image 10" />
                </div>
                <div>
                  <img src={ms22} alt="image 10" />
                </div>
              </Carousel>
            </div>
          </div>
          {/* <div className="text-center text-sm text-gray-400 mt-4">4</div> */}
          <div className="flex justify-end">
            <Button type="primary" onClick={() => navigate("/")}>
              1
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarGallery;
