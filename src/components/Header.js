import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Header extends Component {
  render(){
    return(
      <nav>
        <Link to="/" className="btn btn-primary">Article List</Link>
        <Link to="/create" className="btn btn-primary">Make an Article</Link>
      </nav>
    )
  }
}

export default Header;
