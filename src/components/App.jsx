import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Nav from './shared/Nav'
import Container from './pages/Container'


const App = () => (

  <Router>
    <Nav />
    <Container />
  </Router>

)


export default App
