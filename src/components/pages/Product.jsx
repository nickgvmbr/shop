import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getProduct, isInCart } from '../../redux/getters'
import { addToCart, removeFromCart } from '../../redux/actions/cartActions'


const Product = ({ dispatch, product, inCart }) => (

  <>
    {
      product
        ? (
            <div className='row'>

              <div className='col-md-6'>
                <div className='img mb-5'>
                  <img src={ product.img } alt={ product } />
                </div>
              </div>

              <div className='col-md-6'>
                <h2>{ product.title }</h2>
                <span className='badge badge-secondary mb-5'>{ product.category }</span>
                <p className='text-muted'>{ product.description }</p>

                <span className='d-flex align-items-center'>


                  {
                    inCart
                    ? (<button
                        className='btn btn-danger'
                        onClick={
                          () => dispatch(removeFromCart(product.id))
                        }
                      >
                        Remove from cart
                      </button>)
                    : (<button
                        className='btn btn-primary'
                        onClick={
                          () => dispatch(addToCart(product.id))
                        }
                      >
                        Add to cart
                      </button>)
                  }


                  <h5 className='m-0 ml-2'>${ product.price }</h5>
                </span>
              </div>
          
            </div>
        )
        : <span>Product not found</span>
    }
  </>

)


export default withRouter(connect(
  (state, ownProps) => ({
    product: getProduct(state.products, ownProps.match.params.id),
    inCart: isInCart(state.cart, ownProps.match.params.id)
  })
)(Product))
