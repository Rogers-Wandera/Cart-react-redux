import { actions_types } from "./actions"; 

const reducer = (state,action) => {
    if(action.type === actions_types.DECREASE){
      let tempCart = state.cart.map((item) => {
        if(item.id === action.payload.id) {
          return {...item, amount: item.amount - 1}
        }
        return item;
      })
      return {...state, cart: tempCart}
    }
    if(action.type === actions_types.CLEAR_CART){
      return {...state, cart: []}
    }
    if(action.type === actions_types.INCREASE){
      let tempCart = [];
      tempCart = state.cart.map((item) => {
        if(item.id === action.payload.id) {
          item = {...item, amount: item.amount + 1}
        }
        return item
      })
      return {...state, cart: tempCart}
    }
    if(action.type === actions_types.REMOVE){
      return {...state, cart : state.cart.filter((item) => item.id !== action.payload.id)}
    }
    if(action.type === actions_types.GET_TOTALS) {
      let totalCartItems = state.cart.reduce((total,item) => {
        total += item.amount
        return total
      },0)

      let totalPrice = state.cart.reduce((total,item) => {
        let unit = item.price * item.amount
        console.log(total = total + unit)
        return total
      },0)

      totalPrice = parseFloat(totalPrice.toFixed(2))

      return {...state,total:totalCartItems,amount: totalPrice}
    }
    return state
}

export default reducer;