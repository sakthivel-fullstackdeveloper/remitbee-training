import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../slice/CounterSlice";
import ItemReducer from "../slice/ItemsSlice";

const Store = configureStore({
  reducer: {
   counter:CounterReducer,
   items:ItemReducer
  },
  devTools:true,
});

export default Store;