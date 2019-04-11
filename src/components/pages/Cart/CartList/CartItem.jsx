import React from 'react'
import { connect } from 'react-redux'
import { removeFromCart } from '../../../../redux/actions/cartActions'
import { Link } from 'react-router-dom'


const CartItem = ({ dispatch, id, title, price }) => (

  <li className='list-group-item d-flex justify-content-between align-items-center'>

    <div className='d-flex flex-column'>
      <Link to={ '/products/' + id }>{ title }</Link>
      <small className='text-muted mt-1'>${ price }</small>
    </div>

    <button
      className='btn btn-danger btn-sm'
      onClick={
        () => dispatch(removeFromCart(id))
      }
    >
      Remove
    </button>

  </li>

)


export default connect()(CartItem)
