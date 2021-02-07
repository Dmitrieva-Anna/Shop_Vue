import { CartItem } from "./CartItem.js";

export const Cart = {
    inject: ['API', 'getJson'],
    components: {
        CartItem
    },
    data() {
        return {

            cartVisibility: false,
        }
    },
    methods: {
        showCart() {    // показать/скрыть корзину
            this.cartVisibility = !this.cartVisibility;
        },
        addProduct(product) {   // добавить товар в корзину
            this.$root.getJson(`${this.API}/addToBasket.json`)
                .then(data => {
                    if (data.result) {
                        let find = this.cartItems.find(el => el.id_product === product.id_product);
                        if (find) {
                            find.quantity++;

                        }
                    }
                })
        },
        removeProduct(product) {    // удалить товар из корзины
            this.$root.getJson(`${this.API}/deleteFromBasket.json`)
                .then(data => {
                    if (data.result) {
                        if (product.quantity > 1) {
                            product.quantity--;
<<<
                        }
                    }
                });
        },
    },

                    </div>
                </div>`
} 