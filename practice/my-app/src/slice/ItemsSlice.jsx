import { createSlice } from "@reduxjs/toolkit"

const storage = localStorage;

const ItemsSlice = createSlice({
        name:"items",
        initialState:{
            value:storage.getItem("data")!=""?
            storage.getItem("data").split(",").map((v)=>Number(v))
            :storage.getItem("data").split("")}
        ,
        reducers:{
            adder:(state,actions)=>{
                state.value.push(actions.payload);
                storage.setItem("data",state.value);
                
            },
            remover:(state,actions)=>{
                state.value.pop(actions.payload);
                storage.setItem("data",state.value);

            },
            clearAll:(state)=>{
                state.value=[];
                storage.setItem("data",state.value);
            }
        }
    })
   
export const {adder,remover,clearAll}=ItemsSlice.actions;
export default ItemsSlice.reducer;
