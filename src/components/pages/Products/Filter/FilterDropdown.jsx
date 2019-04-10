import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  fetchCategories,
  setFilter
} from '../../../../redux/actions/filterActions'


const FilterDropdown = ({ dispatch, categories, filter }) => {

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  return (
    <select
      className='form-control'
      value={ filter }
      onChange={
        event => dispatch(setFilter(event.target.value))
      }
    >

      <option value=''>All</option>
      {
        categories &&
        categories.map(i => <option key={ i }>{ i }</option>)
      }

    </select>
  )

}


export default connect(
  ({ filter }) => ({
    categories: filter.categories,
    filter: filter.filter
  })
)(FilterDropdown)
