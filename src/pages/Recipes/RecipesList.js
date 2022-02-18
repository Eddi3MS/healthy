import data from "../../data";
import RecipeItem from "./RecipeItem";
import { RecipesListSty } from "./RecipesList.styled";

const recipes = data[0];

function RecipesList() {
  return (
    <RecipesListSty className="flex">
      <ul className="flex">
        {recipes.map((recipe) => (
          <RecipeItem key={recipe.id} recipe={recipe}></RecipeItem>
        ))}
      </ul>
    </RecipesListSty>
  );
}

export default RecipesList;
