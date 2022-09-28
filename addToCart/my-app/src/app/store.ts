import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import ProductSlice from '../features/ProductSlice';
import CartSlice from '../features/CartSlice';
import SearchSlice from '../features/SearchSlice';
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
    cart: persistedReducer,
    search: SearchSlice
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
