import svgBox from '../../assets/images/box.svg'

import { actionCreatorDeleteProductByBasket } from './reducerCatalog'

const initialState = {
    total: 0,
    totalWithotDiscount: 0,
    count: 0,
    isSelectedAll: false,
    basket: [
        ...[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(id => ({
            // ...[0].map(id => ({
            id: id,
            img: svgBox,
            name: "Название",
            count: 185,
            price: 15185,
            priceWithotDiscount: 16185,
            isSelected: false
        }))
    ]
}

const TOGGLE_IS_SELECTED_ALL = "TOGGLE_IS_SELECTED_ALL"
const TOGGLE_IS_SELECTED_PRODUCT = "TOGGLE_IS_SELECTED_PRODUCT"
const DELETE_PRODUCT = "DELETE_PRODUCT"
const CHANGE_COUNT_PRODUCT = "CHANGE_COUNT_PRODUCT"
const DELETE_ALL_SELECTED = "DELETE_ALL_SELECTED"

const ADD_PRODUCT_TO_BASKET = "ADD_PRODUCT_TO_BASKET"

const reducerBasket = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_BASKET: {
            action.product.isSelected = state.isSelectedAll

            const product = action.product

            let total = state.total
            let totalWithotDiscount = state.totalWithotDiscount
            let count = state.count

            if (action.product.isSelected ) {
                total += product.price * product.count
                totalWithotDiscount += product.priceWithotDiscount * product.count
                count += product.count
            }

            return {
                ...state,
                total,
                totalWithotDiscount,
                count,
                basket: [
                    ...state.basket,
                    action.product
                ]
            }
        }

        case DELETE_ALL_SELECTED: {
            return {
                ...state,
                total: 0,
                totalWithotDiscount: 0,
                count: 0,
                basket: state.isSelectedAll
                    ? []
                    : [
                        ...state.basket.filter((product) => !product.isSelected)
                    ]
            }
        }

        case CHANGE_COUNT_PRODUCT: {
            const product = state.basket.find(product => product.id === action.id)

            let total = state.total
            let totalWithotDiscount = state.totalWithotDiscount
            let count = state.count

            const dif = action.newCount - product.count

            if (product.isSelected) {
                total += product.price * dif
                totalWithotDiscount += product.priceWithotDiscount * dif
                count += dif
            }

            return {
                ...state,
                total,
                totalWithotDiscount,
                count,
                basket: state.basket.map(product => {
                    if (product.id !== action.id) {
                        return product
                    }

                    return {
                        ...product,
                        total,
                        totalWithotDiscount,
                        count,
                        count: action.newCount
                    }
                })
            }
        }

        case DELETE_PRODUCT: {
            const product = state.basket.find(product => product.id === action.id)

            let total = state.total
            let totalWithotDiscount = state.totalWithotDiscount
            let count = state.count

            if (product.isSelected) {
                total -= product.price * product.count
                totalWithotDiscount -= product.priceWithotDiscount * product.count
                count -= product.count
            }

            return {
                ...state,
                total,
                totalWithotDiscount,
                count,
                basket: state.basket.filter(product => product.id !== action.id)
            }
        }

        case TOGGLE_IS_SELECTED_PRODUCT: {
            const index = state.basket.findIndex(product => product.id === action.id)

            state.basket[index] = {
                ...state.basket[index],
                isSelected: action.isSelected
            }

            const total = action.isSelected
                ? state.total + state.basket[index].price * state.basket[index].count
                : state.total - state.basket[index].price * state.basket[index].count

            const totalWithotDiscount = action.isSelected
                ? state.totalWithotDiscount + state.basket[index].priceWithotDiscount * state.basket[index].count
                : state.totalWithotDiscount - state.basket[index].priceWithotDiscount * state.basket[index].count

            const count = action.isSelected
                ? state.count + state.basket[index].count
                : state.count - state.basket[index].count

            return {
                ...state,
                total,
                totalWithotDiscount,
                count,
                basket: [...state.basket]
            }
        }

        case TOGGLE_IS_SELECTED_ALL: {
            let data

            if (action.isSelectedAll) {
                data = state.basket.reduce(({ count, total, totalWithotDiscount }, product) => ({
                    count: count + product.count,
                    total: total + product.price * product.count,
                    totalWithotDiscount: totalWithotDiscount + product.priceWithotDiscount * product.count
                }), {
                    count: 0,
                    total: 0,
                    totalWithotDiscount: 0
                })
            } else {
                data = {
                    count: 0,
                    total: 0,
                    totalWithotDiscount: 0
                }
            }

            return {
                ...state,
                isSelectedAll: action.isSelectedAll,
                ...data,
                basket: [
                    ...state.basket.map(order => ({ ...order, isSelected: action.isSelectedAll }))
                ]
            }
        }
        default:
            return state;
    }
}

export default reducerBasket

export const actionCreatorToggleIsSelectedAll = (isSelectedAll) => ({ type: TOGGLE_IS_SELECTED_ALL, isSelectedAll })

export const actionCreatorToggleIsSelectedProduct = (id, isSelected) => ({
    type: TOGGLE_IS_SELECTED_PRODUCT,
    id,
    isSelected
})

const actionCreatorDeleteProduct = (id) => ({ type: DELETE_PRODUCT, id })

export const thunkCreatorDeleteProduct = (id) => async (dispatch) => {
    dispatch(actionCreatorDeleteProduct(id))
    dispatch(actionCreatorDeleteProductByBasket(id))
}

export const actionCreatorChangeCountProduct = (id, newCount) => ({ type: CHANGE_COUNT_PRODUCT, id, newCount })

const actionCreatorDeleteAllSelected = () => ({ type: DELETE_ALL_SELECTED })

export const thunkCreatorBuyProducts = (arrId) => async (dispatch) => {
    dispatch(actionCreatorDeleteAllSelected())
    arrId.forEach(id => {
        dispatch(actionCreatorDeleteProductByBasket(id)) //из каталога
    })
} 

export const actioncreatorAddProductToBasket = ({id, img, name, price, priceWithotDiscount}) => ({
    type: ADD_PRODUCT_TO_BASKET,
    product: {
        id, 
        img, 
        name, 
        price, 
        priceWithotDiscount,
        count: 1,
        isSelected: false
    }
})