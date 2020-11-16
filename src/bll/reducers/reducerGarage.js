import svgBox from "../../assets/images/box.svg"

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
            name: "Acura ILX",
            brand: "Acura",
            model: "ILX",
            yearOfIssue: "2012",
            modification: "4.8 PDK (440 л.с.)",
            mileage: "1000",
            licensePlate: "123456789",
            typeCode: "VIN",
            code: "4T1BF1FK8DU003231",
            orders: []
        },
        {
            id: 1,
            name: "",
            brand: "TOYOTA",
            model: "LAND CRUISER PRADO (_J15_)",
            yearOfIssue: "2016",
            modification: "4.8 PDK (440 л.с.)",
            mileage: "1000",
            licensePlate: "123456789",
            typeCode: "VIN",
            code: "4T1BF1FK8DU603231",
            orders: [
                {
                    id: 0,
                    img: svgBox,
                    name: "Название",
                    status: "Пришло на распределительный склад",
                },
                {
                    id: 1,
                    img: svgBox,
                    name: "Название",
                    status: "Пришло на распределительный склад",
                },
                {
                    id: 2,
                    img: svgBox,
                    name: "Название",
                    status: "Пришло на распределительный склад",
                },
                {
                    id: 3,
                    img: svgBox,
                    name: "Название",
                    status: "Пришло на распределительный склад",
                },
                {
                    id: 4,
                    img: svgBox,
                    name: "Название",
                    status: "Пришло на распределительный склад",
                },
                {
                    id: 5,
                    img: svgBox,
                    name: "Название",
                    status: "Пришло на распределительный склад",
                }
            ]
        }
    ]
}

const TOGGLE_ADD_CAR_WINDOW = "TOGGLE_ADD_CAR_WINDOW"
const ADD_CAR = "ADD_CAR"
const CHANGE_DATA_CAR = "CHANGE_DATA_CAR"

const reducerGarage = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_DATA_CAR:
            const index = state.cars.findIndex(car => car.id === action.car.id)

            state.cars[index] = {...state.cars[index], ...action.car}

            return {
                ...state,
                cars: [
                    ...state.cars
                ]
            }

        case ADD_CAR: 
            action.car.orders = []
            
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

const actionCreatorChangeDataCar = (car) => ({type: CHANGE_DATA_CAR, car})

export const thunkCreatorSaveChangesCar = ({id, name, brand, model, yearOfIssue, 
    modification, mileage, licensePlate, typeCode, code}) => async (dispatch) => {

    const data = {id, name, brand, model, yearOfIssue, 
        modification, mileage, licensePlate, typeCode, code}

    dispatch(actionCreatorChangeDataCar(data))
}