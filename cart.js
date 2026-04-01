/**
 * Shopping cart (localStorage). Used by cart.html, payment.html, and add-to-cart buttons site-wide.
 */
const INFINITRIP_CART_KEY = 'infinitripCart';

function getCart() {
    try {
        const raw = localStorage.getItem(INFINITRIP_CART_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch (e) {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem(INFINITRIP_CART_KEY, JSON.stringify(cart));
}

function getCartTotal() {
    return getCart().reduce((sum, item) => {
        const price = parseFloat(item.price) || 0;
        const qty = parseInt(item.quantity, 10) || 0;
        return sum + price * qty;
    }, 0);
}

function getCartCount() {
    return getCart().reduce((sum, item) => sum + (parseInt(item.quantity, 10) || 0), 0);
}

function clearCart() {
    localStorage.removeItem(INFINITRIP_CART_KEY);
    updateCartCount();
}

function addToCart(item) {
    if (!item || item.id == null || !item.type) return;
    const cart = getCart();
    const idx = cart.findIndex(
        i => String(i.id) === String(item.id) && i.type === item.type
    );
    const addQty = parseInt(item.quantity, 10) || 1;
    if (idx >= 0) {
        cart[idx].quantity = (parseInt(cart[idx].quantity, 10) || 0) + addQty;
    } else {
        cart.push({
            id: item.id,
            name: item.name || 'Item',
            price: parseFloat(item.price) || 0,
            quantity: addQty,
            type: item.type,
            image: item.image || ''
        });
    }
    saveCart(cart);
    updateCartCount();
}

function updateCartQuantity(id, type, quantity) {
    const qty = parseInt(quantity, 10);
    let cart = getCart();
    const idx = cart.findIndex(i => String(i.id) === String(id) && i.type === type);
    if (idx === -1) return;
    if (!qty || qty < 1) {
        cart.splice(idx, 1);
    } else {
        cart[idx].quantity = qty;
    }
    saveCart(cart);
    updateCartCount();
    if (typeof renderCart === 'function') renderCart();
    if (typeof renderCheckout === 'function') renderCheckout();
}

function removeFromCart(id, type) {
    const cart = getCart().filter(i => !(String(i.id) === String(id) && i.type === type));
    saveCart(cart);
    updateCartCount();
    if (typeof renderCart === 'function') renderCart();
    if (typeof renderCheckout === 'function') renderCheckout();
}

function updateCartCount() {
    const badge = document.getElementById('cartBadge');
    const n = getCartCount();
    if (badge) {
        badge.textContent = n;
        badge.style.display = n > 0 ? 'inline' : 'none';
    }
}

window.getCart = getCart;
window.saveCart = saveCart;
window.getCartTotal = getCartTotal;
window.getCartCount = getCartCount;
window.clearCart = clearCart;
window.addToCart = addToCart;
window.updateCartQuantity = updateCartQuantity;
window.removeFromCart = removeFromCart;
window.updateCartCount = updateCartCount;
