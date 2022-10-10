import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import ProductSlice from '../features/ProductSlice';

export const store = configureStore({
  reducer: {
    product: ProductSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
