// eslint-disable-next-line no-unused-vars
import React from 'react';
import './style.scss';
import Number1 from '../../assets/img/Number1.svg';
import Number2 from '../../assets/img/Number2.svg';
import Number3 from '../../assets/img/Number3.svg';

const StepProgress = () => {
  return (
    <div className="stepProgress">
      <div className="title">結帳</div>
      <div className="progressBlock">
        <div className="item">
          <img src={Number1} alt="" className="number" />
          寄送地址
        </div>
        <span className="connectLine" />
        <div className="item">
          <img src={Number2} alt="" className="number" />
          運送方式
        </div>
        <span className="connectLine" />
        <div className="item">
          <img src={Number3} alt="" className="number" />
          付款資訊
        </div>
      </div>
    </div>
  );
};

export default StepProgress;
