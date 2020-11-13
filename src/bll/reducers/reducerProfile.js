import { path } from "../../path";

const initialState = {
    menu: [
        {
            id: 1,
            path: path.PROFILE_PERSONAL_DATA,
            name: "Личный данные",
            isActive: false
        },
        {
            id: 2,
            path: path.PROFILE_GARAGE,
            name: "Гараж",
            isActive: false
        },
        {
            id: 3,
            path: path.PROFILE_BASKET,
            name: "Корзина",
            isActive: false
        },
        {
            id: 4,
            path: path.PROFILE_ORDERS,
            name: "Заказы",
            isActive: false
        }
    ]
}

const CHANGE_IS_ACTICVE_BY_PATH = "REDUCER_CLIENT_CHANGE_IS_ACTICVE_BY_PATH"

const reducerProfile = (state=initialState, action) => {
    switch (action.type) {
        case CHANGE_IS_ACTICVE_BY_PATH:
            const menu = state.menu.map(item => ({...item, isActive: item.path === action.path}));

            return {
                ...state,
                menu
            }
        default:
            return state
    }
}

export default reducerProfile

export const reducerClientActionCreator = {
    changeIsActiveByPath: (path) => ({type: CHANGE_IS_ACTICVE_BY_PATH, path})
}