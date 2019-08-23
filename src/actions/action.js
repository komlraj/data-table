export function setProducts(data) {
  return dispatch => {
    dispatch({ type: "SET_PRODUCTS", data });
  };
}

export function editProduct(data) {
  return dispatch => {
    dispatch({ type: "EDIT_PRODUCTS", data });
  };
}
