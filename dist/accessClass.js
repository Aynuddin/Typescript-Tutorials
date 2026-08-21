"use strict";
// public
class Bank {
    accNumber;
    amount;
    constructor(accNumber, amount) {
        this.accNumber = accNumber,
            this.amount = amount;
    }
}
const bank = new Bank(123, 9000);
bank.accNumber = 12345,
    bank.amount = 8090,
    console.log(bank);
// private 
class BankAcc {
    accountBal;
    constructor(accountBal) {
        this.accountBal = accountBal;
    }
    showBal() {
        console.log(this.accountBal);
    }
}
const actBal = new BankAcc(6000);
actBal.showBal();
// protected
class BankAcc1 {
    bal;
    constructor(bal) {
        this.bal = bal;
    }
}
class Bal extends BankAcc1 {
    showAccBal() {
        if (this.bal) {
            console.log(this.bal);
        }
        else {
            console.log("Balance are undefined");
        }
    }
}
const bal = new Bal();
bal.showAccBal();
