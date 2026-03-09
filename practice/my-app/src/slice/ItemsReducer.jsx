import { createSlice } from "@reduxjs/toolkit"

const ItemsReducer = createSlice({
        name:"items",
        initialState:{value:[]},
        reducers:{
            adder:(state,actions)=>{
                state.value.push(actions.payload);
            },
            remover:(state,actions)=>{
                state.value.pop(actions.payload);
            },
            clearAll:(state)=>{
                state.value=[];
            }
        }
    })
   
export const {adder,remover,clearAll}=ItemsReducer.actions;
export default ItemsReducer.reducer;
