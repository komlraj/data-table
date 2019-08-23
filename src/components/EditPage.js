import React, { Component } from "react";
import { connect } from "react-redux";
import { editProduct } from "../actions/action";

class EditPage extends Component {
  state = {
    name: this.props.products[this.props.productId].name,
    weight: "",
    availability: "",
    productUrl: "",
    priceTier: "",
    priceRange: "",
    priceRangeArr: null,
    isEditable: true
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

  setDataToState = editableData => {
    this.setState({
      name: editableData.name,
      weight: editableData.weight,
      availability: editableData.availability
    });
  };

  handlePriceTier = e => {
    if (e.target.value === "budget") {
      this.setState({
        priceTier: "budget",
        priceRangeArr: ["A. 4k-6k", "B. 6k-9k", "C. 9k-11k"]
      });
    } else {
      this.setState({
        priceTier: "premier",
        priceRangeArr: ["A. 11k-20k", "B. 20k-30k", "C. 30k+"]
      });
    }
  };

  handlePriceRange = e => {
    const value = e.target.value.split(" ")[1];
    this.setState({
      priceRange: value
    });
  };

  handleSubmit = () => {
    const id = this.props.productId;
    const data = { ...this.state, id };
    this.props.dispatch(editProduct(data));
    this.props.history.push("/");
  };

  render() {
    const {
      name,
      weight,
      productUrl,
      priceTier,
      priceRangeArr,
      priceRange,
      availability
    } = this.state;
    var toggle = name && weight && productUrl && priceTier && priceRange;
    return (
      <div className="container">
        <form className="edit-form">
          <div className="edit-form-inner">
            <label>Name*</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              required
            />
            <label>Weight*</label>
            <input
              type="text"
              name="weight"
              value={weight}
              onChange={this.handleChange}
              required
            />
            <label>Availability</label>
            <input
              type="number"
              name="availability"
              value={availability}
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
                  onChange={this.handlePriceTier}
                />
                budget
              </label>
              <label htmlFor="premier">
                <input
                  type="radio"
                  name="pricingTier"
                  value="premier"
                  id="premier"
                  onChange={this.handlePriceTier}
                />
                premier
              </label>
            </label>
            <label>Price Range*</label>

            <select name="priceRange" onChange={this.handlePriceRange} required>
              <option value="">Select Price</option>
              {priceRangeArr
                ? priceRangeArr.map((price, index) => {
                    return (
                      <option key={index} value={price}>
                        {price}
                      </option>
                    );
                  })
                : ""}
            </select>
            <label>is Editable</label>
            <input
              type="checkbox"
              name="isEditable"
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
    products: state.products,
    priceInfo: state.priceInfo,
    productId: state ? state.productId : null
  };
};

export default connect(mapStateToProps)(EditPage);
