export const ADDITEM = (item) => {
    return {
        type: 'ADDITEM',
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