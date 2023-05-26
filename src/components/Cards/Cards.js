import { Button, Card, Row} from "antd";
import React, { useState } from 'react';
import styles from './styles.module.css'

import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../store/cardSlice';


export const Cards = () => {
    const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [buttonTexts, setButtonTexts] = React.useState([
    { text: 'Add', clicked: false },
    { text: 'Add', clicked: false },
    { text: 'Add', clicked: false },
    { text: 'Add', clicked: false },
    { text: 'Add', clicked: false },
    { text: 'Add', clicked: false },
    { text: 'Add', clicked: false },
    { text: 'Add', clicked: false },
    { text: 'Add', clicked: false },
    { text: 'Add', clicked: false },
  ]);

  const handleClick = (buttonId) => {
    const updatedButtonTexts = [...buttonTexts];
    const button = updatedButtonTexts[buttonId];

    if (!button.clicked) {
      dispatch(increment());
      button.text = 'Delete';
      button.clicked = true;
    } else {
      dispatch(decrement());
      button.text = 'Add';
      button.clicked = false;
    }

    setButtonTexts(updatedButtonTexts);
  };

  return (
    <div className={styles.container}>
        {buttonTexts.map((button, index) => (
            <Row justify='center' className={styles.row}>
                <Card title={'n1'} className={styles.card}>
                    <Button key={index} onClick={() => handleClick(index)}>
                        {button.text}
                    </Button>
                </Card>
            </Row>
        ))}
      </div>
  );
};

