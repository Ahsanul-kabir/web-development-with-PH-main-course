/*
 const bank = owner => {
    let balance = 0;
    return amount => {
        balance += amount;
        return balance;
    }
}

const MofizBank = bank('Mofiz');
console.log(MofizBank(100))
console.log(MofizBank(200))
console.log(MofizBank(50))
console.log(MofizBank.balance)  // not access able outside the function
console.log(MofizBank(100))
*/

const bank = owner => {
    let balance = 0;
    return {
        deposit: amount => {
            balance += amount;
            return balance;
        },
        withdraw: amount => {
            balance -= amount;
            return balance;
        }
    }
}


const MofizBank = bank('Mofiz');
console.log(MofizBank.deposit(100))
console.log(MofizBank.deposit(200))
console.log(MofizBank.balance)  // not access able outside the function
console.log(MofizBank.deposit(50))
console.log(MofizBank.withdraw(50))