import React, { useEffect, useState } from 'react';
import { addToDb, getDb } from '../../localstore/Local';
import Meal from '../../meal/Meal';
import Order from '../../Order/Order';
import './FoodBody.css'

const FoodBody = () => {
    const [foods,setFoods]=useState([]);
    const [cart,setCurt]=useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
        .then(res=>res.json())
        .then(data=>setFoods(data.meals))
    },[])
    useEffect(()=>{
        if(foods.length){
            console.log('click')
            const saveDb=getDb();
           const saveorder=[];
           for(const mealId in saveDb){
            const meal=foods.find(ml=>ml.idMeal ===mealId);
            saveorder.push(meal)
           }
           setCurt(saveorder);
        }
    },[foods])
   
    const handlers=food=>{
        const newAdd=[...cart,food];
        // console.log(newAdd)
        setCurt(newAdd);
        addToDb(food.idMeal)
    }
    return (
        <div className="bodyOfMeal pt-5">
           
           <div className="row container row-cols-lg-4 ">
           {
                foods.map(food=> <Meal
                    key={food.idMeal}
                    handlers={handlers}
                    food={food}>

                    </Meal>)
            }
           </div>

           <div>
           <Order cart={cart}></Order>
           </div>
            
        </div>
    );
};

export default FoodBody;