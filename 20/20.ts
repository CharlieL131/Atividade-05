document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("notasForm") as HTMLFormElement;
    const inputContainer = document.getElementById("inputContainer") as HTMLDivElement;
    const resultDiv = document.getElementById("result") as HTMLDivElement;

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
        for (let i = 0; i < 5; i++) {
            const input = document.querySelector(`input[name="nota${i + 1}"]`) as HTMLInputElement;
            if (input && input.value) {
                notas.push(parseFloat(input.value));
            }
        }

        const aprovados = notas.filter(nota => nota >= 7).length;
        resultDiv.textContent = `Número de alunos aprovados: ${aprovados}`;
    });
});