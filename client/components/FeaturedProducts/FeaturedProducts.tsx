import { FC } from 'react';

import './styles.scss';
import Card from '../Card/Card';
import { productItemsData } from '@/data/itemsData';
interface IFeaturedProductsProps {
  type: string;
}
const FeaturedProducts: FC<IFeaturedProductsProps> = ({ type }) => {
 
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
        {productItemsData.map((elem) => { 
            return (
            <Card item={elem} key={elem.id}  />
            )
        })}
      </div>
    </div>
  );
};

export default FeaturedProducts;
