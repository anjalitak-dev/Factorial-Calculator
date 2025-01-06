function calculateFactorial() {
    const number = parseInt(document.getElementById('number').value);
    const method = document.getElementById('method').value;
    const errorElement = document.getElementById('error');
    const resultElement = document.getElementById('result');
    const methodUsedElement = document.getElementById('methodUsed');

    // Clear previous error or results
    errorElement.innerText = '';
    resultElement.innerText = '';
    methodUsedElement.innerText = '';

    if (isNaN(number) || number < 0) {
        errorElement.innerText = 'Please enter a valid positive integer.';
        return;
    }

    let result;
    let methodUsed = '';

    if (method === 'iterative') {
        result = factorialIterative(number);
        methodUsed = 'Iterative Method';
    } else {
        result = factorialRecursive(number);
        methodUsed = 'Recursive Method';
    }

    resultElement.innerText = `Factorial: ${result}`;
    methodUsedElement.innerText = `Method used: ${methodUsed}`;
}

function factorialIterative(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

function factorialRecursive(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorialRecursive(n - 1);
}
