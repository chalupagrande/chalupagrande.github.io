import React, { useState } from 'react';
import styles from './drawer.module.css';
import clsx from 'clsx';

type DrawerProps = {
  side: 'left' | 'right';
  title: string;
  children: React.ReactNode;
};

const Drawer: React.FC<DrawerProps> = ({ side = "right", title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.drawer}>
      <div className={clsx(styles['drawer-header'], side === "left" ? styles.left : styles.right)}>
        <h2>{title}</h2>
        <button onClick={toggleDrawer}>X</button>
      </div>
      {isOpen && (
        <div className={`${styles.drawer} ${styles[side]}`}>
          <div className={styles['drawer-content']}>{children}</div>
        </div>
      )}
    </div>
  );
};

export default Drawer;