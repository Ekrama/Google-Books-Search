import React, {Component} from  'react';
import {Link} from 'react-router-dom';
import API from "../utils/API";


class Search extends Component {
constructor(props){
    super(props);
    this.state = {
        searchedBook: "",
        Bookdata:     [],
       };
       this.handlesearchedclick = this.handlesearchedclick.bind (this);
       this.handletextchanged = this.handletextchanged.bind (this);
}

handletextchanged = event => {
    event.preventDefault();
    
    this.setState({
     searchedBook: event.target.value
    });
  };

  handlesearchedclick = event => {
    event.preventDefault();
    
      API.searchBook(this.state.searchedBook)
        
        .then(res =>{ this.setState({
           Bookdata: res.data 
        });
        this.setState ({
            searchedBook: ""
        });
    })
        .catch(err => console.log(err));
    
  };


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
<div>
<form>
          <label>
              Search
              </label>  
              <input type= "text" name ="SearchedBook" id= "SearchedBook" >

    // comment 1
    //add onchange to store most resent searchd text
              
              

              </input> 
              //comment 2
              //add onclick to search for matching books
              <button type = "submit">
                Search
              </button>
              
            </form>

            //comment 3
            //show the result if their are any, allow the result book to be viewed/saved

            
            


</div>

        </div>);
    }
}

export default Search;
