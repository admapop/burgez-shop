import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import CustomButton from "../custom-button/CustomButton";
import CartItem from '../cart-item/CartItem';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.map(cartItem => 
            <CartItem key={cartItem.id}
            item={cartItem}
            />
          )
        }
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

const mapDispatchToProps = {
  
}


export default connect(mapStateToProps)(CartDropdown);