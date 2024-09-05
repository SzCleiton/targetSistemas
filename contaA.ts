function contaA(str: string): string {
    const regex = /a/gi;
    const matches = str.match(regex);
    const count = matches ? matches.length : 0;

    return `A letra 'a' ocorre ${count} vezes na string.`;
}

// Exemplo de teste
const texto = "Abracadabra";
console.log(contaA(texto));
