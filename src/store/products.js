import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    productList: [],
    loadingList: false,
    listLoaded: false,
  },
  reducers: {
    loadList(state, action) {
      state.loadingList = false;
      state.listLoaded = true;
      state.productList = action.payload;
    },
    loadingList(state, action) {
      state.loadingList = true;
      state.listLoaded = false;
    },
  },
});

export const productsActions = productsSlice.actions;
export default productsSlice.reducer;
