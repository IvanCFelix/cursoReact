import React from 'react'
import '../Welcome_Component/Welcome.css'

function Welcome(props){
    return (
    <div className="container">
        <div className="Heroe-User-Info">
            <h1>Hello {props.username}! </h1>
            <p>Welcome to Justice League Room</p>
        </div>
    </div>   
    )
}

export default Welcome;