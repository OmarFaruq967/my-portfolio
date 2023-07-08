import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './Navigation';
import "./App.css";

function App() {
 

  return (
    <>
     <Router>
      <Navigation />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router> 
    </>
  );
}

export default App;
