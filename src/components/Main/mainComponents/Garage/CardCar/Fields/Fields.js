import React, { useState } from "react"
import { connect } from "react-redux";
import { selector } from "../../../../../../bll/selector";
import style from './Fields.module.css'
import svgPen from '../../../../../../assets/images/pen.svg'
import svgPenACtive from '../../../../../../assets/images/penActive.svg'
import svgSave from '../../../../../../assets/images/saveDisket.svg'
import { thunkCreatorSaveChangesCar } from "../../../../../../bll/reducers/reducerGarage";

const Fields = (props) => {
    const [isEditMode, toggleEditMode] = useState(false)

    const enableEditMode = () => toggleEditMode(true)
    const disableEditMode = () => toggleEditMode(false)

    const [name, setName] = useState(props.car.name);
    const [brand, setBrand] = useState(props.car.brand);
    const [model, setModel] = useState(props.car.model);
    const [yearOfIssue, setYearOfIssue] = useState(props.car.yearOfIssue);
    const [modification, setModification] = useState(props.car.modification);
    const [mileage, setMileage] = useState(props.car.mileage);
    const [licensePlate, setLicensePlate] = useState(props.car.licensePlate);
    const [typeCode, setTypeCode] = useState(props.car.typeCode);
    const [code, setCode] = useState(props.car.code);

    const createHandler = (setFunc) => (e) => setFunc(e.target.value)

    const save = () => {
        disableEditMode()
        props.saveDataCar({
            id: props.car.id, name, brand, model, yearOfIssue, 
            modification, mileage, licensePlate, typeCode, code
        })
    }

    return (
        <div className={style.fields}>
            <img
                src={!isEditMode ? svgPen : svgPenACtive}
                onClick={!isEditMode ? enableEditMode : () => { }}
                className={`${style.edit_mode} ${isEditMode ?style.active :""}`}
            />

            {
                isEditMode
                    ? <img
                        src={svgSave}
                        onClick={save}
                        className={style.save}
                    />
                    : null
            }

            <div className={style.name}>
                {
                    isEditMode
                        ? <input
                            type="text"
                            placeholder="Название т.с."
                            onChange={createHandler(setName)}
                            value={name}
                        />
                        : <p className={style.value}>{name}</p>
                }
            </div>

            <div className={style.field}>
                <p>Марка</p>
                {
                    isEditMode
                        ? <input
                            type="text"
                            placeholder="Марка"
                            onChange={createHandler(setBrand)}
                            value={brand}
                        />
                        : <p className={style.value}>{brand}</p>
                }
            </div>

            <div className={style.field}>
                <p>Модель</p>
                {
                    isEditMode
                        ? <input
                            type="text"
                            placeholder="Модель"
                            onChange={createHandler(setModel)}
                            value={model}
                        />
                        : <p className={style.value}>{model}</p>
                }
            </div>

            <div className={style.field}>
                <p>Год выпуска</p>
                {
                    isEditMode
                        ? <input
                            type="text"
                            placeholder="Год выпуска"
                            onChange={createHandler(setYearOfIssue)}
                            value={yearOfIssue}
                        />
                        : <p className={style.value}>{yearOfIssue}</p>
                }
            </div>

            <div className={style.field}>
                <p>Модификация</p>
                {
                    isEditMode
                        ? <input
                            type="text"
                            placeholder="Модификация"
                            onChange={createHandler(setModification)}
                            value={modification}
                        />
                        : <p className={style.value}>{modification}</p>
                }
            </div>

            <div className={style.field}>
                <p>Пробег</p>
                {
                    isEditMode
                        ? <input
                            type="text"
                            placeholder="Пробег"
                            onChange={createHandler(setMileage)}
                            value={mileage}
                        />
                        : <p className={style.value}>{mileage}</p>
                }
            </div>

            <div className={style.field}>
                <p>Госномер</p>
                {
                    isEditMode
                        ? <input
                            type="text"
                            placeholder="Госномер"
                            onChange={createHandler(setLicensePlate)}
                            value={licensePlate}
                        />
                        : <p className={style.value}>{licensePlate}</p>
                }
            </div>

            <div className={style.field}>
                <div className={style.code}>
                    <label>
                        <input
                            type="radio"
                            name={props.car.id + "code_vin_or_frame"}
                            value={props.types.VIN}
                            onChange={isEditMode ? createHandler(setTypeCode) : () => { }}
                            checked={typeCode === props.types.VIN}
                            readOnly={!isEditMode}
                        />
                                VIN
                            </label>
                    <label>
                        <input
                            type="radio"
                            name={props.car.id + "code_vin_or_frame"}
                            value={props.types.frame}
                            onChange={isEditMode ? createHandler(setTypeCode) : () => { }}
                            checked={typeCode === props.types.frame}
                            readOnly={!isEditMode}
                        />
                                frame
                            </label>
                </div>
                {
                    isEditMode
                        ? <input
                            type="text"
                            placeholder={typeCode}
                            onChange={createHandler(setCode)}
                            value={code}
                        />
                        : <p className={style.value}>{code}</p>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    types: selector.profile.getTypesCode(state)
})

const mapDispatchToProps = (dispatch) => ({
    saveDataCar(data) {
        dispatch(thunkCreatorSaveChangesCar(data))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Fields)