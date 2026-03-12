let casa = document.querySelectorAll('.casa'); // pega todas as casas

casa.forEach(function(casa) {

    casa.addEventListener('click', function(){

        if(casa.innerText === ""){
            let jogador = prompt("Digite o nome do jogador");
            casa.innerHTML = jogador;
        }

    });

});
