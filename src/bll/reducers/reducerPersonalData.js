const initialState = {
    fullName: {
        name: "ФИО",
        value: "Ларионов Осип Леонидович"
    },
    city: {
        name: "Город",
        value: "Москва"
    },
    office: {
        name: "Офис",
        value: "Тверская ул., 13."
    },
    phone: {
        name: "Номер телефона",
        value: "+7 999 999 99 99"
    },
    email: {
        name: "Email",
        value: "copaa6@gmail.com"
    },
    discount: {
        name: "Скидка",
        value: "-25%"
    },
    idProfile: {
        name: "Индивидуальный номер профиля",
        value: "0123"
    }
}

const reducerPersonalData = (state=initialState, action) => {
    switch (action.type) {    
        default:
            return state;
    }
}

export default reducerPersonalData;