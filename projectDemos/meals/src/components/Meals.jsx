import axios from "axios"
import {useState, useEffect} from "react"


function Meals(){
    const [items,setItems] = useState([]);
    useState(()=>{
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then((res)=>{
            setItems(res.data.meals)
        })
        .catch((err) => {
            console.log(err);
        })
      
    })
    const itemsList = items.map(({strMeal,strMealThumb,idMeal})=>{
        // console.log(strMeal)
        return(
            <section key={Math.floor(Math.random() * 1000000000)} className="card">
                <img src={strMealThumb} alt="" />
                <section className="content">
                    <p>{strMeal}</p>
                    <p>#{idMeal}</p>
                </section>
            </section>
        )
    })
    return(
        <div className="items-container">
            {itemsList}
        </div>
    )
}

export default Meals;