export const getProducts = async () => {
  let response;
  const url = `https://fakestoreapi.com/products`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log('data=', data);
    response = data;
  } catch (error) {
    response = { isError: true, error: error || {} };
  }
  return response;
};
