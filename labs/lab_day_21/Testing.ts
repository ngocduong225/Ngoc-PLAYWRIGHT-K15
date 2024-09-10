import { SavingsAccount } from './SavingsAccount';
import { CheckingAccount } from './CheckingAccount';

const savings = new SavingsAccount(1000, 200);
savings.deposit(500);
console.log('Savings account balance:', savings.getBalance());
savings.withdraw(1300);
console.log('Savings account balance after withdrawal:', savings.getBalance());

const checking = new CheckingAccount(600, 0);
checking.deposit(300);
console.log('Checking account balance:', checking.getBalance());
checking.withdraw(850);
console.log('Checking account balance after withdrawal:', checking.getBalance());
