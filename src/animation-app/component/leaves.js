import React, {useEffect} from 'react'
import '../css/leaves.css'

export default function Leaves() {
    
    useEffect(()=>{
        const leave = document.querySelector(".leave");
             leave.animate([
            {transform: "translate(1300px, 0)"},
            {transform: "translate(800px, 12px)"},
            {transform: "translate(300px, 5px)"},
             {transform: "translate(-1700px, 0)"},
         ],{
             duration: 20000,
             iterations: Infinity,
         });
    
        },{})  
    
return (
        // <div className="leaves">
          <img  className="leave" src="https://thumbs.gfycat.com/DeadlyEmbarrassedAsianlion-size_restricted.gif" alt="leaves" />

        // </div>
    )
}
