import { Button, Card } from "antd";
import { useNavigate } from "react-router";
const { Meta } = Card;
const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-blue-600 p-6 flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-5xl flex flex-col md:flex-row overflow-hidden">
        {/* Left Side - Profile */}
        <div className="w-full md:w-1/2 p-8 flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <p className="text-sm text-gray-600 mb-6">
            <p>Mobile No: +88 01684 117 416</p>
            <p>Email: mahmudul10078hasan@gmail.com</p>
            <p>Address: Hazrat ShahJalal International Airport, Dhaka.</p>
          </p>

          <div className="flex space-x-4"></div>
        </div>

        {/* Right Side - Experience */}

        <div className="w-full md:w-1/2 bg-gray-100 p-8">
          <h2 className="text-2xl font-bold mb-6">Emergency Contact</h2>

          <p>Mobile No: +88 01684 117 416</p>
          <p>Email: mahmudul10078hasan@gmail.com</p>
          <p>Address: Hazrat ShahJalal International Airport, Dhaka.</p>

          <Button type="primary" onClick={() => navigate("/")}>
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
