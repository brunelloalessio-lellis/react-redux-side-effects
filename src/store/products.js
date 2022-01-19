import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    productList: [
      {
        id: 1,
        title: "Test Product",
        price: 6,
        description: "This is a first product - amazing!",
      },{
        id: 2,
        title: "Test Product 2",
        price: 16,
        description: "This is a second product - amazing!",
      },
    ],
  },
  reducers: {},
});

export const productsActions = productsSlice.actions;
export default productsSlice.reducer;
