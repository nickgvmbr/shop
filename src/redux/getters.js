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

export const getProduct = (products, id) => (
  products
    ? products.find(i => i.id === Number(id))
    : null
)

export const isInCart = (cart, id) => cart.includes(Number(id))
