export const fetchCategories = () => dispatch => {
  fetch('https://my-json-server.typicode.com/tdmichaelis/json-api/categories')
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: 'FETCH_CATEGORIES',
        payload: data
      })
    })
}

export const setFilter = category => ({
  type: 'SET_FILTER',
  category
})

export const clearFilter = { type: 'CLEAR_FILTER' }
