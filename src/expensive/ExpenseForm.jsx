import React from 'react'
import moment from 'moment'
import {SingleDatePicker} from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

class ExpenceForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            description:props.expense?props.expense.description:'',
            note:props.expense?props.expense.note:'',
            amount:props.expense?(props.expense.amount/100).toString():'',
            createAt:props.expense?moment(props.expense.createAt):moment(),
            calanderFocused:false,
            error:''
        }
    }

onDescriptionChange=(e)=>{
        const description = e.target.value;
        this.setState(()=>({
            description
        }))
   }
   onNoteChange = (e)=>{
       const note = e.target.value;
       this.setState(()=>({
           note
       }))
   }

   onAmountChange = (e)=>{
       const amount = e.target.value;
       if(amount.match(/^\d{1,}(\.\d{0,2})?$/)){
           this.setState(()=>({amount}))
       }
   }

onDateChange =(createAt)=>{
    if(createAt){
        this.setState(()=>({createAt}))
    }
};

onFocuseChange=({focused})=>{
    this.setState(()=>({calanderFocused:focused}))
}

onSubmit=(e)=>{
    e.preventDefault();
    if(!this.state.description || !this.state.amount){
        this.setState(()=>({error:'Please provide description and amount.'}));
    }else{
        this.setState(()=>({error:''}))
        this.props.onSubmit({
            description:this.state.description,
            amount:parseFloat(this.state.amount,10)*100,
            createAt:this.state.createAt.valueOf(),
            note:this.state.note
        })
    }
}
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder='Description' autoFocus value={this.state.description} onChange={this.onDescriptionChange} />
                    <input type="text" value={this.state.amount} onChange={this.onAmountChange} placeholder='Amount'/><br/>
                    <textarea cols="30" rows="10" placeholder='Add note about your expense' value={this.state.note} onChange={this.onNoteChange}></textarea>
                    <SingleDatePicker
                        date={this.state.createAt}
                        onDateChange={this.onDateChange}
                        focused ={this.state.calanderFocused}
                        onFocusChange={this.onFocuseChange}
                        numberOfMonths={1}
                        isOutsideRange={()=>false}
                    />
                    {/* <input type="date"/> */}
                    <button>Add Expense</button>
                </form>
            </div>
        );
    }
}

export default ExpenceForm;

