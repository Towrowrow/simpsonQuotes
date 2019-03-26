import React, { Component } from "react";
import logo from "./logo.svg";
import logo2 from "./logo2.svg";

import "./App.css";
import Quotes from "./Quotes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working:true
    };
  }
  handleClick = () => {
    this.setState({ working: !this.state.working });
  };

  render() {
    const work = this.state.working ? 'App-logo' : 'App-logo-off';
    const workbutton = this.state.working ? 'Homer is working' : 'Doh !';
    const logoo = this.state.working ? logo : logo2;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logoo} className={work} alt="logo" />
          
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <div className="Work">
       <button  onClick={this.handleClick}>{workbutton}</button>
 
        <Quotes/>
      
  


  
     </div>
     </div>
    );
  }
}
export default App;