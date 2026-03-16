import { createSlice } from "@reduxjs/toolkit";

type CounterState = {
  value: number | string;
};

const initialState: CounterState = {
  value: 0
};

const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      if (state.value === "") state.value = 0;
      state.value = (state.value as number) + 1;
    },

    decrement: (state) => {
      if (state.value === "") state.value = 0;
      state.value = (state.value as number) - 1;
    },

    resets: (state) => {
      state.value = 0;
    },

    cleared: (state) => {
      state.value = "";
    }
  }
});

export const { increment, decrement, resets, cleared } = CounterSlice.actions;
export default CounterSlice.reducer;