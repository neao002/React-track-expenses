import React, { useContext } from "react";

import { GlobalContext } from "./context/MainContext";

export const Transaction = ({ transactions }) => {
  //delete transalacction function from maincontext
  const { deletedTransaction } = useContext(GlobalContext);

  const sign = transactions.amount < 0 ? "-" : "+";

  return (
    <li className={transactions.amount < 0 ? "minus" : "plus"}>
      <ul> {transactions.text}</ul>
      <span>
        {sign}${Math.abs(transactions.amount)}
      </span>
      <button
        onClick={() => deletedTransaction(transactions.id)}
        className="delete-btn"
      >
        xx
      </button>
    </li>
  );
};
