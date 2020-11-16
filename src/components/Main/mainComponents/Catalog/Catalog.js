import React, { useState } from 'react'
import style from './Catalog.module.css'
import InputSearch from './InputSearch/InputSearch'
import ItemListProducts from './ItemListProducts/ItemListProducts'
import { scroll_bar } from '../../../../App.module.css'

const Catalog = (props) => {
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(0)

    const createHandler = (func) => (e) => {
        return func(e.target.value) 
    }

    const [searchValue, setSearchValue] = useState("")

    const filterByName = (name) => {
        setSearchValue(name)
        props.filterByName(name)
    }

    return (
        <div className={`${style.catalog} ${scroll_bar}`}>
            <div className={style.top_search}>
                <InputSearch 
                    style={{ width: "100%" }} 
                    value={searchValue}
                    onChange={createHandler(filterByName)}
                />

                <div className={style.sort}>
                    <span>Сортировать по:</span>
                    <span 
                        onClick={props.isSortByPrice ?() => {} :props.sortByPrice}
                        className={props.isSortByPrice ?style.active_sort :null}
                    >Цене</span>
                    <span
                        onClick={props.isSortByDiscount ?() => {} :props.sortByDiscount}
                        className={props.isSortByDiscount ?style.active_sort :null}
                    >Скидке</span>
                </div>

            </div>

            <div className={style.menu}>
                <div className={style.cars}>
                    <p className={style.menu_title}>Гараж</p>

                    <div className={style.list_cars}>
                        {
                            props.listCars.map(car => (
                                <p
                                    key={car.id}
                                    className={`${style.item_list_cars} ${car.isActive ? style.active_list_cars : ""}`}
                                    onClick={() => props.changeActiveCar(car.id, !car.isActive)}
                                >{car.name}</p>
                            ))
                        }
                    </div>
                </div>


                <div className={style.filter}>
                    <p className={style.menu_title}>Цена</p>

                    <div className={style.filter_price}>
                        <p>Минимальня цена:</p>
                        <input 
                            type="number"
                            onChange={createHandler(setMinPrice)}
                            value={minPrice}
                         />
                    </div>

                    <div className={style.filter_price}>
                        <p>Максимальная цена:</p>
                        <input 
                            type="number" 
                            onChange={createHandler(setMaxPrice)}
                            value={maxPrice} />
                    </div>

                    <button
                        className={style.useFilter}
                        onClick={() => { props.filterByPrice(minPrice, maxPrice) }}
                    >Применить</button>
                </div>
            </div>


            {
                props.listProducts.map(product => {
                    const handler = () => {
                        props.addedProductToBasket(product)
                    }

                    return <ItemListProducts onClick={handler} key={product.id} {...product} />
                })
            }
        </div>
    )
}

export default Catalog