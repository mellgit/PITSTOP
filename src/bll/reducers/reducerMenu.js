import main from "../../assets/images/menu/main.svg"
import peoples from "../../assets/images/menu/peoples.svg"
import clients from "../../assets/images/menu/clients.svg"
import personal from "../../assets/images/menu/personal.svg"

const initialState = [
    {
        name: "Главная",
        icon: main,
        iconHover: main,
        isNeedToGoByUrl: true,
        url: "/",
        isActive: false,
        children: []
    },
    {
        name: "Люди",
        icon: peoples,
        iconHover: peoples,
        isNeedToGoByUrl: false,
        url: "",
        isActive: false,
        children: [
            {
                name: "Клиенты",
                icon: clients,
                iconHover: clients,
                url: "/clients",
                isActive: false
            },
            {
                name: "Персонал",
                icon: personal,
                iconHover: personal,
                url: "/personal",
                isActive: false
            }
        ]
    }
]

const TOGGLE_OPEN = "TOGGLE_OPEN"
const TOGGLE_ACTIVE_SUB_ELEMENT = "TOGGLE_ACTIVE_SUB_ELEMENT"

const reducerMenu = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_OPEN:
            const isNeedToGoByUrl = state.find((item) => item.name === action.name).isNeedToGoByUrl

            state.forEach(item => {
                if (item.name === action.name) {
                    item.isActive = !item.isActive
                    return;
                }

                if (isNeedToGoByUrl) {
                    if (item.isNeedToGoByUrl) {
                        item.isActive = false
                    }

                    item.children.forEach(child => child.isActive = false)
                }
            })
            return [
                ...state
            ]

        case TOGGLE_ACTIVE_SUB_ELEMENT:
            state.forEach(item => {
                if (item.isNeedToGoByUrl) {
                    item.isActive = false
                }

                item.children.forEach(child => {
                    if (item.name === action.parentName && child.name === action.name) {
                        child.isActive = !child.isActive
                        return;
                    }

                    child.isActive = false
                })

            })
            return [
                ...state
            ]

        default:
            return state
    }
}

export default reducerMenu

export const actionCreatorToggleOpen = (name) => ({ type: TOGGLE_OPEN, name })
export const actionCreatorToggleActiveSubElement = (name, parentName) => ({type: TOGGLE_ACTIVE_SUB_ELEMENT, name, parentName})