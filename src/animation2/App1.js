import React from 'react'
import './css/App1.css';
import Alice from './component/alice'
import Cloud from './component/cloud'

export default function App1() {
    return (
        <>
        <div className="wallpaper">
                 <Cloud />
                 <Alice className="Alice"/>
        </div>
    </>
    )
}
