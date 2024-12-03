import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../type";

// Define UserInfo type
interface UserInfo {
    id: string;
    name: string;
    email: string;
}

// Define the initial state type
interface InitialState {
    cart: ProductType[];
    favorite: ProductType[];
    userInfo: UserInfo | null;
}

// Define the initial state
const initialState: InitialState = {
    cart: [],
    favorite: [],
    userInfo: null,
};

// Create the slice
export const shofySlice = createSlice({
    name: "shofy",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ProductType>) => {
            const existingProduct = state.cart.find(product => product.id === action.payload.id);
            if (existingProduct) {
                existingProduct.quantity = (existingProduct.quantity || 0) + 1;
            }
            else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        increaseQuantity: (state, action) => {
            const existingProduct = state.cart.find(product => product.id === action.payload)
            if (existingProduct && existingProduct.quantity) {
                existingProduct.quantity += 1;
            }
        },
        decreesQuantity: (state, action) => {
            const existingProduct = state.cart.find(product => product.id === action.payload)
            if (existingProduct && existingProduct.quantity) {
                existingProduct.quantity -= 1;
            }
        },

    // Redux reducer for adding/removing favorites
addToFavorite: (state, action) => {
  const existingProduct = state.favorite.find(product => product.id === action.payload.id);

  // If the product is already in favorites, remove it
  if (existingProduct) {
    state.favorite = state.favorite.filter(product => product.id !== action.payload.id);
  } else {
    // Otherwise, add the product to favorites
    state.favorite.push(action.payload);
  }
},

        removeFromFavorite: (state, action) => {
            state.favorite = state.favorite.filter(product => product.id !== action.payload.id);
        },

    }
});

// Export the actions
export const { addToCart, increaseQuantity, decreesQuantity, addToFavorite, removeFromFavorite } = shofySlice.actions;

// Export the reducer
export default shofySlice.reducer;
