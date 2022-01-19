const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    visible: false,
    items: [],
  },
  reducers: {
    toggleCart(state) {
      state.visible = !state.visible;
    },
    addItem(state, action) {
      let itemFinder = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (itemFinder) {
        itemFinder.quantity++;
        itemFinder.total += itemFinder.price;
      } else {
        let newItem = action.payload;

        newItem.id = newItem.id;
        newItem.quantity = 1;
        newItem.total = newItem.price;

        state.items.push(newItem);
      }
    },
    removeItem(state, action) {
      let itemFinder = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (itemFinder) {
        if (itemFinder.quantity > 1) {
          itemFinder.quantity--;
          itemFinder.total -= itemFinder.price;
        } else {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
