import store from "./store";
import { fetchRecipes } from "./actions/recipes";

import loadUI from "./ui";

loadUI();

store.dispatch(fetchRecipes());

console.log(store.getState());
