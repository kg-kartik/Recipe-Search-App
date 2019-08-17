import React, {useEffect,useState} from "react"
import Recipie from "./Recipie.js"
import "./App.css"

const App = () => {
const APP_ID= "65ee2e45";
const APP_KEY = "4a322c02890437b2cd9cbe9299971963";

const [search,setSearch] = useState('')
const [query,setQuery] = useState('chicken')
const [recipie,setRecipie] = useState([]); 

useEffect(() => 
  {
    getRecipie();
  },[query])

const getRecipie = async() => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipie(data.hits)
    console.log(recipie);
}
const updateSearch = (e) => {
  setSearch(e.target.value);
} // here, we are updating the input to the value entered by the user , but it takes each keystroke

const updateQuery =(e) => {
  e.preventDefault();
  setQuery(search);  
  //here we are taking the whole search query after submitting the form button
  setSearch('')
}
  return(
    <div className="container-form">
    <form className= "form" onSubmit={updateQuery}>
      <input type="text" name ="query" className="searchbox" onChange={updateSearch} />
      <button type="submit" className="submit">  Search </button>
    </form>
    <div className ="recipies">
  {recipie.map(recipies => (
    <Recipie
    key ={recipies.recipe.label}
    title ={recipies.recipe.label}
    calories={recipies.recipe.calories}
    image = {recipies.recipe.image}
    ingredients = {recipies.recipe.ingredients} />
  ))}
    </div>
  </div>
  )   
}
export default App