const initialState = {
    count: 1,
    sum: ''
}

const myReducer = (state = initialState, action) => {
    console.log("inside reducer");

    switch(action.type) {
        case 'INCREMENT':
            console.log("inside reducer > INCREMENT "+JSON.stringify(action));
            const newState = {...state};
            newState.count += 1;
            return newState;
        case 'CALCULATE_SUM':
            console.log("inside reducer > CALCULATE_SUM "+JSON.stringify(action));
            const newState1 = {...state};
            newState1.sum = action.payload.value1 + action.payload.value2;
            return newState1;
        default:
            return state;
    }
}

export default myReducer;