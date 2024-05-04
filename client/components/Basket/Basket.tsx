import React from 'react';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import './styles.scss';
import { productItemsData } from '@/data/itemsData';
import Image from 'next/image'
const Basket = () => {
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {productItemsData?.map((item) => (
        <div className="item" key={item.id}>
          <Image
        //    src={process.env.REACT_APP_UPLOAD_URL + item.img}

            src={item.img}
           width={400}
           height={600}
            alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            {/* <p>{item.desc?.substring(0, 100)}</p> */}
            <div className="price">
              {/* {item.quantity} x ${item.price} */}
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            // onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${
        // totalPrice()
        } 100 рубасов</span>
      </div>
      <button 
    //   onClick={handlePayment}
      >PROCEED TO CHECKOUT</button>
      <span className="reset"
    //   onClick={() => dispatch(resetCart())}
      >
        Reset Cart
      </span>

   
    </div>
  );
};

export default Basket;
