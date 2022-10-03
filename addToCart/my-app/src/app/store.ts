import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import ProductSlice from '../features/ProductSlice';
import CartSlice from '../features/CartSlice';
import AuthSlice from '../features/AuthSlice';

//import redux persist
import { persistStore, persistReducer } from 'redux-persist'
import localStorage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage: localStorage
}

const persistedReducer = persistReducer(persistConfig, CartSlice);

export const store = configureStore({
  reducer: {
    product: ProductSlice,
    carts: persistedReducer,
    auth: AuthSlice
  },
});

export const persistor = persistStore(store);


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
