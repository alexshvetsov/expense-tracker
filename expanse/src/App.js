import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddNewTransaction } from "./components/AddNewTransaction";

import {GlobalProvider}from './context/globalState';
function App() {
  return (
    <GlobalProvider>
      <Header header="Expance Tracker" />
      <div className="container">
        <Balance />
          <IncomeExpenses />
        <TransactionList />
        <AddNewTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
