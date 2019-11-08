import React from 'react';
import './App.css';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'

import {ImperialHomeContainer} from './features/common/components/Home/ImperialHomeContainer'

const App = ()=>{

      return (

          <Switch>
          <Route path="/" component={ImperialHomeContainer}/>
          <Redirect to="/"/>
          </Switch>

      )

}
export default withRouter(App)