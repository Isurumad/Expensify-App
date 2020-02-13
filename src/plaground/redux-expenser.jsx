import {createStore, combineReducers} from 'redux';

const expenceReduserDefaultState=[];
const expenceReduser = (state = expenceReduserDefaultState,action)=>{
    switch(action.type){
        default:
            return state;
    }
};

const filtersReducerDefaultState = {
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
}
const filtersReducer = (state = filtersReducerDefaultState,action) =>{
    switch(action.type){
        default:
            return state;
    }
};

const store = createStore(
    combineReducers({
        expenses:expenceReduser,
        filters:filtersReducer
    })
)

console.log(store);

const demoState ={
    expenses:[{
        id:'poijasdfhwer',
        description:'January Rent',
        note:'This was the final payment for that address',
        amount:54500,
        createdAt:0,
    }],
    filters:{
        text:'rent',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
};

console.log(demoState)