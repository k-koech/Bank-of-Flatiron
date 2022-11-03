import React, { useState, useEffect } from "react";
import AccountContainer from "./AccountContainer";

function App() {
  const url = 'http://localhost:8001/transactions'
  const [transactions, setTransactions] = useState([])
  
  useEffect(() => {
    fetch(url).then(res => res.json())
      .then(data => setTransactions(data))
  }, [])

  function onAddTransaction(data){
    const newData = [...transactions, data]
    setTransactions(newData)
  }

  function handleNewTransaction(newTransaction){
    const formData = {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(newTransaction)
    }

    fetch(url, formData)
      .then(res => res.json())
      .then(data => onAddTransaction(data))
  }

  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer handleNewTransaction={handleNewTransaction} transactions={transactions} />
    </div>
  );
}

export default App;
