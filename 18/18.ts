document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("numerosForm") as HTMLFormElement;
    const inputContainer = document.getElementById("inputContainer") as HTMLDivElement;
    const resultDiv = document.getElementById("result") as HTMLDivElement;

    for (let i = 0; i < 10; i++) {
        const input = document.createElement("input");
        input.type = "number";
        input.name = `numero${i + 1}`;
        input.placeholder = `Número ${i + 1}`;
        inputContainer.appendChild(input);
        inputContainer.appendChild(document.createElement("br"));
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const numeros: number[] = [];
        for (let i = 0; i < 10; i++) {
            const input = document.querySelector(`input[name="numero${i + 1}"]`) as HTMLInputElement;
            if (input && input.value) {
                numeros.push(parseFloat(input.value));
            }
        }
        if (numeros.length === 10) {
            const maior = Math.max(...numeros);
            const menor = Math.min(...numeros);
            resultDiv.textContent = `Maior valor: ${maior}, Menor valor: ${menor}`;
        } else {
            resultDiv.textContent = `Por favor, insira todos os 10 números.`;
        }
    });
});