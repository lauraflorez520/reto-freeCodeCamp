function leinita() {
    const calcularArray = alumno => {
        var hola = [];
        for (var i = 0; i < alumno.length; i++) {
            var numeros = alumno[i][0];
            for (var j = 1; j < alumno[i].length; j++) {
                if (alumno[i][j] > numeros) {
                    numeros = alumno[i][j];
                }
            }
            hola[i] = numeros;
        }

        return `<h4>leina con un puntaje de <span>${hola[0]}<span> </h4>
        <h4>camila con un puntaje de ${hola[1]} </h4>
        <h4>antonio con un puntaje de ${hola[2]}`;
        // return `leina con un puntaje de <span>${hola[0]}<span>,
        // <br>
        // camila con un puntaje de ${hola[1]}
        // <br>
        // antonio con un puntaje de ${hola[2]}`;
    };

    return calcularArray([
        [3, 4, 6, 1000],
        [-1, -5, -6, -2],
        [2, 5, 4, 200]
    ]);
    // console.log(
    //     calcularArray([
    //         [3, 4, 6, 8],
    //         [3, 0, 18, 56],
    //         [2, 5, 4, 8]
    //     ])
    // );
}

leinita();
var mostrar = leinita();

const modificar = document.querySelector(".resultado__ganadores");
const boton = document.querySelector(".button");
const presionar = () => {
    // document.write(mostrar);
    modificar.innerHTML = mostrar;
};

boton.addEventListener("click", presionar);