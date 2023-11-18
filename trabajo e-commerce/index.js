let cartCount = 0;

        function addToCart(product) {
            cartCount++;
            document.getElementById('cart-count').innerText = cartCount;
            alert(`Agregado al carrito: ${product}`);
}