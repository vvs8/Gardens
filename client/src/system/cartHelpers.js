export const addItem = (item = [], count = 0, next = f => f) => {
    let cart = [];
    if (typeof window !== 'undefined') {
        if (sessionStorage.getItem('cart')) {
            cart = JSON.parse(sessionStorage.getItem('cart'));
        }
        
        function uniqByKeepLast(a, key) {
            return [...new Map(a.map(x => [key(x), x])).values()]
        }
        cart = Array.from(uniqByKeepLast(cart, it => it.id));
        cart.push({...item});
        sessionStorage.setItem('cart', JSON.stringify(cart));
        next();
    }
};

export const itemTotal = () => {
    if (typeof window !== 'undefined') {
        if (sessionStorage.getItem('cart')) {
            return JSON.parse(sessionStorage.getItem('cart')).length;
        }
    }
    return 0;
};

export const getCart = () => {
    if (typeof window !== 'undefined') {
        if (sessionStorage.getItem('cart')) {
            return JSON.parse(sessionStorage.getItem('cart'));
        }
    }
    return [];
};

export const updateItem = (productId, count) => {
    let cart = [];
    if (typeof window !== 'undefined') {
        if (sessionStorage.getItem('cart')) {
            cart = JSON.parse(sessionStorage.getItem('cart'));
        }

        cart.map((product, i) => {
            if (product._id === productId) {
                cart[i].count = count;
            }
        });

        sessionStorage.setItem('cart', JSON.stringify(cart));
    }
};

export const removeItem = productId => {
    let cart = [];
    if (typeof window !== 'undefined') {
        if (sessionStorage.getItem('cart')) {
            cart = JSON.parse(sessionStorage.getItem('cart'));
        }

        cart.map((product, i) => {
            if (product._id === productId) {
                cart.splice(i, 1);
            }
        });

        sessionStorage.setItem('cart', JSON.stringify(cart));
    }
    return cart;
};

export const emptyCart = next => {
    if (typeof window !== 'undefined') {
        sessionStorage.removeItem('cart');
        next();
    }
};