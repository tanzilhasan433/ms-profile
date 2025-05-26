
import { useNavigate } from 'react-router';
import { Card, Button } from 'antd';
import {
  CodeOutlined,
  Html5Outlined,
  GithubOutlined,
  EyeOutlined,
} from '@ant-design/icons';

const SecondPages = () => {
    const navigate = useNavigate();
  const skills = {
    'Bangladesh Air-Forces': ['Militery Traning', 'Security Mangement', 'Office Administration', 'Crisis Management', 'Weapon Handling', 'Operational Planning', 'Jungle Survival & Physical Traning', 'Academic Traning'],
    'Hazrat Shahjalal International Airport': ['Aviation','Airport Security Management', 'Flight Management System', 'Professional Traning', 'Airport Management System', 'Cargo Operation Service', 'Cargo Handling','Cargo Security'],
    
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-900 to-blue-800 flex items-center justify-center p-8">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
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
                src="https://images.unsplash.com/photo-1581091870622-2a7de92d3d3b" // You can replace this with your image
                className="rounded-t-lg"
              />
            }
            bordered={false}
            className="shadow"
          >
            <h3 className="text-lg font-semibold">Project Name</h3>
            <a href="#" className="text-blue-600 text-sm float-right" target="_blank" rel="noopener noreferrer">
              Live Preview <EyeOutlined />
            </a>
            <p className="text-gray-600 mt-2 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque consequuntur magni ullam...
            </p>
            <div className="mt-4 flex space-x-3">
              <Button type="primary" icon={<GithubOutlined />}>
                Source Code
              </Button>
              <Button icon={<CodeOutlined />}>More Projects</Button>
            </div>
          </Card>
                               <Button className='mt-4' type="primary" onClick={() => navigate('/')}>Previous</Button>
                              <Button className='ms-2' type="primary" onClick={() => navigate('/education')}>Next</Button>
        </div>
      </div>
    </div>
  );
};

export default SecondPages;

