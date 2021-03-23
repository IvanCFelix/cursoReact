import React from 'react';
import ReactDOM from 'react-dom';

let user = {
  name: null,
  age: "22"
}

function getData(user) {
  return `Hello my name is ${user.name} and my age is ${user.age}`
}


function renderData() {
  if (user.name) {
    return <h1>{getData(user)}</h1>
  } else {
    return <h1>Hola soy un desconocido</h1>
  }
}

let item = <div>
  {renderData()}
</div>

let container = document.getElementById('root')
ReactDOM.render(item, container);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
