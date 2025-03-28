function ejercicio1() {
    alert('Ejercicio 1 ejecutado');

    function caja() {
        let total = 0;

        function imprimaProducto(nombre, cantidad, precio) {
            console.log(`Producto: ${nombre} - Cantidad: ${cantidad} - Precio unitario: $${precio} - Total: $${cantidad * precio}`);
        }

        function preguntarSiTieneMas() {
            let respuesta = prompt("¿Tienes más productos? (sí/no)");
            return respuesta.toLowerCase() === 'sí' || respuesta.toLowerCase() === 'si';
        }

        while (true) {
            let nombre = prompt("¿Cuál es el nombre del producto?");
            let precio = parseFloat(prompt("¿Cuál es el precio del producto?"));
            let cantidad = parseInt(prompt("¿Cuál es la cantidad del producto?"), 10);

            imprimaProducto(nombre, cantidad, precio); 
            total += precio * cantidad;

            if (!preguntarSiTieneMas()) {
                break;
            }
        }

        console.log(`El total de la compra es: $${total}`);
    }

    caja();
}

function numeroAleatorio() {
    let num;
    while (true) {
        num = Math.floor(Math.random() * 31) + 100; 
        if (num !== 110 && num !== 115 && num !== 120) {
            return num;
        }
    }
}

function ejercicio2() {
    alert('Ejercicio 2 ejecutado');

    function Numeros() {
        let esPar = true;
        let resultado = "números generados:\n";

        for (let i = 0; i < 10; i++) {
            let numero;
            while (true) {
                numero = numeroAleatorio();
                if ((numero % 2 === 0) === esPar) {
                    break;
                }
            }

            resultado += numero + "\n";
            esPar = !esPar; 
        }

        alert(resultado);
    }

    Numeros();
}