import './css/style.css'
export default function Prop(props){
    return (<div className='continer'>
    <img src={props.iamge} alt="" />
    <div className='flex'>
    <h1>{props.name}</h1>
    <p>{props.soldOut ? <i class="fa-solid fa-check"></i> : <i class="fa-solid fa-circle-xmark"></i> }</p>
    </div>
    <h2>{props.ingredients}</h2>
    <p>{props.price}</p>
    </div>)
}