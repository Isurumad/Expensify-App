import React from 'react'
import {removeExpense} from '../action/expences'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const ExpenseListItem =(props)=>{
    const id = props.expense.id;
    return(
        <div>
            
            <p>Description : {props.expense.description}</p>
            <p>Amount : {props.expense.amount}</p>
            <p>createdAt : {props.expense.createAt}</p>
            <Link to={`/edit/${id}`}>Edit</Link>
            <button onClick={()=>{
                const id = props.expense.id;
                props.dispatch(removeExpense({id}));
            }}>Remove</button>


        </div>
    );
}


export default connect()(ExpenseListItem); 
