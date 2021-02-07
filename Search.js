export const Search = {
    data() {
        return {
            searchProduct: '',
        }
    },
    template: ` <form action="#" class="search-form" @submit.prevent>

                    <button class="btn-search" type="submit">
                        <i class="fas fa-search"></i>Go
                    </button>
                </form>`
}
