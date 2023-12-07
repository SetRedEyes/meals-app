import {combineReducers, configureStore} from '@reduxjs/toolkit';
import favoritesReducer from './favorites';

const rootReducer = combineReducers({
  favoriteMeals: favoritesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

