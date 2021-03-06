import React from 'react'
import { Route } from 'react-router-dom'
import HorizontalMenu from '../../../../assets/components/HorizontalMenu/HorizontalMenu'
import { path } from '../../../../path'
import Garage from '../Garage/GarageConatainer'
import style from "./Profile.module.css"
import Basket from './profileComponents/Basket/BasketContainer'
import PersonalData from './profileComponents/PersonalData/PersonalDataContainer'

const Profile = (props) => {
    return (
        <div className={style.clients}>
            <HorizontalMenu 
                data={props.menu} 
                setUpHorizontalMenu={props.setUpHorizontalMenu}
            />

            <Route path={path.PROFILE_PERSONAL_DATA} render={() => <PersonalData/>}/>
            <Route path={path.PROFILE_GARAGE} render={() => <Garage/>}/>
            <Route path={path.PROFILE_BASKET} render={() => <Basket/>}/>
            <Route path={path.PROFILE_ORDERS} render={() => <></>}/>
        </div>
    )
}

export default Profile