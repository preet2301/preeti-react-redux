  // action types
  const REQUEST_GET_PRODUCTS = 'REQUEST_GET_PRODUCTS';
  const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
  const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';

  const REQUEST_GET_PRODUCT = 'REQUEST_GET_PRODUCT';
  const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
  const GET_PRODUCT_FAILURE = 'GET_PRODUCT_FAILURE';

  const REQUEST_GET_CATEGORIES = 'REQUEST_GET_CATEGORIES';
  const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
  const GET_CATEGORIES_FAILURE = 'GET_CATEGORIES_FAILURE';

  // reducer with initial state
  const initialState = {
    fetching: false,
    products: [],
    product: {},
    categories: [],
    error: null,
  };

  export function productsData(state = initialState, action) {
    switch (action.type) {
      case REQUEST_GET_PRODUCTS:
        return { ...state, fetching: true, error: null };
      case GET_PRODUCTS_SUCCESS:
        return { ...state, fetching: false, products: action.products };
      case GET_PRODUCTS_FAILURE:
        return { ...state, fetching: false, products: [], error: action.error };

      case REQUEST_GET_PRODUCT:
        return { ...state, fetching: true, error: null };
      case GET_PRODUCT_SUCCESS:
        return { ...state, fetching: false, product: action.product };
      case GET_PRODUCT_FAILURE:
        return { ...state, fetching: false, products: {}, error: action.error };

      case REQUEST_GET_CATEGORIES:
        return { ...state, fetching: true, error: null };
      case GET_CATEGORIES_SUCCESS:
        return { ...state, fetching: false, categories: action.categories };
      case GET_CATEGORIES_FAILURE:
        return { ...state, fetching: false, categories: [], error: action.error };

      default:
        return state;
    }
  }
