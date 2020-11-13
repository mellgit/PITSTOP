const initialState = {
    fullName: {
        name: "ФИО",
        value: ""
    },
    city: {
        name: "Город",
        value: ""
    },
    office: {
        name: "Офис",
        value: ""
    },
    phone: {
        name: "Номер телефона",
        value: ""
    },
    email: {
        name: "Email",
        value: ""
    },
    discount: {
        name: "Скидка",
        value: ""
    },
    idProfile: {
        name: "Индивидуальный номер профиля",
        value: ""
    }
}

const reducerPersonalData = (state=initialState, action) => {
    switch (action.type) {    
        default:
            return state;
    }
}

export default reducerPersonalData;