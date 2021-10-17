const preguntas = document.querySelectorAll('.preguntas .contenedor-pregunta');
preguntas.forEach((pregunta) => {
  pregunta.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('activa');

    const respuesta = pregunta.querySelector('.respuesta ');
    const alturaRealRespuesta = respuesta.scrollHeight;


    if (!respuesta.style.maxHeight) {
      //Si esta vacio el maxHeight entonces ponemos un valor.
      respuesta.style.maxHeight = alturaRealRespuesta + 'px';
    } else {
      respuesta.style.maxHeight = ""
    }

    //[Opcional] reiniciamos las demas preguntas.

    preguntas.forEach((elemento) => {
      //Solamante queremos ejecutar el codigo para las preguntas que no se
      //sean la pregunta a que le dimos click.
      if (pregunta !== elemento) {
        elemento.classList.remove('activa');
        elemento.querySelector('.respuesta').style.maxHeight = null;
      }
    })



  })
})