document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("notasForm");
    var inputContainer = document.getElementById("inputContainer");
    var display = document.getElementById("inputDisplay");
    var result = document.getElementById("result");
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
        var soma = 0;
        for (var i = 0; i < 5; i++) {
            var input = document.querySelector("input[name=\"nota".concat(i + 1, "\"]"));
            if (input && input.value) {
                notas.push(parseFloat(input.value));
                soma += notas[notas.length - 1];
            }
        }
        display.textContent = "Notas digitadas: ".concat(notas.join(", "));
        result.textContent = "M\u00E9dia: ".concat(soma / 5);
    });
});
