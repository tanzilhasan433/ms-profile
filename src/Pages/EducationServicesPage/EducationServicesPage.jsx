
import { Card, Button } from 'antd';
import { useNavigate } from 'react-router';
import hsiaLogo from '../../assets/EducationPhoto/hsia.jpg';
import flightLogo from '../../assets/EducationPhoto/flight.jpg';
import officerLogo from '../../assets/EducationPhoto/officer-incharge.jpeg';
import squadronLogo from '../../assets/EducationPhoto/squadron.jpeg';

const EducationServicesPage = () => {
    const navigate = useNavigate();
  const educationData = [
    {
      year: '2015 - 2019',
      title: 'BBA - Bangladesh University of Professional-BUP',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas obcaecati animi vel minus dolore vitae magni voluptates, nihil repellendus, libero dicta, eligendi quis ipsa id.',
    },
    {
      year: '2010 - 2012',
      title: 'HSC : Business Studies - Dhaka Residential School & College',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas obcaecati animi vel minus dolore vitae magni voluptates, nihil repellendus, libero dicta, eligendi quis ipsa id.',
    },
    {
      year: '2001 - 2010',
      title: 'SSC : Business Studies - Bangladesh Nevy School & College',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas obcaecati animi vel minus dolore vitae magni voluptates, nihil repellendus, libero dicta, eligendi quis ipsa id.',
    },
  ];

const servicesData = [
  {
    title: 'Airport Flight Management & Operation',  
    logo: flightLogo, // Path to your image
  },
  {
    title: 'Aviation Security Forces',  
    logo: hsiaLogo,
  },
  {
    title: 'Squadron Leader',  
    logo: squadronLogo,
  },
  {
    title: 'Officer In-Charge',
    logo: officerLogo,
  },
];


  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-blue-600 flex justify-center items-center p-6">
      <div className="bg-white rounded-xl shadow-lg max-w-7xl w-full flex flex-col md:flex-row overflow-hidden">
        {/* Left Side - Education */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          <div className="space-y-8 border-l-2 border-blue-500 pl-4">
            {educationData.map((edu, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[18px] top-1.5 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>
                <h4 className="font-semibold text-blue-600">{edu.year}</h4>
                <h3 className="text-lg font-bold">{edu.title}</h3>
                <p className="text-gray-600 text-sm">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Services */}
        <div className="w-full md:w-1/2 p-8 border-t md:border-t-0 md:border-l border-gray-200">
          <h2 className="text-2xl font-bold mb-6">My Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {servicesData.map((service, index) => (
              <Card key={index} className="text-center shadow-md">
                <div className="flex flex-col items-center space-y-2">
                  {service.logo && (
                        <img src={service.logo} alt={service.title} className="w-12 h-12 object-contain" />
                    )}
                  
                  <h3 className="font-semibold">{service.title}</h3>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <Button type="primary">Read More</Button>
                </div>
              </Card>
            ))}
          </div>
                              <Button className='mt-5' type="primary" onClick={() => navigate('/second-page')}>Previous</Button>
                               <Button className='ms-2' type="primary" onClick={() => navigate('/')}>Next</Button>
        </div>
                              
      </div>
      
    </div>
  );
};

export default EducationServicesPage;
