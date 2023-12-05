import {createContext, useState} from 'react';

interface FavoritesContextValue {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}

export const FavoritesContext = createContext<FavoritesContextValue>({
  ids: [],
  addFavorite: (id: string) => {},
  removeFavorite: (id: string) => {},
});

interface FavoritesContextProviderProps {
  children: React.ReactNode;
}

export const FavoritesContextProvider = ({
  children,
}: FavoritesContextProviderProps) => {
  const [ids, setIds] = useState<FavoritesContextValue['ids']>([]);

  const addFavorite = (id: string) => {
    setIds(prevState => [...prevState, id]);
  };

  const removeFavorite = (id: string) => {
    setIds(prevState => prevState.filter(favoriteId => favoriteId !== id));
  };

  const contextValue: FavoritesContextValue = {
    ids,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={contextValue}>
      {children}
    </FavoritesContext.Provider>
  );
};
