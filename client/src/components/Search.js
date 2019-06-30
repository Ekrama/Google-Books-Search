import React, {Component} from  'react';
import {Link} from 'react-router-dom';
import API from "../utils/API";


class Search extends Component {
    render(){
        return (
        <div>

            <Link  to = "/"> Search
            </Link>
            <Link  to = "/saved"> Saved
            </Link>
            <h1>
              (React) Google Books Search


            </h1>
            <p>
                Search for and Save books of Interest
            </p>
        </div>);
    }
}

export default Search;
