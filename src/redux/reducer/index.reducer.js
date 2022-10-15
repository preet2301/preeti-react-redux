import { productsData } from "./product.reducer";

const { combineReducers } = require("redux");

const reducer = combineReducers({
  productsData,
});

export default reducer;
