const initialState = false

const changestate = (state = initialState, action) => {
    Object.assign(state, state)
    switch (action.type) {
        case "CHANGECLICK":
            state = !state;
            return state
        default: 
            return state;
    }
}

export default changestate;