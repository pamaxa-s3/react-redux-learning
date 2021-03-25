import React from "react"
import classes from './App.module.scss'
import { ButtonToggle } from 'reactstrap'
import { useDispatch, useSelector } from "react-redux";

function App() {

  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customer = useSelector(state => state.customer.customer)

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
  const addCustomer = (cash) => {
    dispatch({
      type: 'SUB_CASH',
      payload: cash
    })
  }
  const subCustomer = (cash) => {
    dispatch({
      type: 'SUB_CASH',
      payload: cash
    })
  }

  return (
    <div className={classes.App}>
      <div>
        <h2 className={classes.cash}>{customer}</h2>
        <div>
          <ButtonToggle color="primary" onClick={() => addCustomer()}>Добавить пользователей</ButtonToggle>
          <ButtonToggle color="danger" onClick={() => subCustomer()}>Убрать пользователя</ButtonToggle>
        </div>
      </div>
      <div>
        <h2 className={classes.cash}>{cash}</h2>
        <div>
          <ButtonToggle color="primary" onClick={() => addCash(Number(prompt()))}>Полнить счёт</ButtonToggle>
          <ButtonToggle color="danger" onClick={() => subCash(Number(prompt()))}>Снять со счёта</ButtonToggle>
        </div>
      </div>


    </div>
  );
}

export default App;
