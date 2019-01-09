var GenericAnimal = /** @class */ (function () {
    function GenericAnimal() {
    }
    return GenericAnimal;
}());
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
var gato = new GenericAnimal();
gato.nome = "Totó";
gato.raca = "Vira Lata";
var gatoCriado = genericCrud.criar(gato);
console.log(gatoCriado);
console.log(genericCrud.buscarTodos());
console.log(genericCrud.buscar(0));
//# sourceMappingURL=generics.js.map