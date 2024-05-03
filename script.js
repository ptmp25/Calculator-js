// Get the button elements
const numbers = document.getElementsByClassName('number');
const operators = ['+', '-', '*', '/'];
const operators_btn= document.getElementsByClassName('operator');
const clear_btn = document.getElementById('clear');
const input = document.getElementById('input1');
const output = document.getElementById('output');
const equal_btn = document.getElementById('equal');
const dot = document.getElementById('dot');
const back = document.getElementById('back');
var check = 1;

clear_btn.addEventListener('click', () => {
    check = 1;
    input.value = '';
    output.value = '';
});

back.addEventListener('click', () => {
    input.value = input.value.slice(0, -1);
});

function refresh(){
    if (check)
        return;
    input.value = '';
    output.value = '';
    check = 1;
}

// Add a click event listener to each number
for (let number of numbers) {
    number.addEventListener('click', () => {
        // const input = document.getElementById('input1');
        refresh();
        input.value += number.textContent;
    });
}

dot.addEventListener('click', () => {
    if (input.value.includes('.')) {
        console.log("You can't add more than one dot");
        alert("You can't add more than one dot");
        return;
    }
    input.value += '.';
});

for (let operator of operators_btn) {
    operator.addEventListener('click', () => {
        if (check == 0) {
            output.value = input.value + ' ' + operator.textContent + ' ';
            input.value = '';
            check = 1;
            return;
        }
        if (output.value == '' && input.value == '') {
            console.log("You need to enter a value");
            alert("Please input a number first");
            return;
        }
        if (input.value === '' && output.value !== ''){
            output.value = output.value.slice(0, -3) + ' ' + operator.textContent + ' ';
            return;
        }
        output.value += input.value + ' ' + operator.textContent + ' ';
        input.value = '';

    });
}

equal_btn.addEventListener('click', () => {
    refresh();
    if (output.value == '' || input.value == '') {
        console.log("You need to enter a value");
        alert("Please input a number first");
        return;
    }
    output.value += input.value;
    input.value = eval(output.value);
    check = 0;
});

// target the button using the data attribute we added earlier
const checkbox = document.getElementById('modeToggle');
checkbox.addEventListener("change", () => {
    const newTheme = checkbox.checked ? "dark" : "light";
    document.querySelector("html").setAttribute("data-theme", newTheme);
});
