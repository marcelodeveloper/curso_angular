function imprimirNomeCompletoComPeso(nome, sobrenome, peso) {
    if (peso) {
        return "Nome completo: " + nome + " " + sobrenome + ". Peso atual: " + peso;
    }
    else {
        return "Nome completo: " + nome + " " + sobrenome + ". Peso atual: n\u00E3o informado";
    }
}
console.log(imprimirNomeCompletoComPeso('Marcelo', 'Martins'));
console.log(imprimirNomeCompletoComPeso('Marcelo', 'Martins', 83));
//# sourceMappingURL=funcoes-parametros-opcionais.js.map