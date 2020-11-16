import svgBox from '../../assets/images/box.svg'
import { actioncreatorAddProductToBasket } from './reducerBasket'

const originalListProducts = [
    ...[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(id => ({
        id: id,
        img: svgBox,
        name: "Название " + id,
        price: Math.round(1500 * Math.random()),
        priceWithoutDiscount: Math.round(1600 * Math.random()),
        isAdded: false
    }))
]

const initialState = {
    isSortByPrice: false,

    isSortByDiscount: false,

    // minPrice: 0,
    // maxPrice: 0,

    listCars: [
        {
            id: 0,
            name: "Машина 1",
            isActive: false
        },
        {
            id: 1,
            name: "Машина 2",
            isActive: false
        },
        {
            id: 2,
            name: "Small",
            isActive: false
        }
    ],

    listProducts: [...originalListProducts],

    originalListProducts
}

const CHANGE_ACTIVE_CAR = "CHANGE_ACTIVE_CAR"
const SORT_BY_PRICE = "SORT_BY_PRICE"
const SORT_BY_DISCOUNT = "SORT_BY_DISCOUNT"

// const CHANGE_MIN_PRICE = "CHANGE_MIN_PRICE"
// const CHANGE_MAX_PRICE = "CHANGE_MAX_PRICE"

const FILTER_BY_PRICE = "FILTER_BY_PRICE"

const FILTER_BY_NAME = "FILTER_BY_NAME"

const TOGGLE_PRODUCT_TO_BASKET = "CATALOG_TOGGLE_PRODUCT_TO_BASKET"

const reducerCatalog = (state = initialState, action) => {
    switch (action.type) {
        // case CHANGE_MIN_PRICE: {
        //     return {
        //         ...state,
        //         minPrice: action.minPrice
        //     }
        // }

        // case CHANGE_MAX_PRICE: {
        //     return {
        //         ...state,
        //         maxPrice: action.maxPrice
        //     }
        // }

        case TOGGLE_PRODUCT_TO_BASKET: {
            const originalListProducts = state.originalListProducts.map((product) => {
                if (product.id === action.id) {
                    return {
                        ...product,
                        isAdded: action.isAdded,
                    }
                }

                return product
            })

            return {
                ...state,
                originalListProducts,
                listProducts: [...originalListProducts]
            }
        }

        case FILTER_BY_NAME: {
            let listProducts = state.originalListProducts
                .filter(p => p.name.includes(action.name))

            return {
                ...state,
                listProducts
            }
        }

        case FILTER_BY_PRICE: {
            let listProducts = state.originalListProducts
                .filter(p => p.price >= action.minPrice && p.price <= action.maxPrice)

            return {
                ...state,
                listProducts
            }
        }

        case SORT_BY_DISCOUNT: {
            const originalListProducts = state.originalListProducts.sort((p1, p2) => {
                return (p2.priceWithoutDiscount - p2.price) - (p1.priceWithoutDiscount - p1.price)
            })

            return {
                ...state,
                isSortByDiscount: true,
                isSortByPrice: false,
                listProducts: [...originalListProducts],
                originalListProducts 
            }
        }

        case SORT_BY_PRICE: {
            const originalListProducts = state.originalListProducts.sort((p1, p2) => p1.price - p2.price)

            return {
                ...state,
                isSortByDiscount: false,
                isSortByPrice: true,
                listProducts: [...originalListProducts],
                originalListProducts
            }
        }

        case CHANGE_ACTIVE_CAR: {
            return {
                ...state,
                listCars: state.listCars.map(car => {
                    if (car.id === action.id) {
                        return {
                            ...car,
                            isActive: action.isActive
                        }
                    }

                    return car
                })
            }
        }

        default:
            return state
    }
}

export default reducerCatalog

export const actionCreatorChangeActiveCar = (id, isActive) => ({ type: CHANGE_ACTIVE_CAR, id, isActive })

export const actionCreatorSortByPrice = () => ({ type: SORT_BY_PRICE })

export const actionCreatorSortByDiscount = () => ({ type: SORT_BY_DISCOUNT })

// export const actionCreatorChangeMaxPrice = (maxPrice) => ({ type: CHANGE_MAX_PRICE, maxPrice })

// export const actionCreatorChangeMinPrice = (minPrice) => ({ type: CHANGE_MAX_PRICE, minPrice })

export const actionCreatorFilterByPrice = (minPrice, maxPrice) => ({ type: FILTER_BY_PRICE, minPrice, maxPrice })

export const actionCreatorFilterByName = (name) => ({ type: FILTER_BY_NAME, name })

const actionCreatorToggleProductToBasket = (id, isAdded) => ({ type: TOGGLE_PRODUCT_TO_BASKET, id, isAdded })

export const actionCreatorDeleteProductByBasket = (id) => actionCreatorToggleProductToBasket(id, false)

const actionCreatorAddedProduct = (id) => actionCreatorToggleProductToBasket(id, true)

export const thunkCreatotAddedProductToBasket = ({id, img, name, price, priceWithoutDiscount}) => (dispatch) => {
    dispatch(actionCreatorAddedProduct(id))

    // добавляем в корзину
    dispatch(actioncreatorAddProductToBasket({id, img, name, price, priceWithotDiscount: priceWithoutDiscount}))
}