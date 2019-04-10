import React from 'react'
import { Link } from 'react-router-dom'


const GridItem = ({ id, img, title, price }) => (

  <div className='grid-item'>
    <Link to={ '/products/' + id }>

      <div className='card'>
        <div className='card-body text-center'>

          <div className='img-container mb-4'>
            <img src={ img } alt={ title } />
          </div>

          <h5 className='card-title'>{ title }</h5>
          <small className='card-text text-muted'>${ price }</small>
        
        </div>
      </div>

    </Link>
  </div>

)


export default GridItem
