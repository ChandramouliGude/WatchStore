const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('order-confirmed');
        button.innerText = 'Order Confirmed';
        setTimeout(() => {
            button.classList.remove('order-confirmed');
            button.innerText = 'Add to Cart';
        }, 2000);
    });
});