import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from '../Components/Home';
import About from '../Components/About';
import Product from '../Components/Product';
import Productitem from '../Components/ProductItem';
import Navbar from "../Components/Navbar";



function Approuter(){
    
    return(
    
            <Router>
                <Navbar />
                <Switch>
                <Route exact path='/' component={Home} />
                <Route  path='/about' component={About} />
                <Route exact path='/product' component={Product} />
                <Route  path='/productitem/:id' component={Productitem} />
                <Route  path='*' component={()=><h1>404 Not Found</h1>} />
                </Switch>
                
            </Router>

        

    )
}

export default Approuter;