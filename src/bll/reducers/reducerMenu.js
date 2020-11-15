import { path } from "../../path"

import svgProfile from "../../assets/images/menu/profile.svg"
import svgProfileHover from "../../assets/images/menu/profileHover.svg"

import svgCatalog from '../../assets/images/menu/catalog.svg'
import svgCatalogHover from '../../assets/images/menu/catalogHover.svg'

const initialState = [
    {
        id: 0,
        name: "Профиль",
        icon: svgProfile,
        iconHover: svgProfileHover,
        isNeedToGoByUrl: true,
        isExact: false,
        url: path.PROFILE,
        isActive: false,
        children: []
    },
    {
        id: 1,
        name: "Каталог",
        icon: svgCatalog,
        iconHover: svgCatalogHover,
        isNeedToGoByUrl: true,
        isExact: false,
        url: path.CATALOG,
        isActive: false,
        children: []
    }
]

const TOGGLE_OPEN = "TOGGLE_OPEN"
const TOGGLE_ACTIVE_SUB_ELEMENT = "TOGGLE_ACTIVE_SUB_ELEMENT"
const CHANGE_IS_ACTICVE_BY_PATH = "CHANGE_IS_ACTICVE_BY_PATH"

const reducerMenu = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_IS_ACTICVE_BY_PATH:
            state.forEach(item => {
                item.isActive = item.isNeedToGoByUrl && ((item.isExact && item.url === action.path) || 
                    (!item.isExact && String(action.path).includes(item.url)));

                item.children.forEach(subItem => {
                    subItem.isActive = (subItem.isExact && subItem.url === action.path) || 
                        (!subItem.isExact && String(action.path).includes(subItem.url));

                    item.isActive = item.isActive || subItem.isActive;
                })
            })

            return [...state]

        case TOGGLE_OPEN:
            const isNeedToGoByUrl = state.find((item) => item.id === action.id).isNeedToGoByUrl

            state.forEach(item => {
                if (item.id === action.id) {
                    item.isActive = isNeedToGoByUrl ?true :!item.isActive
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
                    if (item.id === action.parentId && child.id === action.id) {
                        child.isActive = true
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

export const actionCreatorToggleOpen = (id) => ({ type: TOGGLE_OPEN, id })
export const actionCreatorToggleActiveSubElement = (id, parentId) => ({type: TOGGLE_ACTIVE_SUB_ELEMENT, id, parentId})
export const actionCreatorChangeIsActiveByPath = (path) => ({type: CHANGE_IS_ACTICVE_BY_PATH, path})