// eslint-disable-next-line no-unused-vars
import React from 'react';
import product from '../../assets/img/fakeProduct.svg';
import './style.scss';

const LineItem = () => {
  return (
    <div className="lineitem">
      <img src={product} alt="" />
      <div className="rightBlock">
        <div className="title">
          <div className="text">刷破牛仔褲</div>
          <div className="price">$3,999</div>
        </div>
        <div className="count">
          <button className="minus">-</button>
          <div className="number">1</div>
          <button className="plus">+</button>
        </div>
      </div>
    </div>
  );
};

export default LineItem;
