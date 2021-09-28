const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");
var img = "../Multimedia/Logo.jpeg";

const preguntas = [
  {
    pregunta: "1. Como se clasifica la siguiente señal?",
    im : "../Multimedia/Logo.jpeg",
    respuestas: {
      a: "Señal informativa",
      b: "Señal preventiva",
      c: "Señal reglamentaria",
      d: "Señal transitoria",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "2. ¿Cómo  se clasifica la siguiente señal?",
    im : img[1],
    respuestas: {
      a: "Señal informativa",
      b: "Señal preventiva",
      c: "Señal reglamentaria",
      d: "Señal transitoria",
    },
    respuestaCorrecta: "d",
  },
  {
    pregunta: "3. ¿cómo se clasifica la siguiente señal? ",
    im : img[2],
    respuestas: {
      a: "Señal informativa",
      b: "Señal preventiva",
      c: "Señal reglamentaria",
      d: "Señal transitoria",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "4. ¿cómo se clasifica la siguiente señal?",
    im : img[3],
    respuestas: {
      a: "Señal informativa",
      b: "Señal preventiva",
      c: "Señal reglamentaria",
      d: "Señal transitoria",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "5. ¿cómo se clasifica la siguiente señal?",
    respuestas: {
      a: "Señal informativa",
      b: "Señal preventiva",
      c: "Señal reglamentaria",
      d: "Señal transitoria",
    },
    respuestaCorrecta: "d",
  },
  {
    pregunta: "6. ¿cómo se clasifica la siguiente señal?",
    respuestas: {
      a: "Señal informativa",
      b: "Señal preventiva",
      c: "Señal reglamentaria",
      d: "Señal transitoria",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "7. ¿cómo se clasifica la siguiente señal?",
    respuestas: {
      a: "Señal informativa",
      b: "Señal preventiva",
      c: "Señal reglamentaria",
      d: "Señal transitoria",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "8. ¿cómo se clasifica la siguiente señal?",
    respuestas: {
      a: "Señal informativa",
      b: "Señal preventiva",
      c: "Señal reglamentaria",
      d: "Señal transitoria",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "9. ¿cómo se clasifica la siguiente señal?",
    respuestas: {
      a: "Señal informativa",
      b: "Señal preventiva",
      c: "Señal reglamentaria",
      d: "Señal transitoria",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "10. ¿cómo se clasifica la siguiente señal?",
    respuestas: {
      a: "Señal informativa",
      b: "Señal preventiva",
      c: "Señal reglamentaria",
      d: "Señal transitoria",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "11. ¿cómo se clasifica la siguiente señal?",
    respuestas: {
      a: "Señal informativa",
      b: "Señal preventiva",
      c: "Señal reglamentaria",
      d: "Señal transitoria",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "12. ¿cómo se clasifica la siguiente señal?",
    respuestas: {
      a: "Señal informativa",
      b: "Señal preventiva",
      c: "Señal reglamentaria",
      d: "Señal transitoria",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "13. ¿cómo se clasifica la siguiente señal?",
    respuestas: {
      a: "Señal informativa",
      b: "Señal preventiva",
      c: "Señal reglamentaria",
      d: "Señal transitoria",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "14. ¿cómo se clasifica la siguiente señal?",
    respuestas: {
      a: "Señal informativa",
      b: "Señal preventiva",
      c: "Señal reglamentaria",
      d: "Señal transitoria",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "15. ¿cómo se clasifica la siguiente señal?",
    respuestas: {
      a: "Señal informativa",
      b: "Señal preventiva",
      c: "Señal reglamentaria",
      d: "Señal transitoria",
    },
    respuestaCorrecta: "d",
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
  let Nota = 0;

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

  Nota = respuestasCorrectas * 3.33;

  resultadoTest.innerHTML =
    "Usted ha acertado " +
    respuestasCorrectas +
    " preguntas de un total de " +
    preguntas.length + " su nota es de: " + Math.round(Nota);
}

botonRes.addEventListener("click", mostrarResultado);
