document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("notasForm") as HTMLFormElement;
    const inputContainer = document.getElementById("inputContainer") as HTMLDivElement;
    const display = document.getElementById("inputDisplay") as HTMLDivElement;
    const result = document.getElementById("result") as HTMLDivElement;

    for (let i = 0; i < 5; i++) {
        const input = document.createElement("input");
        input.type = "number";
        input.name = `nota${i + 1}`;
        input.placeholder = `Nota ${i + 1}`;
        inputContainer.appendChild(input);
        inputContainer.appendChild(document.createElement("br"));
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const notas: number[] = [];
        let soma: number = 0;
        for (let i = 0; i < 5; i++) {
            const input = document.querySelector(`input[name="nota${i + 1}"]`) as HTMLInputElement;
            if (input && input.value) {
                notas.push(parseFloat(input.value));
                soma += notas[notas.length - 1];
            }
        }
        display.textContent = `Notas digitadas: ${notas.join(", ")}`;
        result.textContent = `Média: ${soma / 5}`;
    });
});