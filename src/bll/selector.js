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
        }
    }
}