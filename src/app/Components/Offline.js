import { Button } from '@nextui-org/react';
import styles from '../styles/Offline.module.css';


const Offline = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <p className={styles.title}>You are Offline</p>
        <p className={styles.message}>
          You are not connected to the internet. Please connect to the internet and try again.
        </p>
        <Button className={styles.btn}  disableRipple>
          Reload
        </Button>
      </div>
    </div>
  );
};

export default Offline;
