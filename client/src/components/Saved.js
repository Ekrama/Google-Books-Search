import React, {Component} from  'react';
import {Link} from 'react-router-dom';
import API from "../utils/API";


class Saved extends Component {
    render(){
        return(
        <div>
           <Link  to = "/"> Search
            </Link>
            <Link  to = "/saved"> Saved
            </Link>
            <h1>
              Savedpage  
            </h1>
        </div>);
    }
}

export default Saved;
