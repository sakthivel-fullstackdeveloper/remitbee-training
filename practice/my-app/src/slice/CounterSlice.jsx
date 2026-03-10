import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0
  },

  reducers: {
    increment: (state) => {
      if(state==='') state.value=0;
      state.value += 1;
    },

    decrement: (state) => {
      if(state==='') state.value=0;
      state.value -= 1;
    },
     resets: (state) => {
      state.value = 0;
    },
     cleared: (state) => {
      state.value = '';
    }
  }
});

export const { increment, decrement ,resets,cleared} = CounterSlice.actions;
export default CounterSlice.reducer;