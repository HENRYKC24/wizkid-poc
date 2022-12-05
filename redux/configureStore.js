import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";

import thunk from "redux-thunk";
import wizcoinReducer from "./wizcoin/wizcoin";
import transactionBalanceReducer from "./transactions/transactionsBalance";
import transactionHistoryReducer from "./transactions/transactionsHistory";
const rootReducer = combineReducers({
  wizcoinReducer,
  transactionBalanceReducer,
  transactionHistoryReducer,
});

const store = configureStore(
  {
    reducer: rootReducer,
  },
  applyMiddleware(thunk)
);

export default store;
