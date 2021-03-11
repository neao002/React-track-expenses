import React, { useState, useContext } from "react";

import { GlobalContext } from "./context/MainContext";

const Balance = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const { addText } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addText(newTransaction);
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write it down!"
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Add you Income or your Expense's :</label>
          <input
            type="number"
            placeholder="How much is it?"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn">Let it go! =)</button>
      </form>
    </div>
  );
};

export default Balance;
