// eslint-disable-next-line no-unused-vars
import React from 'react';
import './style.scss';
import LineItem from '../LineItem/index';

const Cart = () => {
  return (
    <div className="cart">
      <div className="title">購物籃</div>
      <LineItem />
      <div className="deliveryFeeBlock">
        <p className="title">運費</p>
        <p className="content">免費</p>
      </div>
      <div className="totalBlock">
        <p className="title">小計</p>
        <p className="content">$5,290</p>
      </div>
    </div>
  );
};

export default Cart;
