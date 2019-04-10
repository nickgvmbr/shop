import React from 'react'
import { connect } from 'react-redux'
import { getFilteredProducts } from '../../../../redux/getters'

import GridItem from './GridItem'


const ProductGrid = ({ products }) => (

  <div className='card-columns mt-5'>
    {
      products &&
      products.map(
        i => <GridItem key={ i.id } { ...i } />
      )
    }
  </div>

)


export default connect(
  ({ products, filter }) => ({
    products: getFilteredProducts(products, filter.filter)
  })
)(ProductGrid)
