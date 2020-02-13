import uuid from 'uuid'

const addExpense = ({description='',note='',amount=0,createAt=0}={})=>({
    type:'ADD_EXPENCE',
    expence:{
      id:uuid(),
      description,
      note,
      amount,
      createAt
    }
  });

  const editExpense =((id,updates)=>({
    type:'EDIT_EXPENCE',
    id,
    updates
  }));
  

  const removeExpense = ({id}={})=>({
    type:'REMOVE_EXPENCE',
    id
  });
  
  export {addExpense,editExpense,removeExpense}