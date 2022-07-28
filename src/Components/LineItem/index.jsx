// eslint-disable-next-line no-unused-vars
import React, { memo } from 'react';
import styles from './style.module.scss';

type LineItemProps = {
  id: string,
  name: string,
  img: string,
  price: Number,
};
const LineItem: React.FC<LineItemProps> = memo((props) => {
  const { id, name, img, price } = props;
  return (
    <div className={styles.lineitem} id={id}>
      <img className={styles.img} src={img} alt="img" />
      <div className={styles.rightBlock}>
        <div className={styles.title}>
          <div className={styles.text}>{name}</div>
          <div className={styles.price}>{price}</div>
        </div>
        <div className={styles.count}>
          <button className={styles.minus}>-</button>
          <div className={styles.number}>1</div>
          <button className={styles.plus}>+</button>
        </div>
      </div>
    </div>
  );
});

export default LineItem;
