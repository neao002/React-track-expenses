import React from "react";

//components!
import Header from "./Components/header";
import Balance from "./Components/balance";
import IncomeExpense from "./Components/income_expense";
import AddTran from "./Components/addtransaction";
import Transaction from "./Components/Listtransaction";

//mainprovider

import GlobalProvider from "./Components/context/MainContext";

import "../src/App.css";

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <Transaction />
        <AddTran />
      </div>
    </GlobalProvider>
  );
};

export default App;
