const initState = {
  products: [],
  pricingInfo: {}
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.data.products,
        pricingInfo: action.data.pricingInfo
      };
    case "EDIT_PRODUCTS":
      return {
        ...state
      };
  }
};

export default rootReducer;
