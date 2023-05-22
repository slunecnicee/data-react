import {FaTrashAlt}from "react-icons/fa";

const CocktailArticle = ({ cocktail, handleClick }) => {
    return (
      <article className="cocktail-container" key={cocktail.idDrink}>
        <h2>{cocktail.strDrink}</h2>
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        <div className="instr">
          <h3>Instructions</h3>
          <p>{cocktail.strInstructions}</p>
        </div>
        <FaTrashAlt onClick={() => handleClick(cocktail.idDrink)} role="button" tabIndex="0" />
      </article>
    );
  };


  export default CocktailArticle;