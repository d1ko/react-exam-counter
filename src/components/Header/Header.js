import { Basket } from "../Basket/Basket";
import styles from "./styles.module.css";
import { Avatar, Badge, Space } from "antd";


export const Header = () => {
  return (
    <div className={styles.header}>
        any icon 
      <Basket />
    </div>
  );
};