export const Product = {
    props: ['img', 'product'],
    template: `<div class="product-item">
                    <img :src="img + product.product_name + '.jpg'" :alt="product.product_name">
                    <div class="desc">
                        <h3>{{ product.product_name }}</h3>

                        <button class="buy-btn" @click="$root.$refs.basket.addProduct(product)">Купить</button>
                    </div>
                </div>`
}