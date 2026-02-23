


// Função para somar dois valores
function soma(valor1, valor2) {
    return valor1 + valor2;
}
//Função para converter real para dólar
function realParaDolar (real, cotacaoDolar) {
    return real * cotacaoDolar;
}

var valorReal = 7.89;
var cotaca = 5.25;
var resultado = realParaDolar(valorReal, cotaca);

alert   ("O valor em real R$ " + valorReal + " é equivalente a US$ " + resultado);