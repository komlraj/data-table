import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import EditPage from "./components/EditPage";
import "./App.scss";
import products from "./products.json";
import { connect } from "react-redux";
import { setProducts } from "./actions/action";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(setProducts(products));
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Dashboard} />
          <Route path="/edit-product" component={EditPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect()(App);
