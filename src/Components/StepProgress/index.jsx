// eslint-disable-next-line no-unused-vars
import React from 'react';
import './style.scss';

const StepProgressFlow = {
  step: Number,
};

const StepProgress: React.FC<StepProgressFlow> = (props) => {
  const { step } = props;
  return (
    <div className="stepProgress">
      <div className="title">結帳</div>
      <div className="progressBlock">
        <div className={`item ${step === 1 ? 'active' : ''}`}>
          <p className={`number ${step === 1 ? 'active' : ''}`}>1</p>
          寄送地址
        </div>
        <span className="Line" />
        <div className={`item ${step === 2 ? 'active' : ''}`}>
          <p className={`number ${step === 2 ? 'active' : ''}`}>2</p>
          運送方式
        </div>
        <span className="Line" />
        <div className={`item ${step === 3 ? 'active' : ''}`}>
          <p className={`number ${step === 3 ? 'active' : ''}`}>3</p>
          付款資訊
        </div>
      </div>
    </div>
  );
};
export default StepProgress;
