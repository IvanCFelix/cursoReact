import React from 'react'
import Excercise from '../../Pages/Excercise'
import ExcerciseNew from '../../Pages/ExcerciseNew'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NotFound from '../../Pages/NotFound'
const App= () =>{
   return (
       <BrowserRouter>
       <Switch>
       <Route exact path="/excercise" component={Excercise}/>
       <Route exact path="/excercise/new" component={ExcerciseNew}/>
       <Route component={NotFound}/>
       </Switch>
       
       </BrowserRouter>
   )
}

export default App;