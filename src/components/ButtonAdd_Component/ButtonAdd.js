import React from 'react'
import { Link } from 'react-router-dom';

const  ButtonAdd = () =>{
    return(
        <div className="row m-0 justify-content-center">
        <Link to="/excercise/new">
        <img className="my-3" src= "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/add.png?alt=media&token=fbe1d973-4b4f-42d8-b76e-2c4354f6ed9d"/>

        </Link>
        </div>
    )
}

export default ButtonAdd;