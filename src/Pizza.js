import Prop from "./Prop";
import {pizzaData} from './data'
import './css/style.css'
console.log(pizzaData)
export default function Pizza (){
  const dataShow = pizzaData.map(el => <Prop iamge={el.photoName} name={el.name} ingredients={el.ingredients} 
    price={el.price} soldOut={el.soldOut}/>)
  
  return (<div className="datasHow">
  {dataShow}
  </div>)
}