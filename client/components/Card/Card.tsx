import { FC, ReactNode } from 'react';

import { ItemTypes } from '@/types/featuredProductsTypes';
import Link from 'next/link';
import Image from 'next/image';

import './styles.scss';

interface ICardProps {
  item: ItemTypes;
}

const Card: FC<ICardProps> = ({ item }) => {
  return (
    <Link href={`/products/${item.id}`}>
      <div className="card">
        <div className="image">
          {item?.isNew && <span>New Season</span>}
          <Image width={300} height={600} src={process.env.NEXT_PUBLIC_APP_UPLOAD_URL + item.img?.data?.attributes.url} alt="" className="mainImg" />
          <Image width={300} height={600} src={process.env.NEXT_PUBLIC_APP_UPLOAD_URL + item.img2?.data?.attributes.url} alt="" className="secondImg" />
        </div>
        <h2>{item?.title}</h2>
        <div className="prices">
          <h3>${item.oldPrice || item?.price + 20}</h3>
          <h3>${item?.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
