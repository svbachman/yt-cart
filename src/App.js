import React,{Component} from "react";
import "./style.css";
import data from "./data.json"
import Products from "./Components/Products"

export default class App extends Component {
  constructor(){
    super();
    this.state= {
      products: data.products,
      size:"" ,
      sort:"",
    }
  }
  render(){
  return (
    <div className="grid-container">
      <header>
      <a href="/">React Cart </a>
      </header>
      <main>
      <div className="content">
      <div className="main">
      <Products products={this.state.products} />
      </div>
      <div className="sidebar">
      CartItems
      </div>
      </div>
      </main>
      <footer>
      All Rights
      </footer>
      
    </div>
  );
  }
}

