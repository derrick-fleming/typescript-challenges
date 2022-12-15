/* exported Bank */

function Bank(this: {nextAccountNumber: number, accounts: []}) {
  this.nextAccountNumber = 1;
  this.accounts = []
}

Bank.prototype.openAccount = function (this: { nextAccountNumber: number, accounts: { number: number, holder: string}[]}, holder: string, balance: number) {
  if (balance <= 0 || !Number.isInteger(balance)) return null;
  const account: { number: number, holder: string, deposit: Function } = new Account(this.nextAccountNumber, holder);
  account.deposit(balance);
  this.accounts.push(account);
  this.nextAccountNumber++;
  return account.number;
}

Bank.prototype.getAccount = function(number: number) {
  const account: { number: number, holder: string, deposit: Function } = this.accounts.find((account: {number: number, holder: string, transactions: []}) => {
    return account.number === number;
  })
  if (!account) {
    return null;
  }
  return account;
}

Bank.prototype.getTotalAssets = function(){
  let balance = 0;
  this.accounts.forEach((account: {getBalance: Function}) => {
    balance = balance + account.getBalance()
  })
  return balance;
}
