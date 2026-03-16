import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
const storage = localStorage;

type ItemsState = {
  value: number[];
};

const ItemsSlice = createSlice({
  name: "items",
  initialState: {
    value: storage.getItem("data") != ""
      ? storage.getItem("data")!.split(",").map((v) => Number(v))
      : storage.getItem("data")!.split("")
  } as ItemsState,

  reducers: {
    adder: (state, actions: PayloadAction<number>) => {
      state.value.push(actions.payload);
      storage.setItem("data", state.value as any);
    },

    remover: (state, actions: PayloadAction<number>) => {
      state.value.pop();
      storage.setItem("data", state.value as any);
    },

    clearAll: (state) => {
      state.value = [];
      storage.setItem("data", state.value as any);
    }
  }
});

export const { adder, remover, clearAll } = ItemsSlice.actions;
export default ItemsSlice.reducer;