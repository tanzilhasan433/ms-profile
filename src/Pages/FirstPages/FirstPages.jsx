import { Button, Avatar, Timeline, Card, } from 'antd';
// import { useNavigate } from 'react-router-dom';
import {
  FacebookFilled,
  TwitterSquareFilled,
  LinkedinFilled,
  InstagramFilled,
} from '@ant-design/icons';
import sirPhoto from '../../assets/FirstPagePhoto/sir-0.jpg';
import { useNavigate } from 'react-router';


const { Meta } = Card;


const FirstPages = () => {
    // const navigate = useNavigate();
    const navigate = useNavigate();
    return (
        
        
                <div className="min-h-screen bg-gradient-to-r from-blue-900 to-blue-600 p-6 flex justify-center items-center">
                    <div className="bg-white rounded-xl shadow-lg w-full max-w-5xl flex flex-col md:flex-row overflow-hidden">
                        {/* Left Side - Profile */}
                        <div className="w-full md:w-1/2 p-8 flex flex-col items-center text-center">
                        <Avatar size={200} src={sirPhoto} className="mb-4" />
                        
                        <h1 className="text-2xl font-bold">Mahmudul Hasan Masud</h1>
                        <h2 className="text-blue-500 text-lg font-semibold mb-4">Squadron Leader</h2>

                        <div className="flex justify-center space-x-4 text-xl text-blue-600 mb-4">
                            <a href="https://www.facebook.com/voor.hasan" target="_blank" rel="noopener noreferrer">
                                <FacebookFilled />
                            </a>
                            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                                <TwitterSquareFilled />
                            </a>
                            <a href="https://www.linkedin.com/in/md-mahmudul-hasan-masud-30181b163/" target="_blank" rel="noopener noreferrer">
                                <LinkedinFilled />
                            </a>
                            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                                <InstagramFilled />
                            </a>
                        </div>


                            <p className="text-sm text-gray-600 mb-6">
                                Driven and results-oriented Squadron Leader with 10 years 4 month of distinguished service in Bangladesh Air Force, Proven expertise in leadership, operational excellence, and strategic planning, honed through years of diverse operational roles.
                            </p>

                        <div className="flex space-x-4">
                            <Button type="primary" size="large">Download CV</Button>
                            <Button size="large" onClick={() => navigate('/contact')}>Contact Me</Button>
                        </div>
                        </div>

                        {/* Right Side - Experience */}
                        
                        <div className="w-full md:w-1/2 bg-gray-50 p-8">
                        <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
                        <Timeline
                            mode="left"
                            items={[
                            {
                                label: '2022 - Present',
                                children: (
                                <div>
                                    <p className="font-semibold">Airport Flight Management – Dhaka</p>
                                    <p className="text-gray-600 text-sm">
                                    * Officer in Charge (OIC) Unit | BAF Care and Maintenance Unit Lalmonirhat | December 2018 - January 2022 <br />
                                    </p>
                                </div>
                                ),
                            },
                            {
                                label: '2022 - Present',
                                children: (
                                <div>
                                    <p className="font-semibold">Squadron Leader – Bangladesh Air Force</p>
                                    <p className="text-gray-600 text-sm">
                                            * Led the MODC Training Squadron, fostering professional development within the unit. <br />
                                            * Honored with a letter of appreciation from the United States Air Force for contributions to Pacific Angel 19-1.
                                    </p>
                                </div>
                                ),
                            },
                            {
                                label: '2018 - 2022',
                                children: (
                                <div>
                                    <p className="font-semibold">Officer In-charge – Bangladesh Air Force C & M Unit</p>
                                    <p className="text-gray-600 text-sm">
                                            
                                            * Assumed responsibility for unit security, ensuring a safe and secure operating environment. <br />
                                           </p>
                                </div>
                                ),
                            },
                            ]}
                        />
                               <Button type="primary" onClick={() => navigate('/second-page')}>Next</Button>
                        </div>
                                
                    </div>
                    
                    </div>
        
    );
};

export default FirstPages;