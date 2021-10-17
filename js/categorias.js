const categorias = document.querySelectorAll('#categorias .categoria');
/* querySelectorAll: sirve para adquirir todas
las catergorias no solo las primeras ('#aca va el id .categoria')
.categoria agrega  a todas las categorias */
const contenedorPreguntas = document.querySelectorAll('.contenedor-preguntas');
let categoriaActiva = null;

categorias.forEach((categoria) =>  {
  categoria.addEventListener('click', (e) =>{
    categorias.forEach((elemento) => {
      elemento.classList.remove('activa')
    })

    e.currentTarget.classList.toggle('activa');
    categoriaActiva = categoria.dataset.categoria;
    
    //activamos el contenedor de preguntas que corresponde.
    contenedorPreguntas.forEach((contenedor) => {
      if(contenedor.dataset.categoria === categoriaActiva){
        contenedor.classList.add('activo');
      }else{
        contenedor.classList.remove('activo');
      }
    })
  });
});
