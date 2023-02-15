import React, { useState, useEffect } from 'react'
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
    setCount( (prevValue) => prevValue - 1);
  }

  useEffect( () => {
    if(count > 3) {
      return;
    }
    fetch('http://ip-api.com/json/24.48.0.1?fields=45674495').then( (res) => res.json() )
    .then( (res) => {
      console.log(res);
    })
    .catch( err => {
      console.error(err)
    });

  }, [])

  return (
    <>
      <p>Hello world</p>
    </>
  )
}
