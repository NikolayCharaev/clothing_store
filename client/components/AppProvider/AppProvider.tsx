import React, { FC, ReactNode } from 'react';
import './styles.scss';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Slider from '../Slider/Slider';

interface IAppProviderProps {
  children: ReactNode;
}

const AppProvider: FC<IAppProviderProps> = ({ children }) => {
  return (
    <div className="app">
      <Navbar />
      <Slider />
      {children}
      <Footer />
    </div>
  );
};

export default AppProvider;
