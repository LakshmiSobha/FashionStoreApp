import React from 'react';
import {BrowserRouter  as Router, Route, Link, Switch} from 'react-router-dom';

import MenFashionService from './app.menfashionservice';

const DressRow = ({dress}) => <div>
            <div className="card">
                <Link to= {`/menclothing/${dress.DressID}`}>
                    <img className="img-responsive" src={`/images/MenFashion/${dress.Image}`} alt={dress.Image} /></Link>
                <h4>{dress.DisplayName}</h4>
                <p className="price">{dress.Price} </p>
                <p><button>Add to Cart</button> 
                   <button>
                       <span id="deletebutton" className="glyphicon glyphicon-remove-sign"></span>
                    </button></p>
            </div></div>

export class MenFashion extends React.Component{
    constructor(props){
        super(props);
        this.state={dresses:[]};
    }

    componentDidMount(){
        MenFashionService.getAll(dresses => this.setState({dresses}));
    }

    render(){
        let arows=this.state.dresses.map(b => <DressRow dress={b} key={b.DressID} />);

        return <div>
                    <div id="CreateNew" className="row">
                        <div className="col-sm-4">
                            <p>Categories/MenFashion</p>              
                        </div>  
                        <div className="col-sm-4">        
                            <Link to="/createnew">Create New Item</Link>
                        </div>
                        <div className="col-sm-4" >
                            <select>
                                <option value="price">Price</option>
                                <option value="name">Name</option>
                            </select>               
                        </div>        
                    </div>
                    <hr/>
                    <br />
                    <div className="fashion-grid-container">
                        {arows}
                    </div>
                </div> 
    }
}

