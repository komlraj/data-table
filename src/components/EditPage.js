import React, { Component } from "react";
import { connect } from "react-redux";
import { editProduct } from "../actions/action";

class EditPage extends Component {
  state = {
    name: "",
    weight: "",
    availability: "",
    productUrl: "",
    pricingTier: "",
    priceRange: "",
    isEditable: false
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value
    });
  };

  handleEditable = () => {
    this.setState({
      isEditable: !this.state.isEditable
    });
  };

  handleSubmit = () => {
    const { id } = this.props.location;
    const data = { ...this.state, id };
    this.props.dispatch(
      editProduct(data, success => {
        if (success) {
          this.props.history.push("/");
        }
      })
    );
  };

  render() {
    const { priceInfo } = this.props;
    const { name, weight, productUrl, pricingTier, priceRange } = this.state;
    const prices = pricingTier ? priceInfo[pricingTier] : "";
    var toggle = name && weight && productUrl;
    return (
      <div className="container">
        <form className="edit-form">
          <div className="edit-form-inner">
            <label>Name*</label>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              required
            />
            <label>Weight*</label>
            <input
              type="text"
              name="weight"
              onChange={this.handleChange}
              required
            />
            <label>Availability</label>
            <input
              type="number"
              name="availability"
              onChange={this.handleChange}
            />
            <label>Product URL*</label>
            <input
              type="text"
              name="productUrl"
              onChange={this.handleChange}
              required
            />
            <label>Price Tier*</label>
            <label>
              <label htmlFor="budget">
                <input
                  type="radio"
                  name="pricingTier"
                  value="budget"
                  id="budget"
                  onChange={this.handleChange}
                />
                budget
              </label>
              <label htmlFor="premier">
                <input
                  type="radio"
                  name="pricingTier"
                  value="premier"
                  id="premier"
                  onChange={this.handleChange}
                />
                premier
              </label>
            </label>
            <label>Price Range*</label>

            <select name="priceRange" id="" onChange={this.handleChange}>
              <option>Select Price</option>
              {prices
                ? prices.map((price, index) => {
                    return (
                      <option key={index} value={price}>
                        {price}
                      </option>
                    );
                  })
                : ""}
            </select>
            <label>isEditable*</label>
            <input
              type="checkbox"
              name="isEditable"
              id=""
              onChange={this.handleEditable}
            />
          </div>
        </form>
        <div className="center">
          <button
            className="btn"
            onClick={this.handleSubmit}
            disabled={!toggle}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    priceInfo: state.priceInfo
  };
};

export default connect(mapStateToProps)(EditPage);
