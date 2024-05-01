import React from 'react';
import './styles.scss';

import Link from 'next/link';
import Image from 'next/image';
const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <Image
            width={200}
            height={500}
            src="https://i.pinimg.com/564x/18/0e/fc/180efc3227b70e92b88fd3e71826fbad.jpg"
            alt=""
          />
          <button>
            <Link className="link" href="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <Image
            width={200}
            height={500}
            src="https://i.pinimg.com/564x/ed/32/f4/ed32f4dcddbba70cf6365e1d8727a348.jpg"
            alt=""
          />
          <button>
            <Link href="/products/1" className="link">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <Image
            width={200}
            height={500}
            src="https://i.pinimg.com/564x/00/fe/28/00fe280ea21f53d41df890dd1949df23.jpg"
            alt=""
          />
          <button>
            <Link href="/products/1" className="link">
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <Image
                width={200}
                height={500}
                src="https://i.pinimg.com/564x/aa/2a/48/aa2a483f205cfaf72e0c348800e65287.jpg"
                alt=""
              />
              <button>
                <Link href="/products/1" className="link">
                  Men
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {' '}
              <Image
                width={200}
                height={500}
                src="https://i.pinimg.com/564x/2e/63/40/2e63402f6f3ef443538da47316d078e8.jpg"
                alt=""
              />
              <button>
                <Link href="/products/1" className="link">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <Image
            width={200}
            height={500}
            src="https://i.pinimg.com/564x/6a/0a/05/6a0a05cec44d89fcf198c177043c9950.jpg"
            alt=""
          />
          <button>
            <Link href="/products/1" className="link">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
