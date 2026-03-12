// If e else / if= Se acontecer algo, faça isso / else= Se não acontecer, faça isso

function verificar() {
    let nome = document.getElementById("nome").value;
    if (nome ==""  || nome == null) {
        let p = document.getElementById("teste");
        p.innerHTML = "o campo não pode ser vazio";
        p.style.color = "red";
    }
}


