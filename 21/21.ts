document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("digitosForm") as HTMLFormElement;
    const resultDiv = document.getElementById("result") as HTMLDivElement;

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const input = document.getElementById("numero") as HTMLInputElement;
        if (input && input.value) {
            const numero = parseInt(input.value, 10);
            const soma = numero.toString().split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
            resultDiv.textContent = `A soma dos dígitos é: ${soma}`;
        } else {
            resultDiv.textContent = `Por favor, insira um número inteiro.`;
        }
    });
});