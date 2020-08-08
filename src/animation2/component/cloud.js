import React,{useEffect} from 'react'
import '../css/cloud.css';

export default function Cloud() {
    useEffect(()=>{
    const mainCloud = document.querySelector(".mainCloud");
         mainCloud.animate([
        {transform: "translate(1300px, 0)"},
         {transform: "translate(-1000px, 0)"},
     ],{
         duration: 20000,
         iterations: Infinity,
     });

    },{})       
    return (

    <div className="mainCloud">
        <div className="cloud1">
                <img  className="cloudy" src="https://skysmart.com.au/wp-content/uploads/2017/01/air.png" alt="cloudy" />
        </div>
        <div className="cloud2">
            <img  className="cloudy" src="https://skysmart.com.au/wp-content/uploads/2017/01/air.png" alt="cloudy" />
        </div>
        <div className="cloud3">
            <img  className="cloudy" src="https://skysmart.com.au/wp-content/uploads/2017/01/air.png" alt="cloudy" />
        </div>
    </div>
    )
}
