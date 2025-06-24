import { Button, Card } from 'antd';
import { useNavigate } from 'react-router';
import photo from '../../assets/GalleryOnePhoto/masud-sir (27).jpeg';
import photo2 from '../../assets/GalleryOnePhoto/masud-sir (20).jpeg';

const { Meta } = Card;
const GalleryOne = () => {
    const navigate = useNavigate();
    return (
        
                <div className="min-h-screen bg-gradient-to-r from-blue-900 to-blue-600 p-6 flex justify-center items-center">
                    <div className="bg-white rounded-xl shadow-lg w-full max-w-5xl flex flex-col md:flex-row overflow-hidden">
                        {/* Left Side - Profile */}
                        <div className="w-full md:w-1/2 p-8 flex flex-col items-center text-center">  
                        <h1 className="text-2xl font-bold">After Graduation  </h1>
                        <img src={photo} alt="images" className=" object-contain" />
                            <p className="text-sm text-gray-600 mb-6">
                              We are  University Friends. There ......, ......, ......., ...... . 
                            </p>
                        </div>

                        {/* Right Side - Experience */}
                        
                        <div className="w-full md:w-1/2 bg-gray-50 p-8">
                        <h2 className="text-2xl font-bold ">Officer In-charge</h2>
                                       <img src={photo2} alt="images" className=" object-contain " />
                            <p className="text-sm text-gray-600 mb-6">
                              We are  University Friends. There ......, ......, ......., ...... . 
                            </p>
                              <div>
                                <Button type="primary" className='btn-end' onClick={() => navigate('/contact-form')}>Previous</Button>
                                <Button type="primary" className='ms-4' onClick={() => navigate('/gallery-two')}>Next</Button>
                               </div>
                        </div>                               
                      </div>                   
                    </div>
    );
};

export default GalleryOne;