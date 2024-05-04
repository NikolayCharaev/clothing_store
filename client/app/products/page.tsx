'use client';
import { useState } from 'react';
import './styles.scss';
import Image from 'next/image';
import List from '@/components/List/List';

const Products = () => {
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState('');

  return (
    <div className="products">
      <div className="container">
        <div className="left">
          <div className="left-filtered">
            <div className="filterItem">
              <h2 className="">Product Categories</h2>
              <div className="inputItem">
                <input type="checkbox" id="1" value={1} />
                <label htmlFor="1">Shoes</label>
              </div>
              <div className="inputItem">
                <input type="checkbox" id="2" value={2} />
                <label htmlFor="2">Shirts</label>
              </div>
              <div className="inputItem">
                <input type="checkbox" id="3" value={3} />
                <label htmlFor="3">Coats</label>
              </div>
            </div>
            <div className="filterItem">
              <h2 className="">Filter by price</h2>
              <div className="inputItem">
                <span>0</span>
                <input
                  type="range"
                  min={0}
                  max={1000}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
                <span>1000</span>
              </div>
            </div>
            <div className="filterItem">
              <h2 className="">Sort by</h2>
              <div className="inputItem">
                <input
                  type="radio"
                  id="asc"
                  value={'asc'}
                  name="price"
                  onChange={() => setSort('asc')}
                />
                <label htmlFor="asc">Price (Lower First)</label>
              </div>
              <div className="inputItem">
                <input
                  type="radio"
                  id="desc"
                  value={'desc'}
                  name="price"
                  onChange={() => setSort('desc')}
                />
                <label htmlFor="desc">Price (Highest First)</label>
              </div>
            </div>
          </div>
          <div className="left-content">
            <Image
              src={
                'https://kartinki.pics/pics/uploads/posts/2022-08/1660803308_34-kartinkin-net-p-shrek-oboi-na-rabochii-stol-krasivo-37.jpg'
              }
              width={1170}
              height={300}
              alt="category-image"
            />

            <div className="container">
              <div className="right">
                <List maxPrice={maxPrice} sort={sort} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
