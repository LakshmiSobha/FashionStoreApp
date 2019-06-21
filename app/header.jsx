import React from 'react';

export class Header extends React.Component{
    render(){
        return <div>
                    <div id="headerContainer" className="container" >
                        <div id="headerRow" className="row">
                            <div className="col-sm-4"> <img className="img-responsive" src="/images/logo9.jpg"></img>
                                 </div>
                            <div id="offer" className="col-sm-8">
                                    <br />
                                    <h1 id="offerText"><b><i>20% OFF on every 200$ purchase</i></b></h1>
                            </div>
                        </div>
                    </div>
                </div>
    }
}
