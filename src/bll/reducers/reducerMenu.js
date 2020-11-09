import main from "../../assets/images/menu/main.svg"
import mainHover from "../../assets/images/menu/mainHover.svg"

import peoples from "../../assets/images/menu/peoples.svg"
import peoplesHover from "../../assets/images/menu/peoplesHover.svg"
import clients from "../../assets/images/menu/clients.svg"
import personal from "../../assets/images/menu/personal.svg"

import product from "../../assets/images/menu/product.svg"
import productHover from "../../assets/images/menu/productHover.svg"
import orders from "../../assets/images/menu/orders.svg"
import consignment from "../../assets/images/menu/consignment.svg"
import purchaseReturns from "../../assets/images/menu/purchaseReturns.svg"
import acceptanceGoods from "../../assets/images/menu/acceptanceGoods.svg"
import directoryGoods from "../../assets/images/menu/productDirectory.svg"
import informationAboutGoods from "../../assets/images/menu/informationAboutGoods.svg"

import bookkeeping from "../../assets/images/menu/bookkeeping.svg"
import bookkeepingHover from "../../assets/images/menu/bookkeepingHover.svg"
import report from "../../assets/images/menu/report.svg"
import costs from "../../assets/images/menu/costs.svg"
import finance from "../../assets/images/menu/finance.svg"
import exportOfPrices from "../../assets/images/menu/exportOfPrices.svg"

import suppliers from "../../assets/images/menu/suppliers.svg"
import suppliersHover from "../../assets/images/menu/suppliersHover.svg"
import suppliersSubElement from "../../assets/images/menu/suppliersSubElement.svg"
import ordersToSuppliers from "../../assets/images/menu/ordersToSuppliers.svg"

import website from "../../assets/images/menu/website.svg"
import websiteHover from "../../assets/images/menu/websiteHover.svg"
import customization from "../../assets/images/menu/customization.svg"
import appearanceAndContent from "../../assets/images/menu/appearanceAndContent.svg"

import rest from "../../assets/images/menu/rest.svg"
import restHover from "../../assets/images/menu/restHover.svg"
import MyCar from "../../assets/images/menu/MyCar.svg"
import carService from "../../assets/images/menu/carService.svg"
import VINRequests from "../../assets/images/menu/VINRequests.svg"
import CRMCalls from "../../assets/images/menu/CRMCalls.svg"
import movement from "../../assets/images/menu/movement.svg"

const initialState = [
    {
        id: 0,
        name: "Главная",
        icon: main,
        iconHover: mainHover,
        isNeedToGoByUrl: true,
        isExact: true,
        url: "/",
        isActive: false,
        children: []
    },
    {
        id: 1,
        name: "Люди",
        icon: peoples,
        iconHover: peoplesHover,
        isNeedToGoByUrl: false,
        url: "",
        isActive: false,
        children: [
            {
                id: -1,
                name: "Клиенты",
                icon: clients,
                url: "/clients",
                isActive: false
            },
            {
                id: -2,
                name: "Персонал",
                icon: personal,
                url: "/personal",
                isActive: false
            }
        ]
    },
    {
        id: 2,
        name: "Товар",
        icon: product,
        iconHover: productHover,
        isNeedToGoByUrl: false,
        url: "",
        isActive: false,
        children: [
            {
                id: -1,
                name: "Заказы",
                icon: orders,
                url: "/orders",
                isActive: false
            },
            {
                id: -2,
                name: "Партии товара",
                icon: consignment,
                url: "/consignment",
                isActive: false
            },
            {
                id: -3,
                name: "Возврат товара",
                icon: purchaseReturns,
                url: "/purchaseReturns",
                isActive: false
            },
            {
                id: -4,
                name: "Приёмка товара",
                icon: acceptanceGoods,
                url: "/acceptanceGoods",
                isActive: false
            },
            {
                id: -5,
                name: "Справочник товаров",
                icon: directoryGoods,
                url: "/directoryGoods",
                isActive: false
            },
            {
                id: -6,
                name: "Информация о товарах",
                icon: informationAboutGoods,
                url: "/informationAboutGoods",
                isActive: false
            }
        ]
    },
    {
        id: 3,
        name: "Бухгалтерия",
        icon: bookkeeping,
        iconHover: bookkeepingHover,
        isNeedToGoByUrl: false,
        url: "",
        isActive: false,
        children: [
            {
                id: -1,
                name: "Отчёт",
                icon: report,
                url: "/report",
                isActive: false
            },
            {
                id: -2,
                name: "Расходы",
                icon: costs,
                url: "/costs",
                isActive: false
            },
            {
                id: -3,
                name: "Финансы",
                icon: finance,
                url: "/finance",
                isActive: false
            },
            {
                id: -4,
                name: "Экспорт прайсов",
                icon: exportOfPrices,
                url: "/exportOfPrices",
                isActive: false
            }
        ]
    },
    {
        id: 4,
        name: "Поставщики",
        icon: suppliers,
        iconHover: suppliersHover,
        isNeedToGoByUrl: false,
        url: "",
        isActive: false,
        children: [
            {
                id: -1,
                name: "Поставщики",
                icon: suppliersSubElement,
                url: "/suppliersSubElement",
                isActive: false
            },
            {
                id: -2,
                name: "Заказы поставщикам",
                icon: ordersToSuppliers,
                url: "/ordersToSuppliers",
                isActive: false
            }
        ]
    },
    {
        id: 5,
        name: "Сайт",
        icon: website,
        iconHover: websiteHover,
        isNeedToGoByUrl: false,
        url: "",
        isActive: false,
        children: [
            {
                id: -1,
                name: "Настройки",
                icon: customization,
                url: "/customization",
                isActive: false
            },
            {
                id: -2,
                name: "Внешний вид и контент",
                icon: appearanceAndContent,
                url: "/appearanceAndContent",
                isActive: false
            }
        ]
    },
    {
        id: 6,
        name: "Остальное",
        icon: rest,
        iconHover: restHover,
        isNeedToGoByUrl: false,
        url: "",
        isActive: false,
        children: [
            {
                id: -1,
                name: "4MyCar",
                icon: MyCar,
                url: "/4MyCar",
                isActive: false
            },
            {
                id: -2,
                name: "Автосервис",
                icon: carService,
                url: "/carService",
                isActive: false
            },
            {
                id: -3,
                name: "VIN-запросы",
                icon: VINRequests,
                url: "/VINRequests",
                isActive: false
            },
            {
                id: -4,
                name: "CRM: звонки",
                icon: CRMCalls,
                url: "/CRMCalls",
                isActive: false
            },
            {
                id: -5,
                name: "Перемещение",
                icon: movement,
                url: "/movement",
                isActive: false
            }
        ]
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