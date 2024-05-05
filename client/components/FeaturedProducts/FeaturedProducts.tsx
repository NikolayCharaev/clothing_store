'use client'
import { FC, useEffect, useState } from 'react';

import './styles.scss';
import Card from '../Card/Card';
import { productItemsData } from '@/data/itemsData';
import { ItemTypes } from '@/types/featuredProductsTypes';
import axios from 'axios';
interface IFeaturedProductsProps {

  type: string;
}
const FeaturedProducts: FC<IFeaturedProductsProps> = ({ type }) => {
 const [products, setProducts] = useState([])
 const [error, setError] = useState<boolean>(false)

 async function fetchProducts () { 
    try{ 
      const {data} = await axios.get(process.env.NEXT_PUBLIC_APP_URL + '/products?populate=*',{ 
        headers : { 
          "Authorization" : 'bearer ' + process.env.NEXT_PUBLIC_API_APP_TOKEN,
        }
      })  
      console.log(data)
      setProducts(data.data)

    }catch(err) { 
      console.log(err)
      setError(true)
    }
 }

 useEffect(() => { 
  fetchProducts()
 },[])

 console.log(products)

  return (
    <div className='featuredProducts'>
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum adipisci vel, saepe in
          sit sunt eligendi odio eum consequuntur, quo blanditiis doloremque placeat reiciendis,
          architecto eius iure repudiandae neque molestiae!
        </p>
      </div>
      <div className="bottom">
        {products?.map((elem) => { 
            return (
            <Card item={elem.attributes} key={elem.id}  />
            )
        })}
      </div>
    </div>
  );
};

export default FeaturedProducts;
