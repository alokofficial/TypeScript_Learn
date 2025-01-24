// Abstract Classes
class Payment {
    constructor(protected amount: number, protected account: number) {}
        isPaymentValid(amount:number){
            return this.amount>0
        }
}

class PaymentWithInterest extends Payment {
    constructor(amount: number, account: number) {
        super(amount, account);
    }
    getInterest() {
        return this.amount * 0.1;
    }
}

const payment = new PaymentWithInterest(100, 1);
console.log(payment.getInterest());
