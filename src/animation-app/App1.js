import React from 'react'
import './css/App1.css';
import Alice from './component/alice'
import Cloud from './component/cloud'
import Leaves from './component/leaves'
import HouseAndtrees from './component/houseAndtrees'

export default function App1(){
    return (
        <>
        <div className="wallpaper">
                 <Cloud />
                 <Leaves />
                 <HouseAndtrees />
                 <Alice className="Alice"/>
        </div>
    </>
    )
}