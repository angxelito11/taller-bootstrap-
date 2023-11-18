class FiguraGeometrica {
    constructor(nombre) {
        this.nombre=nombre
    }

    calcularArea() {
        console.log("esta figura tiene un area de:")
    }

    calcularPerimetro() {
        console.log("esta figura tiene un perimetro de:")
    }
}

class Circulo extends FiguraGeometrica {
    constructor(radio) {
        super();
        this.radio = radio;
    }

    calcularArea() {
        return Math.PI * this.radio * this.radio;
    }

    calcularPerimetro() {
        return 2 * Math.PI * this.radio;
    }
}

class Cuadrado extends FiguraGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }

    calcularArea() {
        return this.lado * this.lado;
    }

    calcularPerimetro() {
        return 4 * this.lado;
    }
}

class Rectangulo extends FiguraGeometrica {
    constructor(ancho, alto) {
        super();
        this.ancho = ancho;
        this.alto = alto;
    }

    calcularArea() {
        return this.ancho * this.alto;
    }

    calcularPerimetro() {
        return 2 * (this.ancho + this.alto);
    }
}

const circulo = new Circulo(10);
const cuadrado = new Cuadrado(8);
const rectangulo = new Rectangulo(6, 12);

console.log("Círculo - Área:", circulo.calcularArea(), "Perímetro:", circulo.calcularPerimetro());
console.log("Cuadrado - Área:", cuadrado.calcularArea(), "Perímetro:", cuadrado.calcularPerimetro());
console.log("Rectángulo - Área:", rectangulo.calcularArea(), "Perímetro:", rectangulo.calcularPerimetro());
