import React from 'react';
import {BrowserRouter  as Router, Route, Link, Switch} from 'react-router-dom';

import { Carousel } from './carousel';
import { WomenFashion } from './app.womenfashion';
import { MenFashion } from './app.menfashion';
import { KidsFashion } from './app.kidsfashion';

export class Home extends React.Component{
    render(){
        return <Router><div>
                   <Carousel />
                   <br />
                   <nav>
                        <div className="flex-container">
                            <div className="grid-item">
                            <Link to="/womenclothing" ><img className="img-responsive" src="/images/Car1.jpeg" alt="Women's Fashion" /></Link>
                            <div className="desc">Women's Fashion</div> </div>

                            <div className="grid-item">
                            <Link to="/menclothing" ><img className="img-responsive" src="/images/img2.jpeg" alt="Men's Fashion" /></Link>
                            <div className="desc">Men's Fashion</div> </div>

                            <div className="grid-item">
                            <Link to="/kidsclothing" ><img className="img-responsive" src="/images/img3.jpeg" alt="Kid's Fashion" /></Link>
                            <div className="desc">Kid's Fashion</div> </div>
                        </div>
                    </nav>
                    <main>
                        <Switch>
                            <Route path="/womenclothing" component={WomenFashion} />
                            <Route path="/menclothing" component={MenFashion} />
                            <Route path="/kidsclothing" component={KidsFashion} />
                        </Switch>
                    </main>

            </div></Router>
    }
}


