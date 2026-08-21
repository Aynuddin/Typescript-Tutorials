
// public
class Bank{
    public accNumber: number;
    public amount:number;
    constructor(accNumber:number, amount:number){
        this.accNumber = accNumber,
        this.amount = amount
    }
}
const bank = new Bank(123,9000);
bank.accNumber=12345,
bank.amount = 8090,
console.log(bank);

// private 
class BankAcc{
    private accountBal:number;
    constructor(accountBal:number){
        this.accountBal=accountBal
    }
    showBal(){
        console.log(this.accountBal);
        
    }
}

const actBal = new BankAcc(6000);
actBal.showBal();

// protected
class BankAcc1{
    protected bal?:number;
    constructor(bal?:number){
        this.bal=bal
    }
}

class Bal extends BankAcc1{
    showAccBal(){
        if(this.bal){
            console.log(this.bal);
        }else{
            console.log("Balance are undefined"); 
        }    
    }
}

const bal = new Bal();
bal.showAccBal();
