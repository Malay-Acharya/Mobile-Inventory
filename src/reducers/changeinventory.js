const initialState = [{
    "id":"1",
    "name":"I KALL Z8 Smartphone",
    "price":"4699",
    "units":"10",
    "os":"Android",
    "ram":"3GB",
    "weight":"270g",
    "image":"https://m.media-amazon.com/images/I/518bx9V6pvL._SY679_.jpg",
    "vis":1,
},{
    "id":"2",
    "name":"Redmi 9 Activ",
    "price":"9499",
    "units":"10",
    "os":"Android",
    "ram":"4GB",
    "weight":"221g",
    "image":"https://images-eu.ssl-images-amazon.com/images/I/416SpYgTVYL._SX300_SY300_QL70_FMwebp_.jpg",
    "vis":1,
},{
    "id":"3",
    "name":"Jio Phone Next",
    "price":"4799",
    "units":"10",
    "os":"Android",
    "ram":"2GB",
    "weight":"219g",
    "image":"https://m.media-amazon.com/images/I/51DVmhEpd5L._SX679_.jpg",
    "vis":1,
},{
    "id":"4",
    "name":"realme narzo 50i",
    "price":"8999",
    "units":"10",
    "os":"Android",
    "ram":"4GB",
    "weight":"221g",
    "image":"https://m.media-amazon.com/images/I/71s10yDrWbL._SX679_.jpg",
    "vis":1,
}];


const changeinventory = (state = initialState, action) => {
    Object.assign(state, state)
    switch (action.type) {
        case "ADDITEM":
            var i = state.length;
            action.payload["id"] = i+1;
            action.payload["vis"] = 1;
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
        case "FILTERUNDER":
            var val = action.payload.item;
            if(action.payload.check){
                
                for(j=0;j<state.length;j++){
                    if(parseInt(state[j].price) > val)
                    state[j].vis = 0;
                }
            }else{
                for(j=0;j<state.length;j++){
                    if(parseInt(state[j].price) > val)
                    state[j].vis = 1;
                }
            }
            return [...state];
            case "FILTEROVER":
                val = action.payload.item;
                if(action.payload.check){
                    
                    for(j=0;j<state.length;j++){
                        if(parseInt(state[j].price) < val)
                        state[j].vis = 0;
                    }
                }else{
                    for(j=0;j<state.length;j++){
                        if(parseInt(state[j].price) < val)
                        state[j].vis = 1;
                    }
                }
            return [...state]
        default: 
            return state;
    }
}

export default changeinventory;