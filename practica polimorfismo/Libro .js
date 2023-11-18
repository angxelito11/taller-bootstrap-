class Libro {
    constructor(titulo, autor, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.leido = false; // Inicialmente, el libro no se ha leído
    }

    marcarComoLeido() {
        this.leido = true;
    }

    marcarComoNoLeido() {
        this.leido = false;
    }

    informacion() {
        const estadoLeido = this.leido ? 'Sí' : 'No';
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Género: ${this.genero}, Leído: ${estadoLeido}`);
    }
}

const libro1 = new Libro('asi hablo zaratustra', 'friederich nietzsche', 'filosofico');
const libro2 = new Libro('candido', 'voltaire', 'novela');


libro1.marcarComoLeido();

libro1.informacion();
libro2.informacion();

