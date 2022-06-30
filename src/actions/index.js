

export const ADDITEM = (item) => {
    return {
        type: 'ADDITEM',
        payload: item
    }
}

export const DELETEITEM = (item) =>{
    return {
        type: 'DELETEITEM',
        payload: item
    }
}

export const SORT = (item) =>{
    return{
        type: 'SORT',
        payload: item
    }
}

export const CHANGECLICK = (item) => {
    return {
        type: 'CHANGECLICK',
        payload: item
    }
}

export const CHANGEVIEW = (item) =>{
    return {
        type: 'CHANGEVIEW',
        payload: item
    }
}