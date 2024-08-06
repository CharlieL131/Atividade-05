document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("digitosParesForm") as HTMLFormElement;
    const resultDiv = document.getElementById("result") as HTMLDivElement;

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const input = document.getElementById("numero") as HTMLInputElement;
        if (input && input.value) {
            const numero = parseInt(input.value, 10);
            const soma = numero.toString().split('').reduce((acc, digit) => {
                const numDigit = parseInt(digit, 10);
                return numDigit % 2 === 0 ? acc + numDigit : acc;
            }, 0);
            resultDiv.textContent = `A soma dos dígitos pares é: ${soma}`;
        } else {
            resultDiv.textContent = `Por favor, insira um número inteiro.`;
        }
    });
});
