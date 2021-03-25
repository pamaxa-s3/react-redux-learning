import React from "react"
import classes from './App.module.scss'
import { ButtonToggle } from 'reactstrap'
import { useDispatch, useSelector } from "react-redux"
import { addCustomerAction, removeCustomerAction } from "./store/customerReducer"
import { fetchCustomers } from "./asyncAction/customer"

function App() {

  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)

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
  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now()
    }

    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className={classes.App}>
      <div>
        <h2 className={classes.cash}>{cash}</h2>
        <div>
          <ButtonToggle color="primary" onClick={() => addCash(Number(prompt()))}>Полнить счёт</ButtonToggle>
          <ButtonToggle color="danger" onClick={() => subCash(Number(prompt()))}>Снять со счёта</ButtonToggle>
        </div>
      </div>
      <div>
        <div className={classes.cash}>{
          customers.length > 0
            ? <div>
              {customers.map(customer =>
                <div className={classes.cash}
                  onClick={() => removeCustomer(customer)}
                >{customer.name}
                </div>
              )}
            </div>
            : <div className={classes.cash}>
              Пользователи отсутствуют
              </div>
        }</div>
        <div>
          <ButtonToggle color="primary" onClick={() => addCustomer(prompt())}>Добавить пользователей</ButtonToggle>
          <ButtonToggle color="danger" onClick={() => dispatch(fetchCustomers())}>Получить список пользователей</ButtonToggle>
        </div>
      </div>
    </div>
  );
}

export default App;
