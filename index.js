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

        return `<h4>leina con un puntaje de ${hola[0]} </h4>
        <h4>camila con un puntaje de ${hola[1]} </h4>
        <h4>antonio con un puntaje de ${hola[2]} </h4>`;
    };

    return calcularArray([
        [3, 4, 6, 1000],
        [3, 0, 3300, 56],
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

const boton = document.getElementsByClassName("boton");
document.addEventListener("click", e => {
    e.preventDefault();

    document.write(leinita() + "holalasss");
});