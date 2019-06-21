import React from 'react';

import {Header} from './header';
import { Navigation } from './navigation';

export class MainPage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
       return <div >
            <Header />
            <Navigation />
            <br/>
            <footer className="container-fluid text-center" >
                <p><b>Queries: call at 000-098766655 or email to fashionstore@xyz.com</b></p>  
            </footer>
        </div>       
    }
}

