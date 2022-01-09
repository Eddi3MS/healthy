import styled from "styled-components";

const RecipeItemSty = styled.li`
  margin-inline: 1rem;

  justify-content: space-between;

  flex-grow: 1;
  max-width: 580px;
  gap: 1rem;

  img {
    max-width: 45%;
  }

  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  background-color: white;
  border-radius: var(--radius);

  .container__recipe {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding-inline: 1rem;

    h3 {
      font-size: 1.5rem;
      max-width: 13ch;
      line-height: 2.125rem;

      @media (max-width: 470px) {
        font-size: 1.125rem;
        line-height: 1.225rem;
      }
    }

    button {
      background-color: var(--focus-color);
      align-self: start;
      font-family: mulish, sans-serif;
      font-size: 1rem;
      color: white;

      border: 0;
      border-radius: var(--radius);

      padding: 10px 20px;
      cursor: pointer;

      &:hover {
        background-color: var(--focus-color-hover);
      }
    }
  }
`;

function RecipeItem({ recipe }) {
  return (
    <RecipeItemSty className="flex">
      <img src={recipe.image} alt={recipe.title} />
      <div className="flex container__recipe">
        <h3>{recipe.title}</h3>
        <button>See Recipe</button>
      </div>
    </RecipeItemSty>
  );
}

export default RecipeItem;
