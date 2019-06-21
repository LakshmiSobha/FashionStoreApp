import React from 'react';
import {BrowserRouter  as Router, Route, Link, Switch} from 'react-router-dom';

import { Home } from './home';
import { AboutUs } from './app.aboutus';
import { WomenFashion } from './app.womenfashion';
import { MenFashion } from './app.menfashion';
import { KidsFashion } from './app.kidsfashion';
import { SignIn } from './app.signin';
import { ShoppingCart } from './app.shoppingcart';
// import { CreateNewItem } from './app.createnewitem';
import { FashionViewDetails } from './app.fashionviewdetails';
import { WomenFashionCreateNew } from './app.womencreatenew';

export class Navigation extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return <Router><div>
            <nav className="navbar">
                <ul className="nav navbar-nav">
                    <li className="active"><Link to="/">Home</Link></li>
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" to="/Categories">Categories <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li><Link to="/womenclothing" >Women Fashion</Link></li>
                            <li><Link to="/menclothing" >Men Fashion</Link></li>
                            <li><Link to="/kidsclothing" >Kids Fashion</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/aboutus">About Us</Link></li>
                </ul>
                <div className="search-container">
                        <form className="navbar-form navbar-left">
                            <input type="text" placeholder="Search.." name="search" />
                            <button type="submit"><i className="fa fa-search"></i></button>
                        </form>
                    </div>

                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/signin" ><span className="glyphicon glyphicon-user"></span> Sign Up / Login / Profile</Link></li>
                    <li><Link to="/shoppingcart" ><span className="glyphicon glyphicon-shopping-cart"></span> Cart    </Link></li>
                </ul>
            </nav>
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />   
                    <Route path="/womenclothing" exact component={WomenFashion} />
                    <Route path="/womenclothing/:DressID" component={FashionViewDetails} />
                    <Route path="/menclothing" exact component={MenFashion} />
                    <Route path="/kidsclothing" exact component={KidsFashion} />
                    <Route path="/aboutus" component={AboutUs} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/shoppingcart" component={ShoppingCart} />
                    <Route path="/createnew" component={WomenFashionCreateNew} />
                </Switch>
            </main>
        </div></Router>
    }
}

