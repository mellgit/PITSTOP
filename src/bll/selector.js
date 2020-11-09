export const selector = {
    menu: {
        getMenu(state) {
            return state.reducerMenu
        }
    },

    client: {
        getMenuData(state) {
            return state.reducerClient.data
        }
    }
}