/* eslint-disable import/no-named-as-default */
// eslint-disable-next-line no-unused-vars
import React, { useState, useContext, useCallback, memo } from 'react';
import styles from './style.module.scss';
import LineItem from '../LineItem';
import CartContext from '../Context/CartContext';

const Cart = memo(() => {
  const data = useContext(CartContext);
  const [products, setProducts] = useState(data.products);

  const onChangeQuantity = useCallback(
    (id, num) => {
      const newProducts = products.map((product) => {
        if (product.id === id && product.quantity + num > 0) {
          return {
            ...product,
            quantity: product.quantity + num,
          };
        }
        return product;
      });
      return setProducts(newProducts);
    },
    [products],
  );

  const total = products.reduce(
    (prev, cur) => prev + cur.price * cur.quantity,
    0,
  );

  return (
    <div className={styles.cart}>
      <div className={styles.title}>購物籃</div>
      {products.map((product) => {
        return (
          <LineItem
            key={product.name}
            id={product.id}
            name={product.name}
            img={product.img}
            price={product.price}
            quantity={product.quantity}
            onChangeQuantity={onChangeQuantity}
          />
        );
      })}
      <div className={styles.deliveryFeeBlock}>
        <p className={styles.title}>運費</p>
        <p className={styles.content}>免費</p>
      </div>
      <div className={styles.totalBlock}>
        <p className={styles.title}>小計</p>
        <p className={styles.content}>{total}</p>
      </div>
    </div>
  );
});
export default Cart;
