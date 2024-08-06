document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("divisoresForm") as HTMLFormElement;
    const resultDiv = document.getElementById("result") as HTMLDivElement;

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const input = document.getElementById("numero") as HTMLInputElement;
        if (input && input.value) {
            const numero = parseInt(input.value, 10);
            const divisores: number[] = [];
            for (let i = 1; i <= numero; i++) {
                if (numero % i === 0) {
                    divisores.push(i);
                }
            }
            resultDiv.textContent = `Divisores de ${numero}: ${divisores.join(', ')}`;
        } else {
            resultDiv.textContent = `Por favor, insira um número inteiro.`;
        }
    });
});
