import {createStore} from "redux";
import reducer from './redux/reducer';
import cartItems from "./cart-item";

const initial_state = {
  cart: cartItems,
  total: 0,
  amount: 0
}

const store = createStore(reducer,initial_state,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;