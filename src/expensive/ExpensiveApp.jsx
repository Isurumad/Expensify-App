import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilter from './ExpenseListFilters'
class ExpensiveApp extends React.Component{
    render(){
        return(
            <div>
                <ExpenseListFilter/>
                <ExpenseList/>
            </div>
        );

    }
}

export default ExpensiveApp;