import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from  './router/AppRouter'
import configureStore from './store/configureStore';
import {addExpense} from './action/expences';
import {setTextFilter} from './action/filters'
import getVisibleExpenses from './selectors/expenses'

const store = configureStore();
store.dispatch(addExpense({description:'Water Bill'}));
store.dispatch(addExpense({description:'Gas Bill'}));

store.dispatch(setTextFilter('water'));
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
console.log(visibleExpenses);

ReactDOM.render(<AppRouter/>,document.getElementById('root'));



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

