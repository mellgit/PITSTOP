export const selector = {
    menu: {
        getMenu(state) {
            return state.reducerMenu
        }
    },

    profile: {
        getMenuData(state) {
            return state.reducerProfile.menu
        },

        getPersonalData(state) {
            return state.reducerPersonalData
        },

        isOpenAddCarWindow(state) {
            return state.reducerGarage.isOpenAddCarWindow
        },

        getCars(state) {
            return state.reducerGarage.cars
        },

        getTypesCode(state) {
            return {
                get VIN() {
                    return state.reducerGarage.typeCodeVIN
                },

                get frame() {
                    return state.reducerGarage.typeCodeFrame
                }
            }
        },

        getBasket(state) {
            return state.reducerBasket.basket
        },

        getTotal(state) {
            return state.reducerBasket.total
        },

        getTotalWithotDiscount(state) {
            return state.reducerBasket.totalWithotDiscount
        },

        getCount(state) {
            return state.reducerBasket.сount
        },

        getIsSelectedAll(state) {
            return state.reducerBasket.isSelectedAll
        }
    },

    catalog: {
        getListCars(state) {
            return state.reducerCatalog.listCars
        },

        getListProducts(state) {
            return state.reducerCatalog.listProducts
        },

        isSortByPrice(state) {
            return state.reducerCatalog.isSortByPrice
        },

        isSortByDiscount(state) {
            return state.reducerCatalog.isSortByDiscount
        },

        // getMinPrice(state) {
        //     return state.reducerCatalog.minPrice
        // },

        // getMaxPrice(state) {
        //     return state.reducerCatalog.maxPrice
        // }
    }
}