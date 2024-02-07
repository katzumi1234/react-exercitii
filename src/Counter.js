import "./style.css"
import{useState}from "react"


function Counter() {
const[count=0,setCount]= useState()


const increment =()=>setCount(count+1)
const decrement =()=>setCount(count-1)


  return<>
  <div className="container">
    <h1 className="number">{count}</h1>
  </div>

<section className="btns-container">
<button onClick={increment} className="increment">+</button>
<button onClick={decrement} className="increment">-</button>

</section>

  </>
  
};

export default Counter
