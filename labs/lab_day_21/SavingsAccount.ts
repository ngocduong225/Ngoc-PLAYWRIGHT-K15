import { BankingAccount } from './BankingAccount';

export class SavingsAccount extends BankingAccount {
  private minimumBalance: number;

  constructor(initialBalance: number, minimumBalance: number) {
    super(initialBalance);
    this.minimumBalance = minimumBalance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (this.balance - amount >= this.minimumBalance) {
      this.balance -= amount;
    } else {
      console.log('Cannot withdraw: minimum balance must be maintained.');
    }
  }
}
