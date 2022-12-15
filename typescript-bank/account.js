/* global Transaction */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}
Account.prototype.deposit = function (amount) {
  if (amount <= 0 || !Number.isInteger(amount)) { return false; }
  var deposit = new Transaction('deposit', amount);
  this.transactions.push(deposit);
  return true;
};
Account.prototype.withdraw = function (amount) {
  if (amount <= 0 || !Number.isInteger(amount)) { return false; }
  var withdraw = new Transaction('withdrawal', amount);
  this.transactions.push(withdraw);
  return true;
};
Account.prototype.getBalance = function () {
  var balance = 0;
  this.transactions.forEach(function (transaction) {
    if (transaction.type === 'deposit') {
      balance = balance + transaction.amount;
    } else {
      balance = balance - transaction.amount;
    }
  });
  return balance;
};
