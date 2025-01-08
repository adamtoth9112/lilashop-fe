export const fetchProducts = async () => {
  try {
    const response = await fetch('/api/products');
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Could not load products. Please try again later.');
  }
};

export const fetchProductById = async (id: number) => {
  try {
    const response = await fetch(`/api/product/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch product with id ${id}: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error);
    throw new Error('Could not load product details. Please try again later.');
  }
};
