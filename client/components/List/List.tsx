import { FC } from 'react';
import './styles.scss';
import { productItemsData } from '@/data/itemsData';
import Card from '../Card/Card';

interface IListProps {
  maxPrice: number;
  sort: string;
}
const List: FC<IListProps> = ({ maxPrice, sort }) => {
  return (
    <div className="container">
      <div className="list">
        {productItemsData.map((elem) => {
          return (
            <>
              <Card item={elem} key={elem.id} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default List;
