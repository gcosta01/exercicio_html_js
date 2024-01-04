document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var campoA = parseInt(document.getElementById("campoA").value);
    var campoB = parseInt(document.getElementById("campoB").value);

    if (campoB > campoA) {
        document.getElementById("mensagem").innerText = "Formulário válido! B é maior que A.";
        document.getElementById("mensagem").style.color = "green";
    } else {
        document.getElementById("mensagem").innerText = "Formulário inválido! B deve ser maior que A.";
        document.getElementById("mensagem").style.color = "red";
    }
});