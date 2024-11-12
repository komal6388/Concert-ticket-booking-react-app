import React, { useState } from "react";
import "../App.css"
export default function Navbar() {
  
  const [first, setfirst] = useState("0")
let togfun = ()=>{
  let a = document.querySelector(".ul22")
 if(first==="0"){
 
  
  a.classList.add("me")
 setfirst("1")
 }
 else{
  a.classList.remove("me")
  setfirst("0")
 }
}
  return (
    
      <nav className='nav1'>
        <div>
        <span className='sp1'>BOOK</span><span className='sp2'>my</span><span className='sp3'>TICKET</span>
        </div>
      
       <div className='mainul11'>
        <ul id='ul1' className="ul22 " >  
            <li><img className='movie' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPDxJEU6yQHLbRRpg02IlIVf2D_B1118ppHw&s" alt="" />Movies</li>
            <li> <img className='movie' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT52Nh3YK1dPUnnw3pw9X_SH3Y_nKkQAvd7EQ&s" alt="" />Stream</li>
            <li><img className='movie' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkLbgbz_jq2yp32Ks4IhFGRSM6Wf5vcRm5hg&s" alt="" />Events</li>
            <li><img className='movie' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWMo7RbIOK8OugkdyltAFY2lqlBRBc2Ftx9g&s" alt="" />Plays</li>
            <li><img className='movie' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEJd3Q-wWBRMZKvLVA9x-UESlnaFRZHD9BZg&s" alt="" />Sports</li>
            <li><img className='movie' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYChI3jrYw4Fa-LwSSfo1OGyWU64g-7ER5Og&s" alt="" />Activity</li>
        </ul>

        <img className='icon' src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="" />
        <img className='menu'onClick={togfun} src="https://img.icons8.com/?size=64&id=OTxpMqWbm71F&format=png" alt="" />
       </div>
      </nav>
   
  )
}
