
export const incrementCount = () => {
    console.log(".. inside actions > incrementCount");
    return {
        type: 'INCREMENT'
    }
}

export const calculateSum = (value1, value2) => {
    console.log(".. inside actions > calculateSum");
    return {
        type: 'CALCULATE_SUM',
        payload: {value1, value2}
    }
}