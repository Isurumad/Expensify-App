import {createStore} from 'redux';



const incrementCount =(payload={}) =>{
    return{
        type:'INCREMENT',
        incrementBy:typeof payload.incrementBy === 'number'? payload.incrementBy : 1 
    }
}

//Reducers

const countReduser = (state = {count:0},action)=>{
    if(action.type === 'INCREMENT'){
        const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
        return{
            count:state.count+incrementBy
        }
    }else if(action.type === 'DECREMENT'){
        const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
        return{
            count:state.count-decrementBy
        }
    }else if(action.type === 'RESET'){
        return{
            count:0
        }
    }else{
        return state;
    }
}

const store = createStore(countReduser);

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(
    {
        type:'INCREMENT',
        incrementBy:5
    }
);

store.dispatch(incrementCount({incrementBy:5}));

//unsubscribe();
console.log('afeter');

store.dispatch(
    {
        type:'INCREMENT'
    }
);
store.dispatch(
    {
        type:'INCREMENT'
    }
);


store.dispatch(
    {
        type:'DECREMENT',
        decrementBy:10
    }
);

store.dispatch(
    {
        type:'RESET'
    }
);


