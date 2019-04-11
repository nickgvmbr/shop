import React from 'react'
import { Link } from 'react-router-dom'


const CartActions = () => (

  <div className='card bg-light mt-5'>
    <div className='card-body'>
    
      <button className='btn btn-primary mr-2'>Checkout</button>
      <Link to='/products'>
        <small>Back to products</small>
      </Link>

    </div>
  </div>

)


export default CartActions
