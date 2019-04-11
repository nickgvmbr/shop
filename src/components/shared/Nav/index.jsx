import React from 'react'
import { NavLink } from 'react-router-dom'

import CartBadge from './CartBadge'


const Nav = () => (

  <nav
    className='navbar navbar-expand sticky-top navbar-dark bg-dark shadow'
  >
    <div className='navbar-nav'>

      <NavLink to='/products' className='nav-item nav-link'>
        Products
      </NavLink>
      <NavLink to='/cart' className='nav-item nav-link'>
        Cart
        <CartBadge />
      </NavLink>

    </div>
  </nav>

)


export default Nav
