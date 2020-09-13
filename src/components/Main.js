import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Project from './Projects';
import Resume from './Resume';
import {Switch,Route} from 'react-router-dom';

const Main = () =>(
    <Switch>
        <Route exact path ="/" component={Home} />
        <Route path ="/contact" component={Contact} />
        <Route path ="/about" component={About} />
        <Route path ="/login" component={Login} />
        <Route path ="/projects" component={Project} />
        <Route path ="/resume" component={Resume} />




    </Switch>
)
export default Main;