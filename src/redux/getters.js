export const getFilteredProducts = (products, filter) => (
  filter
    ? products.filter(i => i.category === filter)
    : products
)
