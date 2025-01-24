"use strict";
// Abstract Classes
class Payment {
    constructor(amount, account) {
        this.amount = amount;
        this.account = account;
    }
    isPaymentValid(amount) {
        return this.amount > 0;
    }
}
class PaymentWithInterest extends Payment {
    constructor(amount, account) {
        super(amount, account);
    }
    getInterest() {
        return this.amount * 0.1;
    }
}
const payment = new PaymentWithInterest(100, 1);
console.log(payment.getInterest());
