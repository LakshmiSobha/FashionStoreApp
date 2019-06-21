import React from 'react';
import FashionService from './app.womenfashionservice';

export class FashionViewDetails extends React.Component{

    constructor(props){
        super(props);
        this.state={dress:[]};
    }

    componentDidMount(){
        let dressId =this.props.match.params.DressID;
        FashionService.get(dressId, dress => this.setState({dress}));
    }

    render(){
       const ThisDress = this.state.dress;
       return (
        <div className="container">
            <div className="row content">
                <div className="col-sm-3 dispImg">
                    <img className="img-responsive" src={`/images/WomenFashion/${ThisDress.Image}`} alt={ThisDress.Image} />   
                </div>
                <div className="col-sm-9 dispData">
                    <h3>{ThisDress.Name}</h3>
                    <ul>
                        <li><b>Material:</b>{ThisDress.Material}</li>
                        <li><b>Color:</b>{ThisDress.Color}</li>
                        <li><b>Description:</b>{ThisDress.Description}</li>
                        <li><b>Company:</b>{ThisDress.Company}</li>
                        <li><b>Size:</b>{ThisDress.Size}</li>
                        <li><b>Price:</b>{ThisDress.Price}</li>
                        <li><b>Availability:</b> {ThisDress.Availability}</li>
                    </ul>
                    <br />
                    <br />
                    <br />
                    <br />
                    <button className="dispButton">Add to Cart</button>
                    <button className="dispButton">Update</button>
                    <button className="dispButton">Delete</button>
                    <button className="dispButton" onClick={() => this.props.history.goBack()}>Back</button>
                </div>      
            </div>
        </div>

       )
    }
}

