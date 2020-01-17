import React from "react";

function TransactionList(props) {
  return (
    <div>
      <p>Sender: {props.transaction.sender}</p>
      <p>Receiver: {props.transaction.receiver}</p>
      <p>Amount: {props.transaction.amount}</p>
    </div>
  );
}

export default TransactionList;
