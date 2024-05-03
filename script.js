// Get the button elements
const numbers = document.getElementsByClassName('number');
const operators = ['+', '-', '*', '/'];
const input = document.getElementById('input1');
const output = document.getElementById('output');
const operators_btn= document.getElementsByClassName('operator');
const clear_btn = document.getElementsByClassName('clear')[0];

// function calculate(equa) {
//     return;
// }

// function add(input, operator, output) {
//     return output + input + operator;
// }

clear_btn.addEventListener('click', () => {
    input.value = '';
    output.value = '';
});

// Add a click event listener to each number
for (let number of numbers) {
    number.addEventListener('click', () => {
        input.value += number.textContent;
    });
}

for (let operator of operators_btn) {
    operator.addEventListener('click', () => {
        input.value += operator.textContent;
    });
}
