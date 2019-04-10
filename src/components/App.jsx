import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchProducts } from '../redux/actions/productActions'

import Nav from './shared/Nav'
import Container from './pages/Container'


const App = ({ dispatch }) => {

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  
  return (
    <Router>
      <Nav />
      <Container />
    </Router>
  )

}


export default connect()(App)
