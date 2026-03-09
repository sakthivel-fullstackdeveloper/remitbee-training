import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../slice/CounterSlice";
import ItemReducer from "../slice/ItemsReducer";

const Store = configureStore({
  reducer: {
    counter: CounterReducer,
   items:ItemReducer
    
  }
});

export default Store;