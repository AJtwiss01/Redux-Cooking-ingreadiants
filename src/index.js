import "./styles.css";
import store from "./store";
import { addRecipe } from "./actions/recipes";
import { addIngredient } from "./actions/ingredients";

document.getElementById("app").innerHTML = `
<h1>Basic Example of Redux</h1>
<h2> Counter in Vanilla JS </h2>
<div>
  Counter:
  <span id='counter'></span>
</div>

<button id='inc'>Increment</button>
<button id='dec'>Decrement</button>

`;

store.dispatch(addRecipe("Pancakes"));
store.dispatch(addIngredient("Pancakes", "Egg", 3));

console.log(store.getState());
