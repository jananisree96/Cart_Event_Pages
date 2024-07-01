import { Button } from '@nextui-org/react';
import styles from '../styles/Login.module.css';
import { MdArrowBackIos } from 'react-icons/md';


const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <Button className={styles.btn1} auto disableRipple >
            <MdArrowBackIos />
           Cart
        </Button>
      </div>
      <div className={styles.main}>
        <p className={styles.title}>Please Login</p>
        <p className={styles.message}>
          Please login to access the cart.
        </p>
        <Button className={styles.btn2} disableRipple>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
