function calcularSoma(): number {
    let INDICE = 12;
    let SOMA = 0;
    let K = 1;

    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }

    return SOMA;
}

// Exemplo de teste
console.log(calcularSoma()); // Resultado será 78
