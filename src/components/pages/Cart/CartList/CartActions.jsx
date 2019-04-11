import React from 'react'
import { connect } from 'react-redux'
import { clearCart } from '../../../../redux/actions/cartActions'
import { Link } from 'react-router-dom'


const CartActions = ({ dispatch }) => (

  <div className='card bg-light mt-5'>
    <div className='card-body'>
    
      <button
        className='btn btn-primary mr-3'
        onClick={
          () => dispatch(clearCart)
        }
      >
        Checkout
      </button>

      <Link to='/products'>
        <small>Back to products</small>
      </Link>

    </div>
  </div>

)


export default connect()(CartActions)
