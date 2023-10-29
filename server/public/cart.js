document.addEventListener('DOMContentLoaded', function () {
    const products = document.querySelectorAll('.p');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    let cart = [];
    let total = 0;

    products.forEach(product => {
        const addToCartButton = product.querySelector('.add-to-cart');
        addToCartButton.addEventListener('click', () => {
            const productName = product.querySelector('h2').textContent;
            const productPrice = parseFloat(product.querySelector('p').textContent.replace('$60', ''));

            cart.push({ name: productName, price: productPrice });
            total += productPrice;

            // Update the cart display
            renderCart();
        });
    });

    function renderCart() {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
            cartItems.appendChild(li);
        });

        cartTotal.textContent = total.toFixed(2);
    }
});