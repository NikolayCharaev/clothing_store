import React, { FC, ReactNode } from 'react';
import './styles.scss';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Slider from '../Slider/Slider';

import { register } from 'swiper/element/bundle';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
// register Swiper custom elements
register();
interface IAppProviderProps {
  children: ReactNode;
}

const AppProvider: FC<IAppProviderProps> = ({ children }) => {
  return (
    <div className="app">
      {children}

      <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
    </div>
  );
};

export default AppProvider;
