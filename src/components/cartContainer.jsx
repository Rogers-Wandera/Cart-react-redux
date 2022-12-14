import React from "react";
import CartItem from "./cartItem";
import { connect } from 'react-redux';
import { actions_types } from "../redux/actions";

const CartContainer = ({ cart = [],amount,dispatch }) => {


  React.useEffect(() => {
    dispatch({type:actions_types.GET_TOTALS})
  })


  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  console.log(cart)
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {
          cart.map((item) => {
            return <CartItem key={item.id} {...item} />
          })
        }
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${amount}</span>
          </h4>
        </div>
        <button className="btn clear-btn"
        onClick={()=> dispatch({type: actions_types.CLEAR_CART})}
        >clear cart</button>
      </footer>
    </section>
  );
};

const mapStateToProps = (state) => {
  const { cart,amount } = state;
  return {cart,amount}
}

export default connect(mapStateToProps)(CartContainer);
