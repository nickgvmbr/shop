export const fetchProducts = () => dispatch => {
  fetch('https://my-json-server.typicode.com/tdmichaelis/json-api/products')
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: 'FETCH_PRODUCTS',
        payload: data
      })
    })
}
