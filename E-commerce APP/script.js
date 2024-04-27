const baseURL = 'http://localhost:3000';
let currentUser = null;

function fetchProducts() {
    fetch(`${baseURL}/products`)
        .then(response => response.json())
        .then(products => {
            displayProducts(products);
        });
}

function displayProducts(products) {
    const content = document.getElementById('content');
    content.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.src}" alt="${product.title}">
            <div>
                <h3>${product.title}</h3>
                <p>Price: $${product.price}</p>
                <p>Rating: ${product.ratings}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
                <button onclick="deleteFromCart(${product.id})">Delete from Cart</button>
            </div>
        `;
        content.appendChild(productElement);
    });
}

function addToCart(productId) {
    if (!currentUser) {
        alert('Please login to add products to cart.');
        return;
    }

    fetch(`${baseURL}/allUsersCart/${currentUser.name}`)
        .then(response => response.json())
        .then(userCart => {
            const productToAdd = products.find(product => product.id === productId);
            userCart.push(productToAdd);
            fetch(`${baseURL}/allUsersCart/${currentUser.name}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userCart)
            });
        });
}

function deleteFromCart(productId) {
    if (!currentUser) {
        alert('Please login to delete products from cart.');
        return;
    }

    fetch(`${baseURL}/allUsersCart/${currentUser.name}`)
        .then(response => response.json())
        .then(userCart => {
            const updatedCart = userCart.filter(product => product.id !== productId);
            fetch(`${baseURL}/allUsersCart/${currentUser.name}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedCart)
            });
        });
}

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch(`${baseURL}/users?email=${email}&password=${password}`)
        .then(response => response.json())
        .then(users => {
            if (users.length > 0) {
                currentUser = users[0];
                document.getElementById('user-name').textContent = `Welcome, ${currentUser.name}`;
                fetchProducts();
            } else {
                alert('Invalid email or password.');
            }
        });
}

document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();
});
