const initState = {
  products: [],
  pricingInfo: {},
  productId: null
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
        ...state,
        products: state.products.map((product, index) => {
          if (index === Number(action.data.id)) {
            return {
              name: action.data.name,
              pricingTier: action.data.priceTier,
              priceRange: action.data.priceRange,
              weight: action.data.weight,
              availability: action.data.availability,
              productUrl: action.data.productUrl,
              isEditable: action.data.isEditable
            };
          } else {
            return { ...product };
          }
        })
      };
    case "SET_ID":
      return {
        ...state,
        productId: action.id
      };
    default:
      return {
        ...state
      };
  }
};

export default rootReducer;
