import React from 'react';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Post from '../pages/Post'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function Body(){
    return(
        <div>
            <Switch>
                <Route path='/Home'> <Home /> </Route>
                <Route path='/Contact'> <Contact /> </Route>
                <Route path='/About'> <About /> </Route>
                <Route path='/post/:slug'> <Post/> </Route>
            </Switch>
        </div>
    )
}
export default Body