let cartSubtotal = document.querySelector('#cart-subtotal p:nth-child(2)');
let cartTax = document.querySelector('#cart-tax p:nth-child(2)');
let cartShipping = document.querySelector('#cart-shipping p:nth-child(2)');
let cartTotal = document.querySelector('#cart-total p:nth-child(2)');

let quantity, price, product_total_price, allprices, tax, shipping, total;

// Control Cart and Find Total Values
function controlCart() {
    // total price rows in existing product divs
    allprices = document.getElementsByClassName('product-line-price');

    // Calculating Subtotal
    let sum = 0;
    for (let i = 0; i < allprices.length; i++) {
        sum += +allprices[i].textContent;
    }

    // Subtotal
    cartSubtotal.textContent = sum.toFixed(2);

    // Tax
    cartTax.textContent = (sum * 0.18).toFixed(2);

    // Shipping amount and the Total amount associated with it
    if (allprices.length > 0) {
        cartShipping.textContent = (15).toFixed(2);
        cartTotal.textContent = (sum + sum * 0.18 + 15).toFixed(2);

    } else {
        cartShipping.textContent = (0).toFixed(2);
        cartTotal.textContent = (sum + sum * 0.18 + 0).toFixed(2);

    }
}

controlCart();
document.addEventListener('click', function(e) {

    if ((e.target.classList.contains('fa-plus') || e.target.classList.contains('fa-minus'))) {

        // Find the parents and children
        quantity = e.target.parentElement.parentElement.childNodes[3];
        price = e.target.parentElement.parentElement.parentElement.childNodes[3].childNodes[1].childNodes[0];
        product_total_price = e.target.parentElement.parentElement.parentElement.childNodes[9].childNodes[0];

        // Increase Product Quantity
        if (e.target.classList.contains('fa-plus')) {
            quantity.textContent = Number(quantity.textContent) + 1;
        }

        // Decrease Product Quantity
        if (e.target.classList.contains('fa-minus') && quantity.textContent > 1) {
            quantity.textContent = Number(quantity.textContent) - 1;
        }

        // Write new product total for this specific element
        product_total_price.textContent = (price.textContent * quantity.textContent).toFixed(2);
    }

    if (e.target.classList.contains('remove-product')) {
        e.target.parentElement.parentElement.parentElement.remove();
    }



    controlCart();

});