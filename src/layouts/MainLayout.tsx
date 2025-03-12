
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TransitionWrapper from '../components/TransitionWrapper';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <TransitionWrapper>
        <main className="flex-grow">
          {children}
        </main>
      </TransitionWrapper>
      <Footer />
    </div>
  );
};

export default MainLayout;
