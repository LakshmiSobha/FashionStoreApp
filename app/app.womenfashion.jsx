import React from 'react';
import { Link} from 'react-router-dom';

import WomenFashionService from './app.womenfashionservice';

const DressRow = ({dress, deleteDress, addFunc}) => <div>
            <div className="card">
                <Link to= {`/womenclothing/${dress.DressID}`}>
                    <img className="img-responsive" src={`/images/WomenFashion/${dress.Image}`} alt={dress.Image} /></Link>
                <h4>{dress.DisplayName}</h4>
                <p className="price">{dress.Price} €</p>
                <p><button onClick={() => addFunc(dress)} >Add to Cart</button> 
                   <button onClick={e => deleteDress(dress.DressID)}>
                       <span id="deletebutton" className="glyphicon glyphicon-remove-sign"></span>
                    </button></p>
            </div></div>

export class WomenFashion extends React.Component{
    constructor(props){
        super(props);
        this.state={dresses:[], cart: []};
        this.deleteDress=this.deleteDress.bind(this);
    }

    componentDidMount(){
        WomenFashionService.getAll(dresses => this.setState({dresses}));
    }

    deleteDress(id){
        WomenFashionService.delete(id, dresses => this.setState({dresses}));
    }

    handleAddFunc(product) {
        product.units = 1;
                
        const existingProductIndex = this.state.cart.findIndex(p => p.DressID === product.DressID);

        if (existingProductIndex >= 0) {
    
            const cartProducts = this.state.cart.slice();
    
            var existingProduct = cartProducts[existingProductIndex];
/*
            var updated existingProduct.units += totalunits,
            console.log("existingProduct.units -- ", existingProduct.units);
            console.log("product.units -- ", product.units);
 */
            existingProduct.TotalPrice += product.Price;
            existingProduct.TotalUnits += product.units;
   /*
            var updatedUnitsProduct = existingProduct;
            updatedUnitsProduct.units = updatedUnitsProduct.units + product.units,
            updatedUnitsProduct.Price = updatedUnitsProduct.Price + product.Price
    */
       //  console.log("existingProduct beforw cartProduct -- ", existingProduct);
  
            cartProducts[existingProductIndex] = existingProduct;
    
            this.setState({
              cart: cartProducts
            });
    
        } else {
            product.TotalPrice = product.Price;
            product.TotalUnits = product.units;
    
          this.setState({
            cart: [...this.state.cart, product]
          });
        }
      }
        
    render(){
        let arows=this.state.dresses.map(b => <DressRow dress={b} key={b.DressID} deleteDress={this.deleteDress} addFunc={this.handleAddFunc.bind(this)}/>);

        return <div>
                    <div id="CreateNew" className="row">
                        <div className="col-sm-4">
                            <p>Categories/WomenFashion</p>              
                        </div>  
                        <div className="col-sm-4">        
                            <Link to="/createnew">Create New Item</Link>
                        </div>
                        <div className="col-sm-4" >
                            <select>
                                <option value="name">Name</option>
                                <option value="price">Price</option>
                            </select>               
                        </div>        
                    </div>
                    <hr/>
                    <br />
                    <ul>
                        {
                            this.state.cart.map(c => <li>{c.Name} - | Units {c.TotalUnits} - | Price - {c.TotalPrice}$</li>)
                        }
                    </ul>


                    <div className="flex-container">
                        {arows}
                    </div>
                </div> 
    }
}

