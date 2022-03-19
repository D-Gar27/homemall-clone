import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'foodCart',
  initialState: {
    items: [],
    itemsAmount: 0,
    itemsTotal: 0,
  },
  reducers: {
    addToCart: function (state, action) {
      const isThere = state.items.find(
        (item) => item.id === action.payload?.data?.id
      );
      if (!isThere && state.items.length > 0) {
        const amount = action.payload?.data?.amount;
        const price = action.payload?.data?.price;
        state.items.push(action.payload?.data);
        state.itemsAmount += 1;
        state.itemsTotal += Number(price * amount);
      }
      if (!isThere && !state.items.length) {
        const amount = action.payload?.data?.amount;
        const price = action.payload?.data?.price;
        state.items.push(action.payload?.data);
        state.itemsAmount += 1;
        state.itemsTotal += Number(price * amount);
      }
    },
    addAmount: (state, action) => {
      const stateCopy = JSON.parse(JSON.stringify(state));
      const itemIndex = stateCopy.items.findIndex(
        (item) => item.id === action.payload.item.id
      );
      const item = stateCopy.items[itemIndex];
      item.amount += 1;
      state.items[itemIndex] = item;
      state.itemsTotal += Number(action.payload.item.price);
    },
    reduceAmount: (state, action) => {
      const stateCopy = JSON.parse(JSON.stringify(state));
      const itemIndex = stateCopy.items.findIndex(
        (item) => item.id === action.payload.item.id
      );
      const item = stateCopy.items[itemIndex];
      item.amount -= 1;
      state.items[itemIndex] = item;
      state.itemsTotal -= Number(action.payload.item.price);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.itemsAmount -= 1;
      state.itemsTotal -= Number(action.payload.price * action.payload.amount);
    },
  },
});

export const { addToCart, removeFromCart, addAmount, reduceAmount } =
  cartSlice.actions;

export default cartSlice.reducer;
