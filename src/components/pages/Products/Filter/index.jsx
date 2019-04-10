import React from 'react'

import ClearButton from './ClearButton'
import FilterDropdown from './FilterDropdown'


const Filter = () => (

  <div className='form-group'>
    <label>Category:</label>

    <div className='row'>
      <div className='col-md-4'>

        <span className='d-flex'>
          <FilterDropdown />
          <ClearButton />
        </span>
      
      </div>
    </div>

  </div>

)


export default Filter
