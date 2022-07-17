// eslint-disable-next-line no-unused-vars
import React from 'react';
import './style.scss';

const ProgressControl = () => {
  return (
    <section className="button-group">
      <button className="prev" disabled>
        上一步
      </button>
      <button className="next">下一步</button>
      <button className="next" disabled>
        確認下單
      </button>
      <hr />
    </section>
  );
};
export default ProgressControl;
