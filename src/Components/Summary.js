import React from 'react'

export default function Summary(props) {
  return (
    <div className='summary'>
    <div className="mainsum">
        <p className='formhead'>Booking Summary</p>
        <div className='date2'>
            <p  className='inp01'>Concert Date And Time:</p>
            <p className='inp0' >{props.data.place}</p>
        </div>
        <div className='date2'>
            <p  className='inp01'>Ticket price:</p>
            <p className='inp0' >{ props.data.price==="80"?`80$ (general)`:"150$ (VIP)"}</p>
        </div>
        <div className='date2'>
            <p className='inp01'>Ticket Quantity:</p>
            <p className='inp0' >{props.data.qun}</p>
        </div>
        <div className='date2'>
            <p  className='inp01'>Total Price:</p>
            <p className='inp0' >{props.data.price*props.data.qun}</p>
        </div>
        <div className='date1'>
           <button className='edit' onClick={props.edit} >Edit Booking</button><br />
           <button className='edit' onClick={props.con} >Confirm</button>
        </div>
    </div>
    </div>
  )
}
