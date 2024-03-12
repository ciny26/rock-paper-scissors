const initialState = {
    Poption : "",
    Coption : ""
}; // Initial state

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "Player 1":
            return {...state , Poption : action.payload}; // Update state with the payload value
        case "Computer":
            return {...state , Coption : action.payload}; // Update state with the payload value
        default:
            return state;
    }
};

export default Reducer;
