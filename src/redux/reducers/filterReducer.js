const initialState = {
  categories: null,
  filter: ''
}

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CATEGORIES':
      return {
        ...state,
        categories: action.payload
      }

    case 'SET_FILTER':
      return {
        ...state,
        filter: action.category
      }

    case 'CLEAR_FILTER':
      return {
        ...state,
        filter: ''
      }

    default:
      return state
  }
}

export default filterReducer
