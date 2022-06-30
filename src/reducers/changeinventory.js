const initialState = [{
    "id":"1",
    "name":"SAMSUNG GALAXY M12",
    "price":"10,499",
    "units":"",
    "os":"Android",
    "ram":"4GB",
    "weight":"221g",
    "image":"https://m.media-amazon.com/images/I/717eAvRa5dL._SL1500_.jpg",
}];

const changeinventory = (state = initialState, action) => {
    Object.assign(state, state)
    switch (action.type) {
        case "ADDITEM":
            var i = state.length;
            action.payload["id"] = i+1;
            state.push(action.payload);
            return [...state];
        default: 
            return state;
    }
}

export default changeinventory;