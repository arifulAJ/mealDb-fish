import React from 'react';
import './Meal.css'

const Meal = (props) => {
    // console.log(props.food);
    const {strMeal,strInstructions,strMealThumb}=props.food
    const {handlers,food}=props;
    return (
        <div className="foodCart">
        <div className="image">
            <img src={strMealThumb} alt="" />
        </div>
        <div>
            <h2>{strMeal}</h2>
            <p>{strInstructions.slice(0,110)}</p>
            <button className="btn btn-success" onClick={()=>handlers(food)}>{<i className="fas fa-shopping-cart"></i> } buy now</button>
        </div>
        </div>
    );
};

export default Meal;