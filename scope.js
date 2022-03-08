const baperTk = 300
function PatriCai(age, earning) {
    // console.log(trueAge) // make error bcoz of hoisting
    var decision = canMarry(500)
    console.log(decision);
    console.log(age)
    console.log(earning)

    // var trueAge = age + 7
    const trueAge = age + 7

    function canMarry(expense) {
        const remaining = baperTk + earning - expense

        // console.log("showing", showing) // make error bcoz of hoisting = let, const && var = no error
        console.log("showing", showing) // undefined asbe bcoz of hoisting
        if (remaining > 1000) {
            var showing = 500
            // console.log("showing", showing)
            return true
        }
        return false

    }
}
PatriCai(25, 10000)



// variable(likes, var, const, let) diye function ke call korle Hosting hobe nah
// const, let diye kisu declare korle Hosting hobe nah