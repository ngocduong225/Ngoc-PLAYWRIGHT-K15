const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Acc1
const bankAccount1 = {
    accountNumber: '123456789',
    routingNumber: '987654321',
    balance: 1000
};

//Acc2 clone từ Acc1
const bankAccount2 = JSON.parse(JSON.stringify(bankAccount1));
bankAccount2.accountNumber = '987654321';

//Put them into an array 
const bankAccounts = [bankAccount1, bankAccount2]

//Function find an account
function findAccount(accountNumber){
    return bankAccounts.find(account => account.accountNumber === accountNumber)
}

//Function update balance
function updateBalance(account, amount) {
    if (amount > account.balance) {
        console.log('Error: Cannot withdraw more than the current balance.');
    } else {
        account.balance -= amount;
        console.log(`Withdrawal successful. New balance: ${account.balance}`);
    }
}
//Function xử lý các option
function optionOfUser(option) {
    switch (option) {
        case '1':
            rl.question('Enter account number: ', (accountNumber) => {
                let account = findAccount(accountNumber);
                if (account) {
                    console.log(`Account Number: ${account.accountNumber}`);
                    console.log(`Balance: ${account.balance}`);
                } else {
                    console.log('Account not found.');
                }
                mainMenu();
            });
            break;
        case '2':
            rl.question('Enter account number: ', (accountNumber) => {
                let account = findAccount(accountNumber);
                if (account) {
                    rl.question('Enter amount to withdraw: ', (amount) => {
                        updateBalance(account, parseFloat(amount));
                        mainMenu();
                    });
                } else {
                    console.log('Account not found.');
                    mainMenu();
                }
            });
            break;
        case '0':
            rl.close();
            console.log(`Glad to be of service!`);
            break;
        default:
            console.log('Invalid option. Please try again.');
            mainMenu();
            break;
    }
};
//Function show menu
function mainMenu() {
    console.log('\t==== Banking application ====');
    console.log('1. Find an account');
    console.log('2. Update balance');
    console.log('0. Exit the program');
    rl.question('Please select an option: ',optionOfUser)
}
//Start app
mainMenu();