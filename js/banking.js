// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText)

    const depositAmount = document.getElementById('deposit-total');
    const previousDepositText = depositAmount.innerText
    const previousDepositAmount = parseFloat(previousDepositText)
    const newDepositTotal = previousDepositAmount + newDepositAmount
    depositAmount.innerHTML = newDepositTotal

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear the deposit input field value
    depositInput.value = ''
})