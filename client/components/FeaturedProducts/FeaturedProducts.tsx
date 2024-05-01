import { FC } from 'react';

import './styles.scss';
import Card from '../Card/Card';

interface IFeaturedProductsProps {
  type: string;
}
const FeaturedProducts: FC<IFeaturedProductsProps> = ({ type }) => {
  const data = [
    {
      id: 1,
      img: 'https://kartinki.pics/pics/uploads/posts/2022-08/1660803287_13-kartinkin-net-p-shrek-oboi-na-rabochii-stol-krasivo-15.jpg',
      img2: 'https://kartinki.pics/pics/uploads/posts/2022-08/1660803349_20-kartinkin-net-p-shrek-oboi-na-rabochii-stol-krasivo-23.jpg',
      oldPrice: 1500,
      price: 1000,
      title: 'Шрек-1',
    },
    {
      id: 2,
      img: 'https://kartinki.pics/pics/uploads/posts/2022-08/1660803297_14-kartinkin-net-p-shrek-oboi-na-rabochii-stol-krasivo-16.jpg',
      img2: 'https://kartinki.pics/pics/uploads/posts/2022-08/1660803299_22-kartinkin-net-p-shrek-oboi-na-rabochii-stol-krasivo-25.jpg',
      oldPrice: 1800,
      price: 1400,
      title: 'Шрек-2',
    },
    {
      id: 3,
      img: 'https://kartinki.pics/pics/uploads/posts/2022-08/1660803365_15-kartinkin-net-p-shrek-oboi-na-rabochii-stol-krasivo-17.jpg',
      img2: 'https://kartinki.pics/pics/uploads/posts/2022-08/1660803322_23-kartinkin-net-p-shrek-oboi-na-rabochii-stol-krasivo-26.jpg',
      oldPrice: 1500,
      price: 1200,
      title: 'Шрек-3',
    },
    {
      id: 4,
      img: 'https://kartinki.pics/pics/uploads/posts/2022-08/1660803302_16-kartinkin-net-p-shrek-oboi-na-rabochii-stol-krasivo-18.jpg',
      img2: 'https://kartinki.pics/pics/uploads/posts/2022-08/1660803301_24-kartinkin-net-p-shrek-oboi-na-rabochii-stol-krasivo-27.jpg',
      isNew: true,
      oldPrice: 2300,
      price: 2200,
      title: 'Шрек-4',
    },
   
  ];
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
        {data.map((elem) => { 
            return (
            <Card item={elem} key={elem.id}  />
            )

        })}
      </div>
    </div>
  );
};

export default FeaturedProducts;
