let InitialState = 0;
const CounterVal = (state=InitialState,action)=>{
    switch (action.type) {
        case "Increment":
            return state +action.payload;
    
        case "Decrement":
            return state -action.payload;
        default:
            return state;
    }
}

export default CounterVal;