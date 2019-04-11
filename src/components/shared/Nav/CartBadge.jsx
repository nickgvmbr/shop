import React from 'react'
import { connect } from 'react-redux'


const CartBadge = ({ cartLength }) => (

  <>
    {
      (cartLength > 0) && 
      <span class='badge badge-primary ml-2'>{ cartLength }</span>
    }
  </>

)


export default connect(
  ({ cart }) => ({ cartLength: cart.length })
)(CartBadge)
