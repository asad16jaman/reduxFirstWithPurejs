const {createStore,applyMiddleware} = require("redux")
const {default : thank} = require("redux-thunk")
const {default:axios} = require("axios")


//initial state
let initialState = {
    post:[],
    isLoad:false,
    isError:null
}

// creation action....
const startRequest = ()=>{
    return {
        type : "START"
    }
}

const successRequest = (val)=>{
    return{
        type:"SUCCESS",
        payload:val
    }
}

const failRequest = (err)=>{
    return{
        type:"FAIL",
        payload:err
    }
}


//Reducer function
const dataReducer = (state=initialState,action)=>{
    switch(action.type){
        case "START":
            return {
                ...state,
                isLoad:true
            }
        case "SUCCESS":
            return {
                post:action.payload,
                isLoad:true,
                isError:null
            }
        case "FAIL":
            return {
                ...state,
                isError:action.payload
            }
    }
}

//creation store...
let store = createStore(dataReducer,applyMiddleware(thank))


store.subscribe(()=>{
    console.log(store.getState())
})

//fetching asynchronous data....
const fetchData = ()=>{
    return (dispatch)=>{
        dispatch(startRequest());
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            let newAr = res.data.filter(ele=>{
                return (ele.id<10)
            })
            dispatch(successRequest(newAr))

           
        })
        .catch(err=>{
            dispatch(failRequest(err.response.status))
        })
    }
}


store.dispatch(fetchData())



