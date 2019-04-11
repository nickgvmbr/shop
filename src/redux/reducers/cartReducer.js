const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.id]

    case 'REMOVE_FROM_CART':
      return state.filter(i => i !== action.id)

    case 'CLEAR_CART':
      return []

    default:
      return state
  }
}

export default cartReducer
