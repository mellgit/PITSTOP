import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { actionCreatorChangeIsActiveByPath } from '../../../bll/reducers/reducerMenu'
import { path } from '../../../path'
import style from './NothingHere.module.css'

const NothingHere = (props) => {
    return (
        <div className={style.nothing_here} style={props.style}>
            <p>Тут пока ничего нет :)</p>
            <Link to={path.CATALOG} onClick={() => { props.changePath(path.CATALOG) }}>перейти в каталог</Link>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    changePath(path) {
        dispatch(actionCreatorChangeIsActiveByPath(path))
    }
})

export default connect(() => ({}), mapDispatchToProps) (NothingHere)