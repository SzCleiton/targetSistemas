function isFibonacci(num: number): string {
    let a = 0, b = 1, temp;

    if (num === a || num === b) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
    }

    while (b < num) {
        temp = b;
        b = a + b;
        a = temp;
    }

    if (b === num) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${num} não pertence à sequência de Fibonacci.`;
    }
}

// Exemplo de teste
const numero = 21;
console.log(isFibonacci(numero));
