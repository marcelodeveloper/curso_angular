var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Veiculo = /** @class */ (function () {
    function Veiculo() {
    }
    Veiculo.prototype.acelerar = function () {
        console.log('Acelerando o veiculo...');
    };
    Veiculo.prototype.trocaMarcha = function () {
        console.log('Troca de marcha!!');
    };
    Veiculo.prototype.parar = function () {
        console.log("Parando o veiculo no estacionamento...");
    };
    return Veiculo;
}());
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.utilizacaoCapacete = true;
        return _this;
    }
    Moto.prototype.fazerManobrasRadicais = function () {
        console.log('Realizando manobras radicais com a motao!');
    };
    Moto.prototype.acelerar = function () {
        _super.prototype.acelerar.call(this);
        console.log('Acelerando a moto...');
    };
    Moto.prototype.trocaMarcha = function () {
        console.log('Troca de marcha!!');
    };
    Moto.prototype.parar = function () {
        console.log("Parando a moto no estacionamento...");
    };
    return Moto;
}(Veiculo));
var Caminhonete = /** @class */ (function (_super) {
    __extends(Caminhonete, _super);
    function Caminhonete() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.capacidadeCacamba = 700;
        return _this;
    }
    return Caminhonete;
}(Veiculo));
var cbr600 = new Moto();
cbr600.nome = 'CBR600';
cbr600.marca = 'Honda';
cbr600.cilindrada = 600;
cbr600.acelerar();
cbr600.trocaMarcha();
cbr600.fazerManobrasRadicais();
cbr600.parar();
//# sourceMappingURL=herancas-classes.js.map