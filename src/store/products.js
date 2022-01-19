import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    productList: [
      {
        id: "dhwbadhbawhadw",
        title: "Test",
        price: 6,
        description: "This is a first product - amazing!",
      },
    ],
  },
  reducers: {},
});

export const productsActions = productsSlice.actions;
export default productsSlice.reducer;
