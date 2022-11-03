import React, { useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer({ transactions, handleNewTransaction }) {

  const [search, setSearch] = useState('')

  function handleSearch(e){
    setSearch(search => e.target.value)
  }
  return (
    <div>
      <Search search={search} handleSearch={handleSearch} />
      <AddTransactionForm handleNewTransaction={handleNewTransaction} />
      <TransactionsList search={search} transactions={transactions} />
    </div>
  );
}

export default AccountContainer;
