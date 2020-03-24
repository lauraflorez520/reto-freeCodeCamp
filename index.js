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

        return `<section><article class="participante__uno participantes"><img src="./img/imagen1.jpg" alt="" class="img"><h4 class="participantes">leina con un puntaje de <span>${hola[0]}<span> </h4></article>
        <article class="participante__dos participantes"><img src="./img/imagen2.jpg" alt="" class="img"><h4 class="participantes">camila con un puntaje de ${hola[1]} </h4></article></section>
        <section><article class="participante__tres participantes"><img src="./img/imagen3.jpg" alt="" class="img"><h4 class="participantes">antonio con un puntaje de ${hola[2]} </h4></article>
        <article class="participante__cuatro participantes"><img src="./img/imagen4.jpg" alt="" class="img"><h4 class="participantes">Mario con un puntaje de <span>${hola[3]} </h4></article></section>`;
        // return `leina con un puntaje de <span>${hola[0]}<span>,
        // <br>
        // camila con un puntaje de ${hola[1]}
        // <br>
        // antonio con un puntaje de ${hola[2]}`;
    };

    return calcularArray([
        [3, 4, 6, 5555555555556666666666666666666666666],
        [-1, -5, -6, -2],
        [2, 5, 4, 200],
        [(2, 5, 4, 300)]
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
const parrafo = document.getElementById("parrafo");
const presionar = () => {
    // document.write(mostrar);
    modificar.innerHTML = mostrar;
    // parrafo.innerHTML = parrafoUno;
};

boton.addEventListener("click", presionar);
// parrafo.innerHTML = document.write(uno.splice(0, 1));
// parrafoUno = uno.splice(0, 1);