import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
//reducer app

const initialState = {
  transactions: [
    { id: 1, text: "Example Of Transaccion", amount: 20 },
    // { id: 2, text: "Salary", amount: 300 },
    // { id: 3, text: "Book", amount: -10 },
    // { id: 4, text: "Camera", amount: 150 },
  ],
};

export const GlobalContext = createContext(initialState);

export const MainProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deletedTransaction(id) {
    dispatch({
      type: "DELETED_TRANSANCTION",
      payload: id,
    });
  }

  function addText(transactions) {
    dispatch({
      type: "ADD_TEXT",
      payload: transactions,
    });
  }

  function addAmount(transactions) {
    dispatch({
      type: "ADD_AMOUNT",
      payload: transactions,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deletedTransaction,
        addText,
        addAmount,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default MainProvider;
