import {create} from 'zustand';

interface FavoriteMealsState {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}

export const useFavoriteMealsStore = create<FavoriteMealsState>((set, get) => ({
  ids: [],
  addFavorite: id => {
    set({ids: [...get().ids, id]});
  },
  removeFavorite: id => {
    set({ids: get().ids.filter(i => i !== id)});
  },
}));
