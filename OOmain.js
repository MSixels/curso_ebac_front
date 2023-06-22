function Animal(especie)  {
    this.especie = especie;
    this.oBicho = function() {
        console.log(this.especie + " é um animal do tipo " + this.tipo + " e " + this.barulho + " para se comunicar.");
    }
}

function Terrestre(especie, tipo, barulho) {
    this.tipo = tipo;
    this.barulho = barulho;

    Animal.call(this, especie)
}

function Voador(especie, tipo, barulho) {
    this.tipo = tipo;
    this.barulho = barulho;

    Animal.call(this, especie)
}

const animal1 = new Terrestre ("Cachorro", "mamífero", "late");
const animal2 = new Voador ("arara", "ave","grasna");

animal1.oBicho();
animal2.oBicho();