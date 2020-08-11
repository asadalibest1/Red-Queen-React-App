import React, {useEffect} from 'react';
import '../css/houseAndtrees.css';

export default function HouseAndtrees() {
    
    useEffect(()=>{
        const container = document.querySelector(".container");
             container.animate([
            {transform: "translate(1300px, 0)"},
             {transform: "translate(-1900px, 0)"},
         ],{
             duration: 30000,
             iterations: Infinity,
         });
    
        },{})  
    
return (
        <div className="container">
            <img className="house" src="https://opengameart.org/sites/default/files/2DHousetransparent.png" alt="2d-house" />
            <img  className="tree1" src="https://media1.giphy.com/media/cmxrPGfFpoxhc7qV7P/source.gif" alt="coconut-tree" />
            <img  className="tree2" src="https://www.freepngimg.com/thumb/tree/4-tree-png-image-download-picture.png" alt="tree" />
            <img  className="house2" src="https://opengameart.org/sites/default/files/house_big.png" alt="house" />
            <img className="mountain" src="https://notendur.hi.is/~salvor/myndvinnsla/inkscape/IAN%20Symbol%20Libraries%205.1%20SVG/ian-symbol/ian-symbol-mountains-snowcaps-and-foothills.svg" alt="2d-moutain"/>
            <img  className="tree3" src="https://opengameart.org/sites/default/files/tree_3.png" alt="tree" />

        </div>
    )
}
