import React from "react"
import classes from './App.module.scss'
import { ButtonToggle } from 'reactstrap'
import { useDispatch, useSelector } from "react-redux";

function App() {

  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash)
  console.log(cash);

  const addCash = (cash) => {
    dispatch({
      type: 'ADD_CASH',
      payload: cash
    })
  }
  const subCash = (cash) => {
    dispatch({
      type: 'SUB_CASH',
      payload: cash
    })
  }

  return (
    <div className={classes.App}>
      <h2 className={classes.cash}>{cash}</h2>
      <div>
        <ButtonToggle color="primary" onClick={() => addCash(Number(prompt()))}>Полнить счёт</ButtonToggle>
        <ButtonToggle color="danger" onClick={() => subCash(Number(prompt()))}>Снять со счёта</ButtonToggle>
      </div>

    </div>
  );
}

export default App;
