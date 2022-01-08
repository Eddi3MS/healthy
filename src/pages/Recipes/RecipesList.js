import styled from "styled-components";
import data from "../../data";
import RecipeItem from "./RecipeItem";

const RecipesListSty = styled.div`
  align-items: center;
  width: 100%;
  justify-content: center;

  ul {
    width: 100%;
    margin: 0;
    padding-inline-start: 0;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
`;

const recipes = data[0];

function RecipesList() {
  return (
    <RecipesListSty className="flex">
      <ul>
        {recipes.map((recipe) => (
          <RecipeItem key={recipe.id} recipe={recipe}></RecipeItem>
        ))}
      </ul>
    </RecipesListSty>
  );
}

export default RecipesList;
