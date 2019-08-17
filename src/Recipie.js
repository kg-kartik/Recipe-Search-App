import React from "react"
import style from "./Recipie.module.css"

const Recipie = (props) => {
    return (
    <div className = {style.recipie}>
      <h1 className="title"> {props.title }</h1>
      <ol>
        {props.ingredients.map (ingredients => (
          <li> {ingredients.text} </li>
        ))}
      </ol>
      <p className="calories"> Calories : {props.calories}</p>
      <img src= {props.image} className={style.image} alt = {props.label} />
    </div>
)
}

export default Recipie