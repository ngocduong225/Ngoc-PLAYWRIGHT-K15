import { BankingAccount } from './BankingAccount';

export class CheckingAccount extends BankingAccount {
  private overdraftLimit: number;

  constructor(initialBalance: number, overdraftLimit: number) {
    super(initialBalance);
    this.overdraftLimit = overdraftLimit;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (this.balance - amount >= 50) {
      this.balance -= amount;
    } else {
      console.log('Cannot withdraw: at least 50 must remain in the account.');
    }
  }
}
