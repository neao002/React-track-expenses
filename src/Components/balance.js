import React, { useContext } from "react";

import { GlobalContext } from "./context/MainContext";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(0);
  return (
    <div>
      <h4>Your Balance is :</h4>
      <h1>{total}$</h1>
    </div>
  );
};

export default Balance;
