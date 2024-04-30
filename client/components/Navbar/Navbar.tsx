import React from 'react';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import enIcon from '@/public/img/en.png';

import Image from 'next/image';
import Link from 'next/link';
import './styles.scss';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Image src={enIcon} width={20} height={20} alt="en" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link href="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link href="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link href="/products/3">Children</Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" href="/">
            <h1>Cthulhustore</h1>
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" href="/">
              Homepage
            </Link>
          </div>

          <div className="item">
            <Link className="link" href="/">
              About
            </Link>
          </div>

          <div className="item">
            <Link className="link" href="/">
              Contact
            </Link>
          </div>

          <div className="item">
            <Link className="link" href="/">
              Stores
            </Link>
          </div>

          <div className="icons">
            <SearchIcon />
            <AccountBoxIcon />
            <FavoriteIcon />

            <div className="cartIcon">
              <ShoppingBasketIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
