import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <div className="filter-result">Listing {this.props.count} Products</div>
        <div className="filter-sort">
          
          Order {" "}
          <select value={this.props.size} onChange={this.props.sortProducts}>
            <option value="">LATEST</option>
            <option value="lowest">LOWEST</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div className="filter-size">
          Filtery {" "}
          <select value={this.props.size} onChange={this.props.filterProducts}>
            <option value="">ALL</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
      </div>
    );
  }
}
