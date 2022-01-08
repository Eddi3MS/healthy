import styled from "styled-components";
import RecipesList from "./RecipesList";

const RecipesSty = styled.section`
  flex-direction: column;

  align-items: center;
  justify-content: start;
  margin-block: 50px;

  h2 {
    font-size: 2rem;
  }

  p {
    max-width: 50ch;
    font-size: 1rem;
    color: var(--color-text);
    padding-bottom: 2rem;
    padding-inline: 0.5rem;
    text-align: center;
  }
`;

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
