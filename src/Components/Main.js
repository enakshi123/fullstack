import React from 'react';
import Home from './HomeComponent';
// import './style/home.css';
import { Redirect, Switch, Route } from 'react-router-dom';
import Filter1 from './Filter1Component';
import Filter2 from './Filter2Component';
import Filter3 from './Filter3Component';
import Filter4 from './Filter4Component';
import '../css/main.css';

function Main() {
  return (
    <div >
        <Home />
        
        <Switch>
          <Route exact path = "/" render={()=>(<div className = "container">List of  Products</div>)} />    
          <Route exact path = "/filter1" render={()=>( <Filter1 /> )} />
          <Route exact path = "/filter2" render={()=>( <Filter2 /> )} />
          <Route exact path = "/filter3" render={()=>(< Filter3 /> )} />
          <Route exact path = "/filter4" render={()=>(<Filter4 />)} />
          <Redirect to = "/" />
        </Switch>
    </div>
  );
}

export default Main;