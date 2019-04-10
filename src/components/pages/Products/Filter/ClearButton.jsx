import React from 'react'
import { connect } from 'react-redux'
import { clearFilter } from '../../../../redux/actions/filterActions'


const ClearButton = ({ dispatch, filter }) => (

  <button
    className='btn btn-primary ml-2'
    onClick={
      () => dispatch(clearFilter)
    }
    disabled={ !filter }
  >
    Clear
  </button>

)


export default connect(
  ({ filter }) => ({ filter: filter.filter })
)(ClearButton)
