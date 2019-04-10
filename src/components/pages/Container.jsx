import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import Products from './Products'
import Cart from './Cart'


const Container = () => (

  <div className='container'>

    <Route exact path='/' render={ () => <Redirect to='/products' /> } />
    <Route exact path='/products' render={ Products } />
    <Route exact path='/cart' render={ Cart } />

  </div>

)


export default Container
