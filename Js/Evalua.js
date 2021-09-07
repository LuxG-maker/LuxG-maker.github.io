const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");
var img = ['../Multimedia/Logo.jpeg', '', '', ''];

const preguntas = [
  {
    pregunta: "1. Como se clasifica la siguiente señal?",
    im : img[0],
    respuestas: {
      a: "Señal informativa",
      b: "Señal preventiva",
      c: "Señal reglamentaria",
      d: "Señal transitoria",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "2. Cuál es la capital de Irak?",
    im : img[1],
    respuestas: {
      a: "Kuwait",
      b: "Dubai",
      c: "Bagdad",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "3. Cuál es la capital de Noruega?",
    im : img[2],
    respuestas: {
      a: "Roma",
      b: "Copenague",
      c: "Estocolmo",
      d: "Oslo",
    },
    respuestaCorrecta: "d",
  },
  {
    pregunta: "4. Cuál es la capital de Serbia?",
    im : img[3],
    respuestas: {
      a: "Belgrado",
      b: "Zagreb",
      c: "Kabul",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "5. Cuál es la capital de Australia?",
    im : img[4],
    respuestas: {
      a: "Sidney",
      b: "Zurich",
      c: "Canberra",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "6. Cuál es la capital de Canadá?",
    im : img[5],
    respuestas: {
      a: "Toronto",
      b: "Montreal",
      c: "Ontario",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "7. Cuál es la capital de Vietnam?",
    im : img[6],
    respuestas: {
      a: "Puket",
      b: "Ho Chin Ming",
      c: "Pan Lao Kung",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "8. Cuál es la capital de China?",
    im : img[7],
    respuestas: {
      a: "Shangai",
      b: "Pekín",
      c: "Seul",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "9. Cuál es la capital de Pakistan?",
    im : img[8],
    respuestas: {
      a: "Islamabad",
      b: "Kuwait",
      c: "Kabul",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "10. Cuál es la capital de Marruecos?",
    im : img[9],
    respuestas: {
      a: "Casablanca",
      b: "Rabat",
      c: "Kabul",
    },
    respuestaCorrecta: "b",
  },
];

function mostrarTest() {
  const preguntasYrespuestas = [];
  const imagen = [];

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const respuestas = [];

    for (letraRespuesta in preguntaActual.respuestas) {
      respuestas.push(
        `<label>
                  <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}" />
                  ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}
              </label>`
      );
    }
    preguntasYrespuestas.push(
      `<div class="cuestion">${preguntaActual.pregunta}</div>
        <img src"${preguntaActual.im}"></img>
          <div class="respuestas"> ${respuestas.join("")} </div>
          `
    );
  });

  contenedor.innerHTML = preguntasYrespuestas.join("");
}

mostrarTest();

function mostrarResultado() {
  const respuestas = contenedor.querySelectorAll(".respuestas");
  let respuestasCorrectas = 0;

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const todasLasRespuestas = respuestas[numeroDePregunta];
    const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
    const respuestaElegida = (
      todasLasRespuestas.querySelector(checkboxRespuestas) || {}
    ).value;

    if (respuestaElegida === preguntaActual.respuestaCorrecta) {
      respuestasCorrectas++;

      respuestas[numeroDePregunta].style.color = "blue";
    } else {
      respuestas[numeroDePregunta].style.color = "red";
    }
  });

  resultadoTest.innerHTML =
    "Usted ha acertado " +
    respuestasCorrectas +
    " preguntas de un total de " +
    preguntas.length;
}

botonRes.addEventListener("click", mostrarResultado);
