const initialState = [{
    "id":"1",
    "name":"SAMSUNG GALAXY M12",
    "price":"10499",
    "units":"10",
    "os":"Android",
    "ram":"4GB",
    "weight":"221g",
    "image":"https://m.media-amazon.com/images/I/717eAvRa5dL._SL1500_.jpg",
},{
    "id":"2",
    "name":"SAMSUNG GALAXY M12",
    "price":"10599",
    "units":"10",
    "os":"Android",
    "ram":"4GB",
    "weight":"221g",
    "image":"https://m.media-amazon.com/images/I/717eAvRa5dL._SL1500_.jpg",
},{
    "id":"3",
    "name":"SAMSUNG GALAXY M12",
    "price":"10699",
    "units":"10",
    "os":"Android",
    "ram":"4GB",
    "weight":"221g",
    "image":"https://m.media-amazon.com/images/I/717eAvRa5dL._SL1500_.jpg",
},{
    "id":"4",
    "name":"SAMSUNG GALAXY M12",
    "price":"10799",
    "units":"10",
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

        case "DELETEITEM":
            var j = state.indexOf(action.payload)
            state.splice(j, 1);
            return [...state];
        case "SORT":
            if(action.payload === "2"){
                state.sort((a,b) => parseInt(a.price) - parseInt(b.price));
            }else if(action.payload === "1"){
                state.sort((a,b) => parseInt(b.price) - parseInt(a.price));
            }else{
                state.sort((a,b) => parseInt(a.id) - parseInt(b.id));
            }
            return [...state];
        default: 
            return state;
    }
}

export default changeinventory;