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

            // comment 1
            // view the book/ delete the book
            <h1>
                
            </h1>
        </div>);
    }
}

export default Saved;
