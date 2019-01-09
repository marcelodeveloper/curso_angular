var Veículo = /** @class */ (function () {
    function Veículo() {
    }
    Veículo.prototype.acelerar = function () {
        console.log('Acelerando o veículo...');
    };
    Veículo.prototype.trocaMarcha = function () {
        console.log('Troca de marcha!!');
    };
    Veículo.prototype.parar = function () {
        console.log("Parando o ve\u00EDculo no estacionamento...");
    };
    return Veículo;
}());
var monza = new Veículo();
monza.marca = "Chevrolet";
monza.cor = "Vermelho";
monza.anoFabricacao = 1990;
console.log("Ve\u00EDculo Monza = " + monza.marca + ", " + monza.cor + ", " + monza.anoFabricacao);
monza.acelerar();
monza.trocaMarcha();
monza.acelerar();
monza.parar();
//# sourceMappingURL=primeira-classe.js.map