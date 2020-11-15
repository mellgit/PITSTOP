import React from "react"
import style from "./PersonalData.module.css"

const PersonalData = (props) => {
    return (
        <div>
            <div className={style.personal_data_wrap}>
                <div className={style.personal_data}>
                    {
                        Object.keys(props.personalData).map(key => (
                            <div key={key} className={style.personal_data_item}>
                                <div className={style.personal_data_item_name}>{props.personalData[key].name}</div>
                                <div className={style.personal_data_item_value}>{props.personalData[key].value}</div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default PersonalData