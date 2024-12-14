const fetchProducts = async ({ pageParam = 1 }) => {
  const url = `https://fakestoreapi.in/api/products?limit=3?page=${pageParam}`;
  const response = await fetch(url);
  return response.json();
};

export default fetchProducts;
