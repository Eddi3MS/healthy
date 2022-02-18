import { RecipeItemSty } from "./RecipeItem.styled";

function RecipeItem({ recipe }) {
  return (
    <RecipeItemSty className="flex">
      <img src={recipe.image} alt={recipe.title} />
      <div className="flex container__recipe">
        <h3>{recipe.title}</h3>
        <button className="mulish__font">See Recipe</button>
      </div>
    </RecipeItemSty>
  );
}

export default RecipeItem;
