// src/redux/productsSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// ✅ Correct usage for type-only import
import type { Product } from '../types/product';


// Async thunk to fetch products with pagination
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({ page, limit }: { page: number; limit: number }) => {
    const skip = (page - 1) * limit;
    const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
    const data = await res.json();
    return data.products as Product[];
  }
);

interface ProductsState {
  products: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  page: number;
  limit: number;
}

const initialState: ProductsState = {
  products: [],
  status: 'idle',
  page: 1,
  limit: 10,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    resetProducts(state) {
      state.products = [];
      state.page = 1;
      state.status = 'idle';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';

        // Only add new products that aren't already in the list
        const newProducts = action.payload.filter(
          (p) => !state.products.some((existing) => existing.id === p.id)
        );

        state.products = [...state.products, ...newProducts];
        state.page += 1;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = 'failed';
      });
  }
});

export const { resetProducts } = productsSlice.actions;

export default productsSlice.reducer;
