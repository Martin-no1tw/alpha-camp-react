// eslint-disable-next-line no-unused-vars
import React from 'react';
import './style.scss';

const Step2 = () => {
  return (
    <div className="container">
      <h3>運送方式</h3>
      <form>
        <div className="standard-container">
          <input className="check" type="radio" value="standard-shipping" />
          <label className="shipping-basic">標準運送</label>
          <label className="charge">免費</label>
          <label className="arrival">約3~7個工作天</label>
        </div>
        <div className="dhl-container">
          <input className="check" type="radio" value="dhl-shipping" />

          <label className="shipping-dhl">DHL 貨運</label>
          <label className="charge">$500</label>
          <label className="arrival">48小時內送達</label>
        </div>
      </form>
    </div>
  );
};

export default Step2;
