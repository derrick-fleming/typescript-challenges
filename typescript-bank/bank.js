/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}
Bank.prototype.openAccount = function (holder, balance) {
  if (balance <= 0 || !Number.isInteger(balance)) { return null; }
  var account = new Account(this.nextAccountNumber, holder);
  account.deposit(balance);
  this.accounts.push(account);
  this.nextAccountNumber++;
  return account.number;
};
Bank.prototype.getAccount = function (number) {
  var account = this.accounts.find(function (account) {
    return account.number === number;
  });
  if (!account) {
    return null;
  }
  return account;
};
Bank.prototype.getTotalAssets = function () {
  var balance = 0;
  this.accounts.forEach(function (account) {
    balance = balance + account.getBalance();
  });
  return balance;
};
