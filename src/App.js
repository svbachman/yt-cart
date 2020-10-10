import React, { Component } from "react";
import "./style.css";
import data from "./data.json";
import Products from "./Components/Products";
import Filter from "./Components/Filter";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: ""
    };
  }
  sortProducts = event => {
    console.log(event.target.value);
    const sort = event.target.value;
    this.setState(state => ({
      sort: sort,
      products: this.state.products.slice().sort((a, b) => {
        sort === "lowest"
          ? a.price > b.price
            ? 1
            : -1
          : sort === "highest"
          ? a.price < b.price
            ? 1
            : -1
          : a._id > b._id
          ? 1
          : -1;
      })
    }));
  };
  filterProducts = event => {
    if (event.target.value === "") {
      this.setState({ size: event.target.value, product: data.products });
    } else {
      this.setState({
        size: event.target.value,
        products: data.products.filter(
          product => product.availableSizes.indexOf(event.target.value) >= 0
        )
      });
    }
    console.log(event.target.value);
  };
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">React Cart </a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter
                count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              />
              <Products products={this.state.products} />
            </div>
            <div className="sidebar">CartItems</div>
          </div>
        </main>
        <footer>All Rights</footer>
      </div>
    );
  }
}
