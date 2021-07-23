import React, { Components } from "react";
import "./style.css";
import DisplayList from './Components/DisplayList';
import ShoppingForm from './Components/ShoppingForm';

class App extends component{
  state= {
    list: [],

  }
  handleSubmit = text=>{

    if (text === "") {
      alert("Please enter text")
    }else{
      this.setState({
        list: [...this.state.list, text]
      })
    }
  }
  render() {
    return(
      <div>
        <ShoppingForm handleSubmit={this.handleSubmit} />
        <DisplayList data={this.state.llist} />

      </div>
    )
  }
}


export default App ;

