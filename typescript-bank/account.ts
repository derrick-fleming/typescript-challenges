/* global Transaction */

function Account(this: {number: number, holder: string, transactions: []}, number: number, holder: string) {
  this.number = number as number;
  this.holder = holder as string;
  this.transactions = []
}

Account.prototype.deposit = function(this: {transactions: {type: string, amount: number}[]}, amount: number) {
    if (amount <= 0 || !Number.isInteger(amount)) return false;
    const deposit: {type: string, amount: number} = new Transaction('deposit', amount)
    this.transactions.push(deposit);
    return true;
  }

Account.prototype.withdraw = function (this: {transactions: { type: string, amount: number }[]}, amount: number) {
  if (amount <= 0 || !Number.isInteger(amount)) return false;
  const withdraw: {type: string, amount: number} = new Transaction('withdrawal', amount)
  this.transactions.push(withdraw);
  return true
}

Account.prototype.getBalance = function() {
  let balance = 0;
  this.transactions.forEach((transaction: {type: string, amount: number}) => {
    if (transaction.type === 'deposit') {
      balance = balance + transaction.amount;
    } else {
      balance = balance - transaction.amount;
    }
  })
  return balance;
}
