export const CartItem = {
    props: ['img', 'cartItem'],
    template: `<div class="product-bio">

                        <button class="del-btn" @click="$emit('removeProduct', cartItem)">&times;</button>
                    </div>
                </div>`
}