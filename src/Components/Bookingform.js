import React, { useState } from "react";
import "../App.css";
export default function Bookingform(props) {
  const [place, setplace] = useState(props.data.place);
  const [qun, setqun] = useState(props.data.qun);
  const [price, setprice] = useState(props.data.price);
  let placefun = (ele) => {
    
    setplace(ele.target.value);
  };
  let pricefun = (ele)=>{
    setprice(ele.target.value)
  }
  let qunfun = (ele)=>{
    setqun(ele.target.value)
  }
  
    let final = ()=>{
      if(place===""||qun===""||price===""||place==="select"||price==="select"){
      alert("kindly fill each section")
      return
    }
    if(qun <=0){
      alert("you can not take negative value of quantity")
      return
    }
        let obj = {
            price:price,
            place:place,
            qun:qun
      }
     props.setdata(obj)
      props.fun()
    }
 
  return (
    <div className="form1">
      <img onClick={props.cross}
        className="cross"
        src="https://img.icons8.com/?size=50&id=9433&format=png"
        alt=""
      />
      <div className="mainform">
        <p className="formhead">Concert Booking Form</p>
        <div className="spacediv">
          <p className="date">Concert date and menu</p>
          <select value={place} className="selectvenu" onChange={placefun} >
            <option >Select</option>
            
            <option>October 15,2024-London</option>
            <option>November 10,2024-NewYork</option>
            <option>December 5,2024-Sydney</option>
          </select>
        </div>
        <div className="spacediv">
          <p className="date">Select ticket type</p>
          <select value={price} onChange={pricefun} className="selectvenu">
            <option >Select</option>
            <option value="80">General (80$)</option>
            <option value="150">VIP (150$)</option>
          </select>
        </div>
        <div className="spacediv">
          <p className="date">Ticket quantity</p>
          <input
            className="selectvenu"
            type="number"
            value={qun}
            placeholder="Enter Ticket Quantity"
            onChange={qunfun}
          />
        </div>
        <div className="btndiv">
          <button onClick={final} className="confirm">Confirm Booking</button>
        </div>
      </div>
    </div>
  );
}
