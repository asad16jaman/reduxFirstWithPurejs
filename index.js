
const {createStore} = require("redux")
// initial state....
let initialState = {
    count : 0
}


//Action function....
const increamentAction = ()=>{
    return{
        type:"INCREMENT"
    }
}
const decrementAction = ()=>{
    return{
        type:"DECREMENT"
    }
}
const incrementByUser = (val)=>{
    return {
        type:'USERINCREMENT',
        payload:val
    }
}
const decrementByUser = (val)=>{
    return {
        type:"USERDECREMENT",
        payload:val
    }
}
const resetState = ()=>{
    return {
        type:"RESET"
    }
}

//reducer function.....
const stateReducer = (state=initialState,action)=>{
    switch(action.type){
        case "INCREMENT":
            return {
                count: state.count+1
            }
        case "DECREMENT":
            return {
                count : state.count-1
            }
        case "USERINCREMENT":
            return {
                count : state.count + action.payload
            }
        case "USERDECREMENT":
            return {
                count : state.count - action.payload
            }
        case "RESET":
            return {
                count : 0
            }

        default:
            return state
                
            
    }
}

//creating store for project
let stor = createStore(stateReducer);


//redux subscribe func....
stor.subscribe(()=>{
    console.log(stor.getState())
})

//dispatch or action is called
stor.dispatch(increamentAction())
stor.dispatch(incrementByUser(5))
stor.dispatch(decrementByUser(2))
// stor.dispatch()


