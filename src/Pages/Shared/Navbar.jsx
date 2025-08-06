import { useState } from 'react';
import {
  SearchOutlined,
  UserOutlined,
  MenuOutlined,
  CloseOutlined,
  BellOutlined,
  MessageOutlined,
} from '@ant-design/icons';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Experience', path: '/experience' },
    { label: 'Education', path: '/navbar-education' },
    { label: 'Course', path: '/course' },
    { label: 'Award', path: '/award' },
    { label: 'Skills', path: '/skills' },
    { label: 'FlipBook', path: '/flip-book' },
    // { label: 'Projects', path: '/projects' },
    { label: 'Gallery', path: '/navbar-gallery' },
  ];

  return (
    <nav className="bg-gradient-to-r from-indigo-950 to-indigo-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold">
            <a href="/">Mahmudul Hasan Masud</a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {menuItems.map(item => (
              <a key={item.label} href={item.path} className="hover:underline">
                {item.label}
              </a>
            ))}
            {/* <SearchOutlined className="text-xl cursor-pointer" />
            <MessageOutlined className="text-xl cursor-pointer" />
            <BellOutlined className="text-xl cursor-pointer" />
            <UserOutlined className="text-xl cursor-pointer" /> */}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <CloseOutlined className="text-2xl" /> : <MenuOutlined className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {menuItems.map(item => (
            <a key={item.label} href={item.path} className="block hover:underline">
              {item.label}
            </a>
          ))}
          {/* <div className="flex gap-4 pt-4">
            <SearchOutlined className="text-xl cursor-pointer" />
            <MessageOutlined className="text-xl cursor-pointer" />
            <BellOutlined className="text-xl cursor-pointer" />
            <UserOutlined className="text-xl cursor-pointer" />
          </div> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
