import { useEffect, useState } from 'react'
import CardInfo from './components/CardInfo'
import './App.css'
const API_KEY = import.meta.env.VITE_SPOONACULAR_KEY

const App = () => {
  const [recipeList, setRecipeList] = useState(null);

  useEffect(() => {
    const fetchRecipeList = async () => {
      let query = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=10`;
      const response = await fetch(query);
      const json = await response.json();

      console.log(json);
      setRecipeList(json);
    }

    fetchRecipeList().catch(console.error);
  }, []) // this will probably change i just wanted to render it on first load

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
          bazinga
        </div>
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
