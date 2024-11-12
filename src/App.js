import React, {  useState } from "react";
import './App.css';
import Bookingform from './Components/Bookingform';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Summary from "./Components/Summary";


function App() {
const [data, setdata] = useState({place:"",
  qun:"",
  price:""
})
const [first, setfirst] = useState(true)
const [second, setsecond] = useState(false)
const [third, setthird] = useState(false)
 
  let homefun =()=>{
    setfirst(false)
    setsecond(true)
  }
 let datafun = ()=>{
//  setdata(a[0])
  setsecond(false)
 setthird(true)
  
 }
 let edit = ()=>{
  setsecond(true)
  setthird(false)
 }
 let confirm = ()=>{
  setdata({place:"",
    qun:"",
    price:""
  })
  alert("Ticket Booked Successfully")
  setthird(false)
  setfirst(true)
 }
 let cross =()=>{
  setdata({place:"",
    qun:"",
    price:""
  })
  setsecond(false)
  setfirst(true)
 }
  return (
    <div className="App">
      <Navbar/>
     {first &&  <Slider home = {homefun} />}
     {second && <Bookingform data={data} fun={datafun} setdata={setdata} cross={cross} />}
     {third && <Summary data={data} edit={edit} con={confirm} />}
    </div>
  );
}

export default App;

