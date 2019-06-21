import React from 'react';
import WomenFashionService from './app.womenfashionservice';

export class WomenFashionCreateNew extends React.Component {
    constructor() {
        super()
        this.state = {  dress:  {
            DisplayName: '',
            Name: '',
            Material: '',
            Color: '',
            Description: '',
            Company: '',
            Image: '',
            Size: '',
            Price: '',
            Availability: ''
            }
        }

       this.onSubmit = this.onSubmit.bind(this)
    }

    textChanged(ev){
        this.state.dress[ev.target.id]=ev.target.value;
        this.forceUpdate();
    }
    onSubmit (e) {
        e.preventDefault();
        WomenFashionService.create(this.state.dress, b => this.props.history.goBack());
    }

    render(){
        return (
                 <div className="container">
                     <h2 className="h2createnew">Fill in the details to add a new catalog item to Women's Fashion</h2>
                     <br />
                     <form className="form-horizontal" noValidate onSubmit={this.onSubmit}>
                         <div className="form-group createnewform">
                             <label className="control-label col-sm-3"htmlFor="DisplayName">Display Name:</label>
                             <div className="col-sm-9">
                                 <input type="text" className="form-control" id="DisplayName" placeholder="DisplayName" name="DisplayName" 
                                      value={this.state.dress.DisplayName} onChange={ev => this.textChanged(ev)}/>
                             </div>
                         </div>
                         <div className="form-group createnewform">
                             <label className="control-label col-sm-3"htmlFor="Name">Name:</label>
                             <div className="col-sm-9">
                                 <input type="text" className="form-control" id="Name" placeholder="Name" name="Name" 
                                      value={this.state.dress.Name} onChange={ev => this.textChanged(ev)}/>
                             </div>
                         </div>
                         <div className="form-group createnewform">
                             <label className="control-label col-sm-3"htmlFor="Material">Material:</label>
                             <div className="col-sm-9">
                                 <input type="text" className="form-control" id="Material" placeholder="Material" name="Material" 
                                      value={this.state.dress.Material} onChange={ev => this.textChanged(ev)}/>
                             </div>
                         </div>
                         <div className="form-group createnewform">
                             <label className="control-label col-sm-3"htmlFor="Color">Color:</label>
                             <div className="col-sm-9">
                                 <input type="text" className="form-control" id="Color" placeholder="Color" name="Color" 
                                      value={this.state.dress.Color} onChange={ev => this.textChanged(ev)}/>
                             </div>
                         </div>
                         <div className="form-group createnewform">
                             <label className="control-label col-sm-3"htmlFor="Description">Description:</label>
                             <div className="col-sm-9">
                                 <textarea  rows="5" className="form-control" id="Description" placeholder="Description" name="Description" 
                                      value={this.state.dress.Description} onChange={ev => this.textChanged(ev)}></textarea>
                             </div>
                         </div>
                         <div className="form-group createnewform">
                             <label className="control-label col-sm-3"htmlFor="Company">Company:</label>
                             <div className="col-sm-9">
                                 <input type="text" className="form-control" id="Company" placeholder="Company" name="Company" 
                                      value={this.state.dress.Company} onChange={ev => this.textChanged(ev)}/>
                             </div>
                         </div>
                         <div className="form-group createnewform">
                             <label className="control-label col-sm-3"htmlFor="Image">Image:</label>
                             <div className="col-sm-9">
                                 <input type="text" className="form-control" id="Image" placeholder="Image" name="Image" 
                                      value={this.state.dress.Image} onChange={ev => this.textChanged(ev)}/>
                             </div>
                         </div>
 
                         <div className="form-group createnewform">
                             <label className="control-label col-sm-3"htmlFor=" "> </label>
                             <div className="col-sm-9">
                                 <p>Upload the image to "<b>/wwwroot/images/WomenFashion</b>" folder</p>
                             </div>
                         </div>
 
                         <div className="form-group createnewform">
                             <label className="control-label col-sm-3"htmlFor="Size">Size:</label>
                             <div className="col-sm-9">
                                 <input type="text" className="form-control" id="Size" placeholder="Size" name="Size" 
                                      value={this.state.dress.Size} onChange={ev => this.textChanged(ev)}/>
                             </div>
                         </div>
                         <div className="form-group createnewform">
                             <label className="control-label col-sm-3"htmlFor="Price">Price: </label>
                             <div className="col-sm-9">
                                 <input type="number" className="form-control" id="Price" placeholder="0.00" name="Price" 
                                      value={this.state.dress.Price} onChange={ev => this.textChanged(ev)}/>
                             </div>
                         </div>
                         <div className="form-group createnewform">
                             <label className="control-label col-sm-3"htmlFor="Availability">Available Units: </label>
                             <div className="col-sm-9">
                                <input type="number" className="form-control" id="Availability" placeholder="1" name="Availability" 
                                        value={this.state.dress.Availability} onChange={ev => this.textChanged(ev)}/>
                             </div>
                         </div>
 
                         <div className="form-group">        
                             <div className="col-sm-offset-3 col-sm-9">
                                 <button type="submit" className="btn btn-primary">Submit</button>
                                 <span>    </span>
                                 <button className="btn btn-primary" onClick={() => this.props.history.goBack()}>Back</button>
                             </div>
                         </div>
                     </form>
                 </div>              
             )
     }
 }

