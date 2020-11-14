const initialState = {
    isOpenAddCarWindow: false,

    get typeCodeVIN() {
        return "VIN"
    },

    get typeCodeFrame() {
        return "frame"
    },

    cars: [
        {
            id: 0,
            name: "Название машины",
            brand: "Марка",
            model: "Модель 123",
            yearOfIssue: "1234",
            modification: "4.8 PDK (440 л.с.)",
            mileage: "123456789",
            licensePlate: "123456789",
            typeCode: "VIN",
            code: "123456789",
            orders: []
        }
    ]
}

const TOGGLE_ADD_CAR_WINDOW = "TOGGLE_ADD_CAR_WINDOW"
const ADD_CAR = "ADD_CAR"

const reducerGarage = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CAR: 
            return {
                ...state,
                cars: [
                    ...state.cars,
                    action.car
                ]
            }

        case TOGGLE_ADD_CAR_WINDOW:
            return {
                ...state,
                isOpenAddCarWindow: action.isOpen
            }
        default:
            return state
    }
}

export default reducerGarage

export const actionCreatorToggleAddCarWindow = (isOpen) => ({ type: TOGGLE_ADD_CAR_WINDOW, isOpen })

export const actionCreatorAddCar = ({name, brand, model, yearOfIssue, 
    modification, mileage, licensePlate, typeCode, code}) => (
        {
            type: ADD_CAR,
            car: {
                name, brand, model, yearOfIssue, modification,
                mileage, licensePlate, typeCode, code
            }
        }
    )