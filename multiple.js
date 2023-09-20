const {createStore, combineReducers,applyMiddleware} = require("redux")
const {default:logger} = require("redux-logger")


//initial state...
let product = {
    productName: ["sart","pant"],
    numberOfProduct:2
}

let card = {
    productName : ["sari"],
    numberOfProduct: 1
}


//action function

const addProduct = (val)=>{
    return {
        type:"ADD_P",
        payload:val
    }
}

const addCard = (val)=>{
    return {
        type:"ADD_C",
        payload:val
    }
}

const productReducer = (state=product,action)=>{
    switch(action.type){
        case "ADD_P":
            return {
                product:[...state.productName,action.payload],
                numberOfProduct:state.numberOfProduct + 1
            }
        default :
            return state
    }
}

const cardReducer = (state=card,action)=>{
    switch(action.type){
        case "ADD_C":
            return {
                product:[...state.productName,action.payload],
                numberOfProduct:state.numberOfProduct + 1
            }
        default :
            return state
    }
}


let alstate = combineReducers({
    productReducer,
    cardReducer
})

let store = createStore(alstate,applyMiddleware(logger))



store.subscribe(()=>{
    console.log(store.getState().productReducer)
})


store.dispatch(addProduct("cap"))

