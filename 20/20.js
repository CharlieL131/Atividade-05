document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("notasForm");
    var inputContainer = document.getElementById("inputContainer");
    var resultDiv = document.getElementById("result");
    for (var i = 0; i < 5; i++) {
        var input = document.createElement("input");
        input.type = "number";
        input.name = "nota".concat(i + 1);
        input.placeholder = "Nota ".concat(i + 1);
        inputContainer.appendChild(input);
        inputContainer.appendChild(document.createElement("br"));
    }
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var notas = [];
        for (var i = 0; i < 5; i++) {
            var input = document.querySelector("input[name=\"nota".concat(i + 1, "\"]"));
            if (input && input.value) {
                notas.push(parseFloat(input.value));
            }
        }
        var aprovados = notas.filter(function (nota) { return nota >= 7; }).length;
        resultDiv.textContent = "N\u00FAmero de alunos aprovados: ".concat(aprovados);
    });
});
