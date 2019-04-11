import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import CartList from './CartList'
import CartEmpty from './CartEmpty'


const Cart = ({ cartLength }) => (

  <>
    {
      cartLength ? <CartList /> : <CartEmpty />
    }
  </>

)


export default withRouter(connect(
  ({ cart }) => ({ cartLength: cart.length })
)(Cart))
