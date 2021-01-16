import React from "react";
import { Button, Table } from "react-bootstrap";
import { connect } from "react-redux";
import { addChange } from "../firebase/db";

var things = [
  "apples",
  "grapes",
  "oranges",
  "potatoes",
  "tomatoes",
  "pinaples",
  "mangoes",
  "kiwi",
];
function getRandomItem() {
  var index = Math.floor(Math.random() * things.length);
  return things[index];
}
function getRandomAmount() {
  var amount = Math.floor(Math.random() * 1000);
  return amount;
}
const TransactionContainer = ({ user, txnData }) => {
  console.log("user is ", user);
  console.log("txn data is ", txnData);
  var onclick = () => {
    console.log("adding transaction");
    addChange({
      uid: user.uid,
      name: "Buying " + getRandomItem(),
      amount: getRandomAmount(),
    });
  };
  var getTxnSum = () => {
    var sum = 0;
    if (txnData && txnData.length > 0) {
      sum = txnData
        .map((txn) => txn.amount)
        .reduce((total = 0, amount) => {
          return total + amount;
        });
    }
    return sum;
  };
  if (!user) {
    return null;
  }
  return (
    <div>
      <Button variant="outline-primary" onClick={onclick}>
        Add transaction
      </Button>
      <div>All Transaction</div>
      {txnData && <div>Total expense is {getTxnSum()}</div>}
      <div>
        <Table>
          {txnData &&
            txnData.map((txn) => {
              return (
                <tr>
                  <td>Description: {txn.name}</td>
                  <td>Amount:{txn.amount}</td>
                  <td>Created on:{new Date(txn.createdAt).toLocaleString()}</td>
                </tr>
              );
            })}
        </Table>
      </div>
    </div>
  );
};

const mapReduxStateToProps = (reduxState) => ({
  user: reduxState.auth.userData,
  txnData: reduxState.txns.data,
});
export default connect(mapReduxStateToProps, null)(TransactionContainer);
