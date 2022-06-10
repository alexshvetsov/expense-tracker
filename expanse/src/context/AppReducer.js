export default (state,action)=>{

    switch(action.type){
        case 'DELETE_TRANSACTION':
            const newTransaction=state.transactions.
            filter(transaction=>transaction.id!==action.payload)
            console.log(newTransaction);
           return  {...state,transactions:newTransaction}
       case 'ADD_TRANSACTION':
           return{...state ,  transactions:[action.payload,...state.transactions]}
           default:
            return state;
        }
}