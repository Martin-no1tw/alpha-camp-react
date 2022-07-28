// eslint-disable-next-line no-unused-vars
import React, { memo } from 'react';
import styles from './style.module.scss';
import LineItem from '../LineItem';

const Cart = memo((props) => {
  const products = props.Products;

  return (
    <div className={styles.cart}>
      <div className={styles.title}>購物籃</div>
      {products.map((product) => {
        return (
          <LineItem
            key={product.id}
            id={product.id}
            name={product.name}
            img={product.img}
            price={product.price}
          />
        );
      })}
      <div className={styles.deliveryFeeBlock}>
        <p className={styles.title}>運費</p>
        <p className={styles.content}>免費</p>
      </div>
      <div className={styles.totalBlock}>
        <p className={styles.title}>小計</p>
        <p className={styles.content}>$5,290</p>
      </div>
    </div>
  );
});

export default Cart;
