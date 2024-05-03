/**
 * Get the button elements
 * @type {HTMLCollectionOf<Element>}
 */
const numbers = document.getElementsByClassName('number');

/**
 * Array of operators
 * @type {string[]}
 */
const operators = ['+', '-', '*', '/'];

/**
 * Get the operator button elements
 * @type {HTMLCollectionOf<Element>}
 */
const operators_btn = document.getElementsByClassName('operator');

/**
 * Get the clear button element
 * @type {Element}
 */
const clear_btn = document.getElementById('clear');

/**
 * Get the input element
 * @type {Element}
 */
const input = document.getElementById('input1');

/**
 * Get the output element
 * @type {Element}
 */
const output = document.getElementById('output');

/**
 * Get the equal button element
 * @type {Element}
 */
const equal_btn = document.getElementById('equal');

/**
 * Get the dot button element
 * @type {Element}
 */
const dot = document.getElementById('dot');

/**
 * Get the back button element
 * @type {Element}
 */
const back = document.getElementById('back');

/**
 * Get the sign button element
 * @type {Element}
 */
const sign = document.getElementById('sign');

/**
 * Variable to check if refresh is needed
 * @type {number}
 */
var check = 1;

/**
 * Event listener for clear button click
 */
clear_btn.addEventListener('click', () => {
    check = 1;
    input.value = '';
    output.value = '';
});

/**
 * Event listener for back button click
 */
back.addEventListener('click', () => {
    input.value = input.value.slice(0, -1);
});

/**
 * Event listener for sign button click
 */
sign.addEventListener('click', () => {
    if (input.value == '')
        return;
    if (input.value[0] == '-')
        input.value = input.value.slice(1);
    else
        input.value = '-' + input.value;
});

/**
 * Function to refresh input and output values
 */
function refresh() {
    if (check)
        return;
    input.value = '';
    output.value = '';
    check = 1;
}

/**
 * Add a click event listener to each number button
 */
for (let number of numbers) {
    number.addEventListener('click', () => {
        refresh();
        input.value += number.textContent;
    });
}

/**
 * Event listener for dot button click
 */
dot.addEventListener('click', () => {
    if (input.value.includes('.')) {
        console.log("You can't add more than one dot");
        alert("You can't add more than one dot");
        return;
    }
    input.value += '.';
});

/**
 * Add a click event listener to each operator button
 */
for (let operator of operators_btn) {
    operator.addEventListener('click', () => {
        let number = input.value;
        if (input.value[0] == '-')
            number = '(' + number + ')';
        let calc = ' ' + operator.textContent + ' ';
        if (check == 0) {
            output.value = number + calc;
            input.value = '';
            check = 1;
            return;
        }
        if (output.value == '' && input.value == '') {
            console.log("You need to enter a value");
            alert("Please input a number first");
            return;
        }
        if (input.value === '' && output.value !== '') {
            output.value = output.value.slice(0, -3) + calc;
            return;
        }
        output.value += number + calc;
        input.value = '';
    });
}

/**
 * Event listener for equal button click
 */
equal_btn.addEventListener('click', () => {
    refresh();
    if (output.value == '' && input.value == '') {
        console.log("You need to enter a value");
        alert("Please input a number first");
        return;
    }
    let number = input.value;
    if (input.value[0] == '-')
        number = '(' + number + ')';
    output.value += number;
    input.value = eval(output.value);
    check = 0;
});

/**
 * Event listener for mode toggle checkbox change
 */
const checkbox = document.getElementById('modeToggle');
checkbox.addEventListener("change", () => {
    const newTheme = checkbox.checked ? "light" : "dark";
    document.querySelector("html").setAttribute("data-theme", newTheme);
});
