import { Avatar, Badge, Space } from 'antd';
import styles from './styles.module.css'
// import { useDispatch, useSelector } from 'react-redux';
// import { getCard } from '../../store/cardSlice';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../../store/cardSlice';


export const Basket = () => {
    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return(
        <>
        <Space className={styles.basket} size="middle">
            <Badge count={count} showZero>
                <Avatar shape="square" size="large" style={{backgroundColor: "red"}}/>
            </Badge>
        </Space>
        </>
  
        );
};