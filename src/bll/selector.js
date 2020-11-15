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
    }
}