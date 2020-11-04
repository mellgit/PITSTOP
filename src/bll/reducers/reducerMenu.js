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
        isOpen: false,
        children: []
    },
    {
        name: "Люди",
        icon: peoples,
        iconHover: peoples,
        isNeedToGoByUrl: false,
        url: "",
        isOpen: false,
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

const reducerMenu = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_OPEN:
            const el = state.find((item) => item.name === action.name)
            el.isOpen = !el.isOpen
            return [
                ...state
            ]
        default:
            return state
    }
}

export default reducerMenu

export const actionCreatorToggleOpen = (name) => ({type: TOGGLE_OPEN, name})