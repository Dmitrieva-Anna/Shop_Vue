export const CartItem = {
    props: ['img', 'cartItem'],
    template: `<div class="product-bio">
                    <img class="cart-item" :src="img" :alt="cartItem.product_name">
                    <div class="product-desc">
                        <p class="product-title">{{ cartItem.product_name }}</p>
                        <p class="product-quantity">Количество: {{ cartItem.quantity }}</p>
                        <p class="product-single-price">$ {{ cartItem.price }} Р</p>
                    </div>
                    <div class="right-block">
                        <p class="product-price">{{ cartItem.quantity * cartItem.price }} Р</p>
                        <button class="del-btn" @click="$emit('removeProduct', cartItem)">&times;</button>
                    </div>
                </div>`
}