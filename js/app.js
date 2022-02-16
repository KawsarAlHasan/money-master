// handle calculate button event
document.getElementById('calculate-button').addEventListener('click', function(){
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
    totalExpenses.innerText = parseFloat(foodAmount + rentAmount + clothesAmount);

    // clear input fields
    foodInput.value = "";
    rentInput.value = "";
    clothesInput.value = "";
})