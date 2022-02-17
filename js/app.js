// handle calculate button event
document.getElementById('calculate-button').addEventListener('click', function(){
    // income Input
    const incomeInput = document.getElementById('income-input');
    const incomeAmountText = incomeInput.value;
    const incomeAmount = parseFloat(incomeAmountText);

    // food input 
    const foodInput = document.getElementById('food-input');
    const foodAmountText = foodInput.value;
    const foodAmount = parseFloat(foodAmountText);

    // rent input 
    const rentInput = document.getElementById('rent-input');
    const rentAmountText = rentInput.value;
    const rentAmount = parseFloat(rentAmountText);

    // clothes input 
    const clothesInput = document.getElementById('clothes-input');
    const clothesAmountText = clothesInput.value;
    const clothesAmount = parseFloat(clothesAmountText);

    // Total Expenses
    const totalExpenses = document.getElementById('total-expenses');
    const totalExpensesAmount = parseFloat(foodAmount + rentAmount + clothesAmount);
    totalExpenses.innerText = totalExpensesAmount;

    // // updete balance
    const totalBalance = document.getElementById('total-balance');
    totalBalance.innerText =parseFloat(incomeAmount - totalExpensesAmount);

    // clear input fields
    incomeInput.value = "";
    foodInput.value = "";
    rentInput.value = "";
    clothesInput.value = "";
})