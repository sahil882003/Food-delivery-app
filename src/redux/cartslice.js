import { createSlice } from "@reduxjs/toolkit";

const cartslice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        add:(state,action)=>
        {
            const index = state.findIndex((item)=>{
                if(item.id===action.payload.id && item.size===action.payload.size)
                return true;
                return false;
              });
           if(index===-1)
           state.push(action.payload);
           else
           {
            const quantity=parseInt(state[index].quantity);
           state[index].quantity=quantity+parseInt(action.payload.quantity);
           state[index].finalprice+=action.payload.finalprice;
           }
           return state;
        },
        empty:(state,action)=>
        {
           return [];
        },
        remove:(state,action)=>
        {
          const index = state.findIndex((item)=>{
             if(item.id===action.payload.id && item.size===action.payload.size)
             return true;
             return false;
           });
          
           state.splice(index, 1);
           return state
        }
    }

});

const {add,empty,remove}=cartslice.actions;
const cartreducer=cartslice.reducer;

export {add,empty,remove};
export default cartreducer;