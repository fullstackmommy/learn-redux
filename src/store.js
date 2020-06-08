import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { reducer as freezer } from './ducks/freezer'
import { reducer as orders } from './ducks/orders'
import { reducer as employees } from './ducks/employees'

const rootReducer = combineReducers({
  freezer,
  orders,
  employees
})

export default createStore(
  rootReducer,
  undefined,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
