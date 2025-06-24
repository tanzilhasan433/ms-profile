
import { Input, Button, Form } from 'antd';
import { useNavigate } from 'react-router';

const ContactForm = () => {
const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Form Submitted:', values);
  };

  return (
    

       
         <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-500 p-4">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-xl p-8 relative">
                <h2 className="text-2xl font-bold text-center mb-6">Contact Me!</h2>

                <Form form={form} layout="vertical" onFinish={onFinish}>
                <Form.Item name="fullname" rules={[{ required: true, message: 'Please enter your name' }]}>
                    <Input placeholder="Full Name" className="rounded-md border-blue-400" />
                </Form.Item>

                <Form.Item name="email" rules={[{ required: true, type: 'email', message: 'Enter a valid email' }]}>
                    <Input placeholder="Email Address" className="rounded-md border-blue-400" />
                </Form.Item>

                <Form.Item name="message" rules={[{ required: true, message: 'Please enter your message' }]}>
                    <Input.TextArea rows={5} placeholder="Your Message" className="rounded-md border-blue-400" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="bg-blue-500 w-full">
                    Send Message
                    </Button>
                </Form.Item>
                </Form>

                {/* Bottom Icons */}
                                <Button className='mt-5' type="primary" onClick={() => navigate('/education')}>Previous</Button>
                               <Button className='ms-2' type="primary" onClick={() => navigate('/gallery-one')}>Next</Button>
           
           {/* <img src={photo5} alt="images" className=" object-contain /> */}
                               </div>
            </div>
    

  );
};

export default ContactForm;
