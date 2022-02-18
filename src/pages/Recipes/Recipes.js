import { RecipesSty } from "./Recipes.styled";
import RecipesList from "./RecipesList";

function Recipes() {
  return (
    <RecipesSty className="flex" id="recipes">
      <h2>Our Best Recipes</h2>
      <p>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
      </p>
      <RecipesList />
    </RecipesSty>
  );
}

export default Recipes;
