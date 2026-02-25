


// Função para somar dois valores
function soma(valor1, valor2) {
    return valor1 + valor2;
}
//Função para converter real para dólar
function realParaDolar (real, cotacaoDolar) {
    return real * cotacaoDolar;
}

var valorReal = 2.00;
var cotaca = 5.00;
var resultado = realParaDolar(valorReal, cotaca);

alert   ("O valor em real R$ " + valorReal + " é equivalente a US$ " + resultado);


//Objetos
const carro ={
    marca: "Fiat",
    modelo: "Uno",
    ano: 2020,
    cor: "Vermelho",
    buzina: function() { alert("Buzina: Beep Beep!"); },
    completo: function() {
        return this.marca + " " + this.modelo + " " + this.ano + " " + this.cor;
    }
};

console.log(carro.completo());