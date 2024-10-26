function calculateCartTotal(cart){
    let sum = 0;
    for (const item of cart) {
        sum += item.quantity * item.priceEach;
    }
    return sum.toFixed(2);
}

export { calculateCartTotal }