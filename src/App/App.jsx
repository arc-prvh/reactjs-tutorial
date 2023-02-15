import React, { useState } from 'react'

import styles from './App.module.css'

const MAX_LIMIT = 5;
const MIN_LIMIT = 0;

export default function App() {
  // useState hook
  const [ count, setCount ] = useState(0);

  function incrementCount(evt) {
    evt.preventDefault();
    setCount( (prevValue) => prevValue + 1);
  }

  function decrementCount(evt) {
    evt.preventDefault();
    setCount((prevValue) => prevValue - 1);
  }

  console.log(count, styles);
  return (
    <>
      {(count > MIN_LIMIT) ? <button className={'button'} onClick={decrementCount}>&minus;</button> : <></>}<p className={styles['black']}>{count}</p>{(count < MAX_LIMIT) ? <button className={styles['button']} onClick={incrementCount}>+</button> : <></>}
    </>
  )
}
