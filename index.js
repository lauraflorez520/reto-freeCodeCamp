function principal() {
    const calcularArray = alumno => {
        var matrizFinal = [];
        for (var i = 0; i < alumno.length; i++) {
            var numeros = alumno[i][0];
            for (var j = 1; j < alumno[i].length; j++) {
                if (alumno[i][j] > numeros) {
                    numeros = alumno[i][j];
                }
            }
            matrizFinal[i] = numeros;
        }

        return `<section><article class="participante__uno participantes"><img src="./img/imagen1.jpg" alt="" class="img"><h4 class="participantes">Luisa con un puntaje de <span>${matrizFinal[0]}</span> </h4></article>
        <article class="participante__dos participantes"><img src="./img/imagen2.jpg" alt="" class="img"><h4 class="participantes">Antonio con un puntaje de  <span>${matrizFinal[1]}</span> </h4></article></section>
        <section><article class="participante__tres participantes"><img src="./img/imagen3.jpg" alt="" class="img"><h4 class="participantes">Camila con un puntaje de <span>${matrizFinal[2]}</span> </h4></article>
        <article class="participante__cuatro participantes"><img src="./img/imagen4.jpg" alt="" class="img"><h4 class="participantes">Mario con un puntaje de <span>${matrizFinal[3]}</span> </h4></article></section>`;
    };

    return calcularArray([
        [3, 4, 6, 56],
        [-1, -5, -6, 66],
        [2, 5, 4, 200],
        [(2, 5, 4, 300)]
    ]);
}

principal();
var mostrar = principal();

const modificar = document.querySelector(".resultado__ganadores");
const boton = document.querySelector(".button");
const parrafo = document.getElementById("parrafo");
const presionar = () => {
    modificar.innerHTML = mostrar;
};

boton.addEventListener("click", presionar);
// parrafo.innerHTML = document.write(uno.splice(0, 1));
// parrafoUno = uno.splice(0, 1);