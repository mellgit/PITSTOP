import React, { useState } from 'react'
import style from './AddCarWindow.module.css'
import svgClose from '../../../../../assets/images/close.svg'
import { actionCreatorAddCar } from '../../../../../bll/reducers/reducerGarage'
import { selector } from '../../../../../bll/selector'
import { connect } from 'react-redux'

const AddCarWindow = (props) => {
    const closeAddCarWindow = (e) => {
        if (e.target === e.currentTarget) {
            props.closeAddCarWindow()
        }
    }

    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [yearOfIssue, setYearOfIssue] = useState("");
    const [modification, setModification] = useState("");
    const [mileage, setMileage] = useState("");
    const [licensePlate, setLicensePlate] = useState("");
    const [typeCode, setTypeCode] = useState(props.types.VIN);
    const [code, setCode] = useState("");

    const createHandler = (setFunc) => (e) => setFunc(e.target.value)

    const submit = () => {    
        props.closeAddCarWindow()

        props.addCar({name, brand, 
            model, yearOfIssue, 
            modification, mileage, 
            licensePlate, typeCode, code
        })
    }

    return (
        <div onClick={closeAddCarWindow} className={style.wrap}>
            <div className={style.add_car_window}>
                <img className={style.close} src={svgClose} onClick={props.closeAddCarWindow} />


                <div className={style.name}>
                    <input 
                        type="text" 
                        placeholder="Название т.с."
                        onChange={createHandler(setName)}
                        value={name}
                    />
                </div>

                <div className={style.fields}>
                    <div className={style.field}>
                        <p>Марка</p>
                        <input 
                            type="text" 
                            placeholder="Марка" 
                            onChange={createHandler(setBrand)}
                            value={brand}
                        />
                    </div>

                    <div className={style.field}>
                        <p>Модель</p>
                        <input 
                            type="text" 
                            placeholder="Модель" 
                            onChange={createHandler(setModel)}
                            value={model}
                        />
                    </div>

                    <div className={style.field}>
                        <p>Год выпуска</p>
                        <input 
                            type="text" 
                            placeholder="Год выпуска"
                            onChange={createHandler(setYearOfIssue)} 
                            value={yearOfIssue}    
                        />
                    </div>

                    <div className={style.field}>
                        <p>Модификация</p>
                        <input 
                            type="text" 
                            placeholder="Модификация" 
                            onChange={createHandler(setModification)}
                            value={modification}
                        />
                    </div>

                    <div className={style.field}>
                        <p>Пробег</p>
                        <input 
                            type="text" 
                            placeholder="Пробег" 
                            onChange={createHandler(setMileage)}
                            value={mileage}
                        />
                    </div>

                    <div className={style.field}>
                        <p>Госномер</p>
                        <input 
                            type="text" 
                            placeholder="Госномер" 
                            onChange={createHandler(setLicensePlate)}
                            value={licensePlate}
                        />
                    </div>

                    <div className={style.field}>
                        <div className={style.code}>
                            <label>
                                <input 
                                    type="radio" 
                                    name="code_vin_or_frame" 
                                    value={props.types.VIN}
                                    onChange={createHandler(setTypeCode)}
                                    checked={typeCode === props.types.VIN}
                                />
                                VIN
                            </label>
                            <label>
                                <input 
                                    type="radio" 
                                    name="code_vin_or_frame" 
                                    value={props.types.frame}
                                    onChange={createHandler(setTypeCode)}
                                    checked={typeCode === props.types.frame}
                                />
                                frame
                            </label>
                        </div>
                        <input 
                            type="text" 
                            placeholder={typeCode}
                            onChange={createHandler(setCode)}
                            value={code}
                        />
                    </div>
                </div>

                <button className={style.save} onClick={submit}>
                    Сохранить
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    types: selector.profile.getTypesCode(state)
})

const mapDispatchToProps = (dispatch) => ({
    addCar({name, brand, model, yearOfIssue, 
        modification, mileage, licensePlate, typeCode, code}) {

            dispatch(actionCreatorAddCar({name, brand, model, yearOfIssue, 
                modification, mileage, licensePlate, typeCode, code}));
    }
})

export default connect(mapStateToProps, mapDispatchToProps) (AddCarWindow)