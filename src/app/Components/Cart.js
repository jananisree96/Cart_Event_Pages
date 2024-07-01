import React from 'react';
import { Button  } from '@nextui-org/react';
import styles from '../styles/Cart.module.css';
import { MdArrowBackIos } from 'react-icons/md';

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Button className={styles.btn1} auto disableRipple >
            <MdArrowBackIos />
           Cart
        </Button>
        <Button className={styles.btn}  disableRipple>
          Add More
        </Button>
      </div>
      <div className={styles.main}>
        <img src="/empty-bag.jpeg" alt="Empty Cart" className={styles.image} />
        <p>Your cart is empty</p>
        <Button className={styles.btn3}  disableRipple>
          Browse Products
        </Button>
      </div>
    </div>
  );
};

export default Cart;
