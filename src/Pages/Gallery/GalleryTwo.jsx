import { Button, Card } from 'antd';
// import { useNavigate } from 'react-router';
import photo8 from '../../assets/GalleryOnePhoto/masud-sir (7).jpeg';
// import photo2 from '../../assets/GalleryOnePhoto/masud-sir (20).jpeg';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';
const { Meta } = Card;
const GalleryTwo = () => {
// const navigate = useNavigate();
  return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 to-purple-600 px-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-6xl flex flex-col md:flex-row items-center shadow-lg">
        
        {/* Left Section */}
        <div className="flex-1 text-white text-center md:text-left space-y-6">
          <h1 className="text-4xl font-extrabold leading-snug">Hey, This is Mahmudul Hasan</h1>
          <p className="text-gray-200">You Can Explore My Protfolio...    ei page e all gallery er carusol dite hobe...</p>
          <Button type="primary" size="large" className="rounded-xl bg-white text-black hover:bg-gray-100">Explore</Button>

          {/* Carousel Dots */}
          <div className="flex space-x-2 pt-6 justify-center md:justify-start">
            <span className="w-4 h-4 rounded-full border-2 border-white bg-blue-500 flex items-center justify-center">
              <span className="w-2 h-2 bg-white rounded-full"></span>
            </span>
            <span className="w-4 h-4 rounded-full bg-white/50"></span>
            <span className="w-4 h-4 rounded-full bg-white/50"></span>
          </div>
        </div>

        {/* Right Section - Car Image */}
        <div className="flex-1 mt-8 md:mt-0">
          <img
            src={photo8}
            alt="Dream Car"
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryTwo;




