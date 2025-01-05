const apiUrl = "https://api.freeapi.app/api/v1/public/randomproducts?imit=10";

const fetchProducts = async ({ page }: { page: number }) => {
  const url = `${apiUrl}&page=${page}`;
  const response = await fetch(url);
  return response.json();
};

export default fetchProducts;
