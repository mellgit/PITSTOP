const initialState = {
    data: [
        {
            id: 1,
            path: "/clients",
            name: "Клиенты",
            isActive: false
        },
        {
            id: 2,
            path: "/clients/profiles",
            name: "Профили",
            isActive: false
        },
        {
            id: 3,
            path: "/clients/guest",
            name: "Гость",
            isActive: false
        },
        {
            id: 4,
            path: "/clients/discountsOnOrder",
            name: "Скидки на заказ",
            isActive: false
        },
        {
            id: 5,
            path: "/clients/statuses",
            name: "Статусы",
            isActive: false
        },
        {
            id: 6,
            path: "/clients/franchisee",
            name: "Франчайзи",
            isActive: false
        },
        {
            id: 7,
            path: "/clients/SMSmailing",
            name: "SMS-рассылка",
            isActive: false
        }
    ]
}

const CHANGE_IS_ACTICVE_BY_PATH = "REDUCER_CLIENT_CHANGE_IS_ACTICVE_BY_PATH"

const reducerClient = (state=initialState, action) => {
    switch (action.type) {
        case CHANGE_IS_ACTICVE_BY_PATH:
            const data = state.data.map(item => ({...item, isActive: item.path === action.path}));

            return {
                ...state,
                data
            }
        default:
            return state
    }
}

export default reducerClient

export const reducerClientActionCreator = {
    changeIsActiveByPath: (path) => ({type: CHANGE_IS_ACTICVE_BY_PATH, path})
}