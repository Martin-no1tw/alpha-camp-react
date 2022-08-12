// eslint-disable-next-line no-unused-vars
import React, { memo, useCallback } from 'react';
import styles from './style.module.scss';
import useCartContext from '../../Context/CartContext';
import {
  actionUpdateQuantity,
  actionRemoveCartItem,
} from '../../hooks/actions';

const LineItem = memo((props) => {
  const { id, name, img, price, quantity } = props;
  const { dispatch } = useCartContext();

  const atUpdateQuantity = useCallback(
    (ItemId: String, num: Number) => {
      dispatch(actionUpdateQuantity(ItemId, num));
    },
    [dispatch],
  );
  const atRemoveCartItem = useCallback(
    (removeId: Number) => {
      dispatch(actionRemoveCartItem(removeId));
    },
    [dispatch],
  );

  return (
    <div className={styles.lineitem} id={id}>
      <img className={styles.img} src={img} alt="img" />
      <div className={styles.rightBlock}>
        <div className={styles.title}>
          <div className={styles.text}>{name}</div>
          <div className={styles.price}>{price}</div>
        </div>
        <div className={styles.count}>
          <button
            className={styles.minus}
            onClick={() => atRemoveCartItem(id, -1)}
          >
            -
          </button>
          <div className={styles.number}>{quantity}</div>
          <button
            className={styles.plus}
            onClick={() => atUpdateQuantity(id, 1)}
          >
            +
          </button>
        </div>
        <div className={styles.totalprice}>
          <span id="total">{price * quantity}</span>
        </div>
      </div>
    </div>
  );
});

export default LineItem;
