import React, { Component } from "react";
import { connect } from "react-redux";

class Dashboard extends Component {
  handleEdit = id => {
    this.props.history.push({
      pathname: "/edit-product",
      id
    });
  };
  render() {
    const { products, pricingInfo } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th className="table-header">Name</th>
            <th className="table-header">Weight</th>
            <th className="table-header">Availability</th>
            <th className="table-header">isEditable</th>
          </tr>
        </thead>
        <tbody>
          {products && pricingInfo ? (
            products.map((product, index) => (
              <tr key={index}>
                <th className="cell">{product.name}</th>
                <th className="cell">{product.weight}</th>
                <th className="cell">{product.availability}</th>
                <th className="cell">
                  {product.isEditable ? (
                    <button
                      className="btn"
                      onClick={() => this.handleEdit(index)}
                    >
                      Edit
                    </button>
                  ) : (
                    ""
                  )}
                </th>
              </tr>
            ))
          ) : (
            <div>Loading Data ......</div>
          )}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  if (state) {
    return {
      products: state.products ? state.products : "",
      pricingInfo: state.pricingInfo ? state.pricingInfo : ""
    };
  }
};

export default connect(mapStateToProps)(Dashboard);
