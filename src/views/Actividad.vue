<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión y aplicación de los conceptos relacionados con el uso del entorno de Microsoft PowerPoint, la gestión estructural de presentaciones, el diseño básico y la organización de archivos, mediante preguntas conceptuales y casos de uso asociados a contextos académicos y productivos.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la función principal de guardar un archivo en formato PPSX?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permitir la edición simultánea entre varios colaboradores de una organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Iniciar la presentación de forma directa sin pasar por la interfaz de edición.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Comprimir automáticamente todas las imágenes para reducir el peso del archivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Asegurar que el archivo sea compatible con versiones de Office anteriores a 2010.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'Se desea modificar el logotipo en todas las diapositivas de una presentación de forma simultánea. ¿Qué herramienta debe utilizarse?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Temas prediseñados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Panel de selección.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Patrón de diapositivas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Estilos rápidos de imagen.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué combinación de teclas permite duplicar un objeto o una diapositiva seleccionada?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ctrl + M.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ctrl + Shift + G.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Alt + Shift + Flecha Abajo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ctrl + D.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'Al importar diapositivas mediante la función "Volver a utilizar diapositivas", ¿qué sucede si NO se marca la casilla "Mantener formato de origen"?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La diapositiva importada conservará sus colores y fuentes originales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El sistema impedirá la importación por conflicto de diseño.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La diapositiva adoptará el tema y estilo de la presentación actual.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Las diapositivas se insertarán como imágenes no editables.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es la principal ventaja de utilizar el formato PDF para distribuir una presentación?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mantiene la integridad del diseño y evita modificaciones no autorizadas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Permite que el receptor edite los gráficos de SmartArt fácilmente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Conserva todas las transiciones y animaciones complejas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Es el único formato que permite la reproducción de videos incrustados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            'Según el enfoque del componente formativo, Microsoft PowerPoint debe entenderse principalmente como:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un proyector de diapositivas básico para apoyo de oradores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un lienzo de diseño visual y herramienta de comunicación estratégica.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un editor exclusivo de texto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Un <i>software</i> de edición fotográfica y de imágenes fácil de usar con enfoque de edición.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: 'La narrativa visual en PowerPoint permite principalmente:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar la cantidad de texto en las diapositivas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la carga cognitiva y mejorar la comprensión.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir completamente la exposición oral a través de presentaciones grabadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar la necesidad de estructura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: 'Una presentación informativa se caracteriza por:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Transmitir datos de forma objetiva y clara.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Buscar persuadir emocionalmente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Enseñar competencias prácticas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Presentar únicamente gráficos decorativos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: 'La cinta de opciones se organiza en:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ventanas flotantes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pestañas, grupos y comandos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Capas visuales en paneles laterales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Paneles ocultos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'Para agrupar varios objetos gráficos en una sola unidad, se debe presionar:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ctrl + G.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ctrl + Alt + V.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'D) Ctrl + U.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ctrl + Shift + ].',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'La herramienta <b>"Comprimir imágenes"</b> tiene como uno de sus objetivos principales:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cambiar el formato de JPG a vectores de alta resolución.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminar las áreas recortadas de las imágenes para liberar espacio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Aplicar filtros artísticos de forma masiva a toda la presentación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Corregir automáticamente el brillo y contraste de las fotografías.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué tipo de presentación tiene como objetivo principal influir en las creencias o comportamientos del público para facilitar una decisión?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Persuasiva.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Informativa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ejecutiva.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Formativa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: 'El comando <b>"Alt + F10"</b> se utiliza técnicamente para:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '.PPTX',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '.POTX',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '.PPSX',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '.PDF',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué utilidad tiene el "Panel de Notas" en la interfaz de trabajo?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Configurar los hipervínculos que irán en el índice interactivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Almacenar información adicional que no es visible para el público en la proyección.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Listar los errores de ortografía detectados en la diapositiva actual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Controlar el orden de las capas de los objetos gráficos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Una organización requiere que todos sus empleados generen reportes mensuales con el mismo tipo de letra, el logo en la esquina superior derecha y un fondo azul específico. ¿Cuál es la estrategia más eficiente para lograr esto?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Diseñar una Plantilla Maestra (.POTX) y distribuirla para que sea utilizada como base en cada reporte.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Enviar un manual de marca en PDF para que cada empleado configure su presentación manualmente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Crear un tema personalizado y pedir a los usuarios que busquen los colores hexadecimales cada vez.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Pedir a los empleados que copien y peguen las diapositivas de un reporte viejo en uno nuevo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
