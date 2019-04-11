import React from 'react'
import { connect } from 'react-redux'
import { getCartItems } from '../../../../redux/getters'

import CartItem from './CartItem'
import CartActions from './CartActions'


const CartList = ({ cart }) => (

  <>
    <ul className='list-group'>
      {
        cart &&
        cart.map(i => <CartItem key={ i.id } { ...i } />)
      }
    </ul>
    <CartActions />
  </>

)


export default connect(
  ({ products, cart }) => ({
    cart: getCartItems(products, cart)
  })
)(CartList)
