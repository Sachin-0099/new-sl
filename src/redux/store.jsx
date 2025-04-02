import { configureStore } from "@reduxjs/toolkit";
import productReducer from './slices/productSlices.jsx' // Make sure this path is correct

const store = configureStore({
  reducer: {
    products: productReducer, // Your slice reducer
  },
});

export default store;
