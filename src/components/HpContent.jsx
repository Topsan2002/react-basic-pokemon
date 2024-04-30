// import React from 'react'

export default function HpContent(props) {
    
  return (
    <div className="w-1/2 bg-fuchsia-50 p-2 border-2 border-emerald-950 p-2">
    <div className="text-3xl text-sky-400 font-bold text-center">{props.name ? props.name.toUpperCase() : "Name"}</div>
    <div className="w-full bg-red-600  rounded-lg mt-3">
        <div className="text-base text-white text-center"> {props.hp}/{props.hp} </div>
    </div>
   
   
 </div>
  )
}
