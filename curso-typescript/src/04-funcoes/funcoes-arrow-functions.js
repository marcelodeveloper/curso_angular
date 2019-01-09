var arrayArrowFunction = ['Azul', 'Verde', 'Amarelo', 'Vermelho'];
console.log(createLine(32));
arrayArrowFunction.forEach(function (nome) {
    console.log("Valor iterado por uma fun\u00E7\u00E3o de callback comum: " + nome);
});
console.log(createLine(32));
arrayArrowFunction.forEach(function (nome) {
    console.log("Valor iterado por uma arrow function: " + nome);
});
function createLine(pointNumber) {
    var retorno;
    var valor = '';
    var i = 0;
    for (i = 0; i <= pointNumber; i++) {
        valor += '-';
        //retorno.join('-')
    }
    //return retorno.toString()
    return valor;
}
//# sourceMappingURL=funcoes-arrow-functions.js.map