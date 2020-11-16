import { connect } from "react-redux";
import { actionCreatorChangeActiveCar, actionCreatorChangeMaxPrice, actionCreatorChangeMinPrice, actionCreatorFilterByName, actionCreatorFilterByPrice, actionCreatorSortByDiscount, actionCreatorSortByPrice, thunkCreatotAddedProductToBasket } from "../../../../bll/reducers/reducerCatalog";
import { selector } from "../../../../bll/selector";
import Catalog from "./Catalog";

const mapStateToProps = (state) => ({
    listCars: selector.catalog.getListCars(state),
    listProducts: selector.catalog.getListProducts(state),
    isSortByDiscount: selector.catalog.isSortByDiscount(state),
    isSortByPrice: selector.catalog.isSortByPrice(state),
    // minPrice: selector.catalog.getMinPrice(state),
    // maxPrice: selector.catalog.getMaxPrice(state)
})

const mapDispatchToProps = (dispatch) => ({
    changeActiveCar(id, isActive) {
        dispatch(actionCreatorChangeActiveCar(id, isActive))
    },

    sortByPrice() {
        dispatch(actionCreatorSortByPrice())
    },

    sortByDiscount() {
        dispatch(actionCreatorSortByDiscount())
    },

    // changeMinPrice(minPrice) {
    //     dispatch(actionCreatorChangeMinPrice(minPrice))
    // },

    // changeMaxPrice(maxPrice) {
    //     dispatch(actionCreatorChangeMaxPrice(maxPrice))
    // }

    filterByPrice(minPrice, maxPrice) {
        dispatch(actionCreatorFilterByPrice(minPrice, maxPrice))
    },

    filterByName(name) {
        dispatch(actionCreatorFilterByName(name))
    },

    addedProductToBasket({id, img, name, price, priceWithoutDiscount}) {
        dispatch(thunkCreatotAddedProductToBasket({id, img, name, price, priceWithoutDiscount}))
    }
})

export default connect(mapStateToProps, mapDispatchToProps) (Catalog)