import React, { useRef, useState } from "react";
import Card from "./Card";


function ForeGround() {
  const ref = useRef(null)
const data=[
    {
     desc:'Here the description will be displayed',
     fileSize:".9mg",
     close:true,
     tag:{isOpen:true,tagTitle:"Download Now .. ",tagcolor:"blue"}
  },
    {
     desc:'Here the description will be displayed',
     fileSize:".9mg",
     close:true,
     tag:{isOpen:true,tagTitle:"Download Now ..  ",tagcolor:"green"}
  },
    {
     desc:'Here the description will be displayed',
     fileSize:".9mg",
     close:true,
     tag:{isOpen:true,tagTitle:"Download Now .. ",tagcolor:"green"}
  },
  ];
  return (
    
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5 ">
     {data.map((item,index)=>(
      <Card data= {item}  reference={ref} />
     ))}
    
    </div>
    
  )
}

export default ForeGround;
