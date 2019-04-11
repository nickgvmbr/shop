import React from 'react'
import { Link } from 'react-router-dom'


const CartItem = ({ id, title, price }) => (

  <li className='list-group-item d-flex justify-content-between align-items-center'>

    <div className='d-flex flex-column'>
      <Link to={ '/products/' + id }>{ title }</Link>
      <small className='text-muted mt-1'>${ price }</small>
    </div>

    <button className='btn btn-danger btn-sm'>Remove</button>

  </li>

)


export default CartItem
