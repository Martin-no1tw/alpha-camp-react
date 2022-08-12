import { memo } from 'react';
import useCartContext from '../../Context/CartContext';
import LineItem from '../LineItem';
import style from './style.module.scss';

const Cart = () => {
  const { state } = useCartContext();
  const { lineItems, totalAmount, transport } = state;
  const transportMethod = (price: Number) => {
    if (price === '') {
      return <span>未選擇運送方式</span>;
    }
    if (price === 0) {
      return <span>免費</span>;
    }
    return <span>{price}</span>;
  };

  return (
    <div className="cart">
      {/* tittle */}
      <h4>購物籃</h4>
      {/* product cards */}
      <div className="cart">
        {lineItems.map((item) => {
          return (
            <LineItem
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
            />
          );
        })}
      </div>
      <hr />
      {/* delivery fee content */}
      <div className={style.content}>
        <span>運費</span>
        {transportMethod(transport.price)}
      </div>
      <hr />
      {/* subtotal */}
      <div className={style.content}>
        <span>總價格</span>
        <span>{totalAmount === 0 ? '未選購任何商品' : `$${totalAmount}`}</span>
      </div>
    </div>
  );
};
export default memo(Cart);
