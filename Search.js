export const Search = {
    data() {
        return {
            searchProduct: '',
        }
    },
    template: ` <form action="#" class="search-form" @submit.prevent>
<<<<<<< HEAD
                    <input type="text" class="search-field" v-model.lazy="searchProduct" placeholder="Поиск по сайту">
=======

>>>>>>> main
                    <button class="btn-search" type="submit">
                        <i class="fas fa-search"></i>Go
                    </button>
                </form>`
}
