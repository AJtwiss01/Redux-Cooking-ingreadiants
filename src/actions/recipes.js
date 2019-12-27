import {
  ADD_RECIPE,
  SET_RECIPES,
  FETCH_RECIPES
} from "../constants/actionTypes";

export const addRecipe = name => ({
  type: ADD_RECIPE,
  name
});

export const setRecipes = recipes => ({
  type: SET_RECIPES,
  recipes
});

export const fetchRecipes = () => ({
  type: FETCH_RECIPES
});
