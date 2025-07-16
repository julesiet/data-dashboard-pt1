import { useEffect, useState } from 'react'
import CardInfo from './components/CardInfo'
import './App.css'
const API_KEY = import.meta.env.VITE_SPOONACULAR_KEY

const App = () => {
  const [recipeList, setRecipeList] = useState(null);
  const [amtofRecipes, setAmtOfRecipes] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState(null);

  // fetch macros state variables
  const [count, setCount] = useState(0);
  const [avgProtein, setAvgProtein] = useState(0);
  const [avgCarbs, setAvgCarbs] = useState(0);
  const [avgFat, setAvgFat] = useState(0);

  // placeholder: filter results - if there is something in the search bar, filter accordingly : if not, render the entire list
  const searchMeals = (searchValue) => {
    console.log(searchValue);
    /* setSearchInput(searchValue);
    if (searchValue !== "") { // if the search is NOT empty

    } else {
      setFilteredResults(recipeList);
    } */
  } 

  // API FETCH: returns LIST of recipes (expected: 10) + set the amount of recipes to the amount generated
  useEffect(() => {
    const fetchRecipeList = async () => {
      let query = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=10`;
      const response = await fetch(query);
      const json = await response.json();

      console.log(json.results.length);

      setAmtOfRecipes(json.results.length);
      setRecipeList(json);
    }

    fetchRecipeList().catch(console.error);
  }, []) 

  // API FETCH: returns the macros for a given recipe (protein, carbs, fats) + dynamically sums up the macros of all the recipes in the list
  useEffect(() => {
    const fetchMacros = async () => {
      if (!recipeList || !recipeList.results) return; // if there are no recipes, return nothing

      // temp variables to track the current list of recipes
      let proteinSum = 0;
      let carbsSum = 0;
      let fatSum = 0;
      let localCount = 0;

      for (let recipe of recipeList.results) { // loop through every recipe
        // fetch their macros
        const query = `https://api.spoonacular.com/recipes/${recipe.id}/nutritionWidget.json?apiKey=${API_KEY}`;
        const response = await fetch(query);
        const json = await response.json();

        console.log("Item", recipe.id, ":", json.protein, json.carbs, json.fat); 

        // to sum up each different macro sum
        proteinSum += parseFloat(json.protein.replace("g", ""));
        carbsSum += parseFloat(json.carbs.replace("g", ""));
        fatSum += parseFloat(json.fat.replace("g", ""));
        localCount += 1;
      }

      // only set state once (after the loop)
      setAvgProtein(proteinSum);
      setAvgCarbs(carbsSum);
      setAvgFat(fatSum);
      setCount(localCount);
    };

    fetchMacros().catch(console.error);
  }, [recipeList]);


  return (
    <div className="main-container">

      <div className="nav-panel">
        <h2> Food Forager! 📖 </h2>
        <p> 
          Search, filter and learn about your favorite foods or foods you've never heard of before!
        </p>
        <p className="add-info"> 
          CREDITS: spoonacular API 
          </p>
        <p className="add-info"> 
          DV (daily value) refers to the recommended daily intake based on the average human, will vary depending on your body ** 
          </p>
        </div>

      <div className="main-panel">
        <div className="summary-cntr">
            <div className="protein-cntr">
                {count === amtofRecipes ? (
                    <h2> Average amount of protein: {avgProtein / count}g </h2>
                ): null}
            </div>
            <div className="carbs-cntr">
                {count === amtofRecipes ? (
                    <h2> Average amount of carbs: {avgCarbs / count}g </h2>
                ): null}
            </div>
            <div className="fat-cntr">
                {count === amtofRecipes ? (
                    <h2> Average amount of fat: {avgFat / count}g </h2>
                ): null}
            </div>
        </div>

        <input
            type="text"
            placeholder="FILTER for high/low macro meals!"
            onChange={(inputString) => searchMeals(inputString.target.value)}
            />

        <div className="display-cntr">
          {recipeList && recipeList.results.map((result) => (
            <CardInfo
              key={result.id}
              image={result.image}
              title={result.title}
              id={result.id}
            />
          ))}
        </div>

      </div>

    </div>
  )
}


export default App
