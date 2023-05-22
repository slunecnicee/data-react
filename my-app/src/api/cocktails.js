export const fetchCoctails = ()=>{
    return fetch ("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    .then ((res)=>res.json())
    .then((data)=>data.drinks);
}


