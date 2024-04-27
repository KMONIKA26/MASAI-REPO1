// app.js
const apiUrl = 'https://fakestoreapi.com';

// Function to fetch product data from API
async function fetchProducts() {
  try {
    const response = await fetch(`${apiUrl}/products`);
    const products = await response.json();
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

// Function to fetch categories from API
async function fetchCategories() {
  try {
    const response = await fetch(`${apiUrl}/products/categories`);
    const categories = await response.json();
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

// Function to render products on the page
function renderProducts(products) {
  const productsContainer = document.querySelector('.products');
  productsContainer.innerHTML = '';
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>$${product.price}</p>
    `;
    productsContainer.appendChild(productCard);
  });
}

// Function to initialize the application
async function init() {
  const products = await fetchProducts();
  const categories = await fetchCategories();
  
  const categorySelect = document.querySelector('#category');
  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
  });

  categorySelect.addEventListener('change', async () => {
    const selectedCategory = categorySelect.value;
    const filteredProducts = selectedCategory
      ? products.filter(product => product.category === selectedCategory)
      : products;
    renderProducts(filteredProducts);
  });

  const sortSelect = document.querySelector('#sort');
  sortSelect.addEventListener('change', () => {
    const sortOrder = sortSelect.value === 'asc' ? 1 : -1;
    const sortedProducts = [...products].sort((a, b) => sortOrder * (a.price - b.price));
    renderProducts(sortedProducts);
  });

  const searchInput = document.querySelector('#search');
  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchTerm));
    renderProducts(filteredProducts);
  });

  renderProducts(products);
}

init();
