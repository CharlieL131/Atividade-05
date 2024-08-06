document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("alturasForm") as HTMLFormElement;
    const inputContainer = document.getElementById("inputContainer") as HTMLDivElement;
    const resultDiv = document.getElementById("result") as HTMLDivElement;

    for (let i = 0; i < 5; i++) {
        const input = document.createElement("input");
        input.type = "number";
        input.step = "0.01";
        input.name = `altura${i + 1}`;
        input.placeholder = `Altura ${i + 1}`;
        inputContainer.appendChild(input);
        inputContainer.appendChild(document.createElement("br"));
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const alturas: number[] = [];
        for (let i = 0; i < 5; i++) {
            const input = document.querySelector(`input[name="altura${i + 1}"]`) as HTMLInputElement;
            if (input && input.value) {
                alturas.push(parseFloat(input.value));
            }
        }

        if (alturas.length === 5) {
            const soma = alturas.reduce((acc, altura) => acc + altura, 0);
            const media = soma / 5;
            resultDiv.textContent = `A média de altura é: ${media.toFixed(2)} metros`;
        } else {
            resultDiv.textContent = `Por favor, insira todas as 5 alturas.`;
        }
    });
});
