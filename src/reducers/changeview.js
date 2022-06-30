const initialState = false

const changeview = (state = initialState, action) => {
    Object.assign(state, state)
    switch (action.type) {
        case "CHANGEVIEW":
            state = !state;
            return state
        default: 
            return state;
    }
}

export default changeview;