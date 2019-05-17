import React, { Component } from 'react';


class Apicall extends Component {

  state={
    loading: true,
    Person: null,
  }

//the component is rendered atleast once
  async componentDidMount(){
 const {onApicall} = this.props;
  const url= "https://api.randomuser.me/";
  const response = await fetch(url);
  const data =await response.json();
  this.setState({Person:data.results[0], loading:false});
  console.log('child api call');
  console.log(data);
  const value= this.state.Person;
  onApicall(value);
}


  render() {
    return (
     <div>
       {this.state.loading || !this.state.Person ? 
       (<div>Loading.....</div>) : 
       (<div>
         <div>{this.state.Person.name.title}</div>
         <div>{this.state.Person.name.first}</div>
         <div>{this.state.Person.name.last}</div>
         <img src={this.state.Person.picture.large}/>
       </div>
       )}
     </div>
    );
  }
}

export default Apicall;
