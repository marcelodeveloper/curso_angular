function impressaoParametros() {
    var parametros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        parametros[_i] = arguments[_i];
    }
    return parametros.join(' ');
}
console.log(impressaoParametros('Azul', 'Amarelo', 'Verde', 'Vermelho'));
console.log(impressaoParametros('Marcelo Martins'));
//# sourceMappingURL=funcoes-parametros-rest.js.map