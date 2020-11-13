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
        }
    }
}