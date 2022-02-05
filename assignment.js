// problem - 1
function anaToVori(ana) {
    if (typeof ana != "number") {
        return 'please enter valid input case'
    }
    else if (ana < 0) {
        return 'negative input is not allow'
    }
    else {
        const totalVori = ana / 16;
        return totalVori;
    }
}
// const test1 = anaToVori(16);
// console.log(test1)


// problem - 2
function pandaCost(singaraQuantity, samusaQuantity, jilapiQuantity) {

    if (typeof singaraQuantity != "number" || typeof samusaQuantity != "number" || typeof jilapiQuantity != "number") {
        return 'Please enter valid input case'
    }

    else if (singaraQuantity < 0 || samusaQuantity < 0 || jilapiQuantity < 0) {
        return 'negative input is not allow'
    }
    else {
        const singaraPrice = 7;
        const samusaPrice = 10;
        const jilapiPrice = 15;
        const totalPrice = (singaraPrice * singaraQuantity) + (samusaPrice * samusaQuantity) +
            (jilapiPrice * jilapiQuantity)

        return totalPrice;
    }
}
// const test2 = pandaCost(8, 7, 5);
// console.log(test2)


// problem - 3
function picnicBudget(personQuantity) {
    if (typeof personQuantity != "number") {
        return 'Please enter valid input case'
    }

    else if (personQuantity < 0) {
        return 'negative input is not allow'
    }
    else {
        const firstCategoryPrice = 5000; // 1 - 100
        const secondCategoryPrice = 4000; // 101 - 200
        const thirdCategoryPrice = 3000; // 201 - up
        let totalPrice;

        if (personQuantity <= 100) {
            totalPrice = firstCategoryPrice * personQuantity
        }
        else if (personQuantity <= 200) {
            const firstCategoryTotal = 100 * firstCategoryPrice;
            const restPerson = personQuantity - 100;
            const secondCategoryTotal = secondCategoryPrice * restPerson;
            totalPrice = firstCategoryTotal + secondCategoryTotal;
        }
        else {
            const firstCategoryTotal = 100 * firstCategoryPrice;
            const secondCategoryTotal = 100 * secondCategoryPrice;
            const restPerson = personQuantity - 200;
            const thirdCategoryTotal = thirdCategoryPrice * restPerson
            totalPrice = firstCategoryTotal + secondCategoryTotal + thirdCategoryTotal;
        }
        return totalPrice;
    }
}
// const test3 = picnicBudget(101);
// console.log(test3)


// problem - 4
function oddFriend(friends) {
    if (typeof friends != "object") {
        return 'Please enter valid input case'
    }
    else {
        for (let i = 0; i < friends.length; i++) {
            const friend = friends[i];
            if (friend.length % 2 != 0) {
                return friend;
            }
        }
    }
}
// const test4 = oddFriend(['kodom Ali1', 'kabir', 'hasan', 'hossin']);
// console.log(test4)