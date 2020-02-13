
import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from  './router/AppRouter'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore';
import {addExpense} from './action/expences';
//import {setTextFilter} from './action/filters'
import getVisibleExpenses from './selectors/expenses'

const store = configureStore();
store.dispatch(addExpense({description:'Water Bill',amount:4500}));
store.dispatch(addExpense({description:'Gas Bill' ,createAt:1000}));
store.dispatch(addExpense({description:'Rent',amount:109500}));


// setTimeout(()=>{
//   store.dispatch(setTextFilter('bill'));
// },3000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);


ReactDOM.render(jsx,document.getElementById('root'));



// store.subscribe(()=>{
//   const state = store.getState();
//   const visibleExpences = getVisibleExpenses(state.expenses,state.filters);
//   console.log(visibleExpenses);
// })

// const expenseOne = store.dispatch(addExpense({description:'Rent',amount:100}));
// const exepenseTwo = store.dispatch(addExpense({description:'Coffee',amount:300}));

// store.dispatch(removeExpense({id:expenseOne.expence.id}));
// store.dispatch(editExpense(exepenseTwo.expense.id,{amount:500}));
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());


// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

// const demoState = {
//   expenses: [{
//     id: 'poijasdfhwer',
//     description: 'January Rent',
//     note: 'This was the final payment for that address',
//     amount: 54500,
//     createdAt: 0
//   }],
//   filters: {
//     text: 'rent',
//     sortBy: 'amount', // date or amount
//     startDate: undefined,
//     endDate: undefined
//   }
// };

