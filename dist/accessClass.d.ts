declare class Bank {
    accNumber: number;
    amount: number;
    constructor(accNumber: number, amount: number);
}
declare const bank: Bank;
declare class BankAcc {
    private accountBal;
    constructor(accountBal: number);
    showBal(): void;
}
declare const actBal: BankAcc;
declare class BankAcc1 {
    protected bal?: number;
    constructor(bal?: number);
}
declare class Bal extends BankAcc1 {
    showAccBal(): void;
}
declare const bal: Bal;
