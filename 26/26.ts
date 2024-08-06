document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("inversoForm") as HTMLFormElement;
    const resultDiv = document.getElementById("result") as HTMLDivElement;

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const input = document.getElementById("numero") as HTMLInputElement;
        if (input && input.value) {
            const numero = parseInt(input.value, 10);
            const inverso = numero.toString().split('').reverse().join('');
            resultDiv.textContent = `O número invertido é: ${inverso}`;
        } else {
            resultDiv.textContent = `Por favor, insira um número inteiro.`;
        }
    });
});
