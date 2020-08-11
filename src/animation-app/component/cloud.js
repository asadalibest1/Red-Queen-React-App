import React,{useEffect} from 'react'
import '../css/cloud.css';

export default function Cloud() {
    useEffect(()=>{
    const mainCloud = document.querySelector(".mainCloud");
         mainCloud.animate([
        {transform: "translate(1300px, 0)"},
         {transform: "translate(-1000px, 0)"},
     ],{
         duration: 40000,
         iterations: Infinity,
     });

    },{})       
    return (

    <div className="mainCloud">
        <div className="cloud1">
                <img  className="cloudy" src="https://images.vexels.com/media/users/3/154298/isolated/preview/be023b8d94fad782d8a0805e088eb484-cloud-forecast-illustration-by-vexels.png" alt="cloudy" />
        </div>
        <div className="cloud2">
            <img  className="cloudy" src="https://images.vexels.com/media/users/3/154298/isolated/preview/be023b8d94fad782d8a0805e088eb484-cloud-forecast-illustration-by-vexels.png" alt="cloudy" />
        </div>
        <div className="cloud3">
            <img  className="cloudy" src="https://images.vexels.com/media/users/3/154298/isolated/preview/be023b8d94fad782d8a0805e088eb484-cloud-forecast-illustration-by-vexels.png" alt="cloudy" />
        </div>
    </div>
    )
}
