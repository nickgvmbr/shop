export const getFilteredProducts = (products, filter) => (
  filter
    ? products.filter(i => i.category === filter)
    : products
)

export const getCartItems = (products, cart) => (
  products
    ? products.filter(i => cart.includes(i.id))
    : null
)
