import React from 'react'
import style from './Product.module.css'
import svgDelete from '../../../../../../../assets/images/deleteRed.svg'
import svgCheckboxActive from '../../../../../../../assets/images/checkboxActive.svg'
import svgCheckboxNoActive from '../../../../../../../assets/images/checkboxNoActiveWhite.svg'
import { thunkCreatorDeleteProduct, actionCreatorToggleIsSelectedProduct, actionCreatorChangeCountProduct } from '../../../../../../../bll/reducers/reducerBasket'
import { connect } from 'react-redux'

const Product = (props) => {
    const toggleIsSelectedProduct = () => {
        props.toggleIsSelectedProduct(props.product.id, !props.product.isSelected)
    }

    const deleteProduct = () => {
        props.deleteProduct(props.product.id)
    }

    const addOneUnitProduct = () => {
        props.changeCount(props.product.id, props.product.count + 1)
    }

    const deletOneUnitProduct = () => {
        props.changeCount(props.product.id, props.product.count - 1)
    }

    return (
        <div className={style.product}>
            <div className={style.image}>
                <img src={props.product.img} />
            </div>

            <div className={style.name}>
                <p>{props.product.name}</p>
            </div>

            <div className={style.count}>
                <p
                    onClick={deletOneUnitProduct} 
                    className={style.minus}
                >-</p>

                <p>{props.product.count}</p>

                <p
                    onClick={addOneUnitProduct} 
                    className={style.plus}
                >+</p>
            </div>

            <div className={style.price}>
                <p>{props.product.price} ₽</p>
                <p className={style.priceWithotDiscount}>{props.product.priceWithotDiscount} ₽</p>
            </div>

            <div className={style.icons}>
                <img 
                    onClick={deleteProduct}
                    src={svgDelete}
                />
                <img 
                    onClick={toggleIsSelectedProduct} 
                    src={props.product.isSelected ?svgCheckboxActive :svgCheckboxNoActive}
                />
            </div>

        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    toggleIsSelectedProduct(id, isSelected) {
        dispatch(actionCreatorToggleIsSelectedProduct(id, isSelected))
    },

    deleteProduct(id) {
        dispatch(thunkCreatorDeleteProduct(id))
    },

    changeCount(id, newCount) {
        dispatch(actionCreatorChangeCountProduct(id, newCount))
    }
})

export default connect(() => ({}), mapDispatchToProps) (Product)