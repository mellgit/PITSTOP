import { connect } from "react-redux"
import { selector } from "../../../../../../bll/selector"
import BasketClassContainer from "./BasketClassContainer"
import { actionCreatorToggleIsSelectedAll, thunkCreatorBuyProducts } from "../../../../../../bll/reducers/reducerBasket"

const mapStateToProps = (state) => ({
    basket: selector.profile.getBasket(state),
    total: selector.profile.getTotal(state),
    totalWithoutDiscount: selector.profile.getTotalWithotDiscount(state),
    count: selector.profile.getCount(state),
    isSelectedAll: selector.profile.getIsSelectedAll(state)
})

const mapDispatchToProps = (dispatch) => ({
    toggleIsSelected(isSelectedAll) {
        dispatch(actionCreatorToggleIsSelectedAll(isSelectedAll))
    },

    buyProducts(arrId) {
        dispatch(thunkCreatorBuyProducts(arrId))
    }
})

export default connect(mapStateToProps, mapDispatchToProps) (BasketClassContainer)