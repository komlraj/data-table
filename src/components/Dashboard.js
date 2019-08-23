import React, { Component } from "react";
import { connect } from "react-redux";

class Dashboard extends Component {
  handleEdit = id => {
    this.props.dispatch({ type: "SET_ID", id });
    this.props.history.push({
      pathname: "/edit-product"
    });
  };
  render() {
    const { products, pricingInfo } = this.props;
    return (
      <div className="container">
        <table>
          <thead>
            <tr>
              <td className="table-header">Name</td>
              <td className="table-header">Weight</td>
              <td className="table-header">Availability</td>
              <td className="table-header">isEditable</td>
            </tr>
          </thead>
          <tbody>
            {products && pricingInfo ? (
              products.map((product, index) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>{product.weight}</td>
                  <td>{product.availability}</td>
                  <td>
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
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>"Loading Data ......"</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
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
