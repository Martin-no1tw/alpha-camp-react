// eslint-disable-next-line no-unused-vars
import React, { memo } from 'react';
import styles from './style.module.scss';

const itemName = ['男款', '女款', '最新消息', '客製商品', '聯絡我們'];

const Header = memo(() => {
  return (
    <ul className={styles.nav}>
      {itemName.map((item) => {
        return (
          <li className={styles.nav_item} key={item}>
            {item}
          </li>
        );
      })}
    </ul>
  );
});

export default Header;
