import React, { Component } from 'react';
import Apicall from './CallParent';


class App extends Component {



  Apicall=(value) =>{
    console.log('parentapicall');
    console.log(value);
  }
  render(){
    return(
      <div>
        <Apicall oApicall={this.Apicall} />
        <button>CallParent</button>
      </div>
    )
  }
}

export default App;
