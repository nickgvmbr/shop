import React from 'react'
import { Link } from 'react-router-dom'


const CartEmpty = () => (

  <div className='jumbotron text-center'>

    <h4>Your cart is empty</h4>
    <Link to='/products' className='btn btn-primary mt-3'>Go to products</Link>

  </div>

)


export default CartEmpty
