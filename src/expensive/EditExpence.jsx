import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense } from '../action/expences';
import {removeExpense} from '../action/expences'

const EditExpence = (props)=>{
    return(
    <div>
        <ExpenseForm
            expense = {props.expense}
            onSubmit={(expense)=>{
                props.dispatch(editExpense(props.expense.id,expense));
                props.history.push('/');
            }}
        />
        <button onClick={(expense)=>{
            const id = props.expense.id;
            props.dispatch(removeExpense({id}));
            props.history.push('/');
        }}>Remove</button>
    </div>
   )
};

const mapStateToProps = (state,props)=>{
    return{
        expense:state.expenses.find((expense)=>{
            return expense.id === props.match.params.id
        })
    }
};
export default connect(mapStateToProps)(EditExpence);