
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENCE':
      return [
        ...state,action.expence
      ];
    
    case 'REMOVE_EXPENCE':
      return state.filter(({id})=>{return id !== action.id});

    case 'EDIT_EXPENCE':
      return state.map((expense)=>{
        if(expense.id === action.id){
            return {
              ...expense,
              ...action.updates
            };
        }else{
          return  expense;
        }
        
      });

    default:
      return state;
  }
};

export default expensesReducer;