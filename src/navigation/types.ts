import {IMealsCategoriesScreenProps} from '../types/Category';
import {IMealsDetailsScreenProps} from '../types/Meal';

export enum StackScreenName {
  MEALS_OVERVIEW = 'Meals Overview',
  MEALS_DETAILS = 'Meals Details',
}

export enum DrawerScreenName {
  DRAWER = 'Categories',
  MEALS_CATEGORIES = 'Meals Categories',
  FAVORITES = 'Favorites',
}

export type ScreenNameStackParamList = {
  [StackScreenName.MEALS_OVERVIEW]: IMealsCategoriesScreenProps;
  [StackScreenName.MEALS_DETAILS]: IMealsDetailsScreenProps;
};

export type ScreenNameDrawerParamList = {
  [DrawerScreenName.MEALS_CATEGORIES]: undefined;
  [DrawerScreenName.DRAWER]: undefined;
  [DrawerScreenName.FAVORITES]: undefined;
};
