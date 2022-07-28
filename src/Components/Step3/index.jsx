// eslint-disable-next-line no-unused-vars
import React, { memo } from 'react';
import './style.scss';

const Step3 = memo(() => {
  return (
    <div className="main">
      <div className="title">付款資訊</div>
      <div className="formRow">
        <div className="formItem w-350">
          <label className="name">持卡人姓名</label>
          <input type="text" placeholder="John Doe" />
        </div>
      </div>
      <div className="formRow">
        <div className="formItem w-350">
          <label className="name">卡號</label>
          <input type="text" placeholder="1111 2222 3333 4444" />
        </div>
      </div>
      <div className="formRow">
        <div className="formItem w-255">
          <label className="name">有效期限</label>
          <input type="text" placeholder="MM/YY" />
        </div>
        <div className="formItem w-255">
          <label className="name">CVC / CCV</label>
          <input type="text" placeholder="123" />
        </div>
      </div>
    </div>
  );
});

export default Step3;
