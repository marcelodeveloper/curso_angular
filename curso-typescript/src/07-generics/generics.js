"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generic_animal_1 = require("./generic-animal");
var GenericAnimalCRUD = /** @class */ (function () {
    function GenericAnimalCRUD() {
        this.animais = [];
    }
    GenericAnimalCRUD.prototype.criar = function (objeto) {
        this.animais.push(objeto);
        return objeto;
    };
    GenericAnimalCRUD.prototype.buscarTodos = function () {
        return this.animais;
    };
    GenericAnimalCRUD.prototype.buscar = function (index) {
        return this.animais[index];
    };
    GenericAnimalCRUD.prototype.atualizar = function (index, objeto) {
        this.animais[index] = objeto;
        return objeto;
    };
    GenericAnimalCRUD.prototype.remover = function (index) {
        this.animais.splice(index, 1);
    };
    return GenericAnimalCRUD;
}());
var genericCrud = new GenericAnimalCRUD();
var gato = new generic_animal_1.GenericAnimal();
gato.nome = "Totó";
gato.raca = "Vira Lata";
var gatoCriado = genericCrud.criar(gato);
console.log(gatoCriado);
console.log(genericCrud.buscarTodos());
console.log(genericCrud.buscar(0));
//# sourceMappingURL=generics.js.map