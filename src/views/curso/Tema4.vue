<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'4. Diseño de instrumentos de evaluación del aprendizaje en entornos virtuales'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden


      .row.mb-4
        .col-12.col-xl-7
          .bg-morado-oscuro.p-4(data-aos="fade-right")
            span.text-white Evaluar el aprendizaje en entornos virtuales exige el diseño de instrumentos que sean meticulosamente estructurados, intrínsecamente pertinentes y estrechamente alineados con los resultados de aprendizaje que se aspiran a alcanzar. La rica diversidad de herramientas digitales a nuestra disposición nos permite diversificar los métodos evaluativos, adaptándose con precisión a los distintos contextos de aprendizaje y a las competencias específicas que deseamos evaluar (Lezcano, 2017).
        .col-5.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')
      
      #t_4_1.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 4.1
          h2 Características de un buen instrumento de evaluación

      p.mb-4 Las características de un buen instrumento de evaluación, son:

      .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
        div.px-4.px-md-5.py-md-3
          SlyderA(tipo="b").bg-white
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen') 
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Claridad
                p Un instrumento de evaluación eficaz debe comunicar con transparencia y sencillez qué se espera del estudiante en términos de desempeño y cómo se valorarán sus logros. Las instrucciones deben ser inequívocas y los criterios de evaluación deben ser explícitos y comprensibles para los estudiantes desde el inicio de la actividad.
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen') 
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Objetividad 
                p Para minimizar la influencia de la subjetividad en el proceso de calificación, es crucial establecer criterios de evaluación precisos y escalas de valoración bien definidas (por ejemplo, rúbricas con descriptores de desempeño claros para cada nivel). Esto asegura una mayor consistencia en la evaluación entre diferentes evaluadores y a lo largo del tiempo.
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen') 
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Relevancia
                p El instrumento de evaluación debe estar directamente relacionado con las competencias y los objetivos de aprendizaje establecidos para el curso o la actividad específica. Debe medir aquello que realmente se pretende que los estudiantes aprendan y sean capaces de hacer al finalizar el proceso formativo.
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen') 
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Validez y confiabilidad
                p Un buen instrumento debe medir lo que se propone evaluar (validez) y hacerlo de manera consistente a lo largo del tiempo y entre diferentes aplicaciones (confiabilidad). Esto asegura que las conclusiones sobre el aprendizaje de los estudiantes sean precisas y significativas.

      #t_4_2.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 4.2
          h2 Tipos de instrumentos más comunes

      p.mb-4 Los tipos de instrumentos de evaluación más comunes son:

      .row.mb-4
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Rúbricas")
              p Las rúbricas son escalas de valoración que describen de manera detallada los diferentes niveles de desempeño para una serie de criterios específicos. Son particularmente útiles para evaluar habilidades complejas, productos de aprendizaje (como ensayos, presentaciones digitales o proyectos) y procesos de aprendizaje (como la participación en debates o el trabajo colaborativo en línea).
            .div(titulo="Listas de cotejo")
              p Estos instrumentos binarios (sí/no, presente/ausente) permiten verificar la presencia o ausencia de ciertos aspectos o elementos específicos en un trabajo o en el desempeño de un estudiante. Son útiles para evaluar habilidades procedimentales o la inclusión de componentes requeridos en una tarea.
            .div(titulo="Cuestionarios")
              p Las herramientas de cuestionarios en línea, con preguntas cerradas (opción múltiple, verdadero/falso, emparejamiento) u objetivas, son eficaces para evaluar la adquisición de conocimientos factuales y la comprensión conceptual. La retroalimentación automática que muchas plataformas ofrecen puede ser valiosa para el aprendizaje formativo.
            .div(titulo="Portafolios digitales")
              p La recopilación sistemática de trabajos realizados por el estudiante a lo largo del curso, presentada en formato digital, ofrece una rica evidencia de su proceso de aprendizaje, su progreso y su capacidad para reflexionar sobre su propio trabajo. Los portafolios pueden incluir una variedad de formatos (textos, imágenes, audios, videos) y permiten una evaluación holística del desarrollo de competencias.
            .div(titulo="Foros evaluativos")
              p Los foros de discusión en línea, cuando se diseñan con criterios de evaluación claros, pueden ser espacios valiosos para evaluar habilidades comunicativas, capacidad de argumentación, pensamiento crítico y la construcción colaborativa del conocimiento a través de la interacción con los pares y el docente (Valcárcel, 2012).
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')

      #t_4_3.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 4.3
          h2 Uso de retroalimentación

      .row.mb-4
        .col-5.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')
        .col-12.col-xl-7
          p.mb-4 La retroalimentación es un componente intrínseco y fundamental del proceso de evaluación. Para ser efectiva, debe ser específica (centrada en aspectos concretos del trabajo), constructiva (sugiriendo formas de mejora), orientadora (guiando al estudiante hacia el logro de los objetivos) y oportuna (entregada en un momento en que el estudiante pueda utilizarla para mejorar su aprendizaje) (Pérez-Chaverri, 2016).
          .d-flex.bg-morado.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-33.svg', alt='Texto descriptivo de la imagen')
            .my-auto.p-4.p-xl-0
              p.pe-xl-3.mb-0 En los EVA, la retroalimentación puede proporcionarse a través de comentarios escritos en las tareas entregadas, mensajes de audio o video, o la participación activa del docente en los foros de discusión.

      #t_4_4.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 4.4
          h2 Evaluación auténtica

      .row.mb-4
        .col-12.col-lg-10.mx-auto
          .row.bg-azul.p-4.py-xl-0(data-aos='fade-up')
            .col-12.col-xl-7.d-flex
              .my-auto 
                span La evaluación auténtica promueve el diseño de tareas y situaciones de evaluación que se asemejen a contextos reales o simulados en los que el estudiante deberá aplicar los conocimientos, resolver problemas complejos o tomar decisiones fundamentadas.
                
            .col-5.d-none.d-xl-block
              img(src='@/assets/curso/unidad/img-34.png', alt='Texto descriptivo de la imagen')  
          .row.bg-azul-oscuro.p-4.py-xl-0(data-aos='fade-up')
            .col-5.d-none.d-xl-block
              img(src='@/assets/curso/unidad/img-35.png', alt='Texto descriptivo de la imagen')  
            .col-12.col-xl-7.d-flex
              .my-auto 
                span Estas estrategias favorecen el desarrollo de competencias que son transferibles a contextos laborales y sociales reales, aumentando la relevancia y el significado del aprendizaje en entornos virtuales (Garcia Peña, 2021).

      p.mb-4 Ejemplos de evaluación auténtica en EVA incluyen la creación de un plan de marketing digital, el diseño de una solución tecnológica para un problema específico, o la elaboración de un informe basado en el análisis de datos reales.
      p.mb-4 <b>Tabla 4.</b> Diferentes aspectos

      .tabla-a
        table
          thead
            tr
              th.text-bold.bg-morado-2.text-white.text-center Aspecto 
              th.text-bold.bg-morado-2.text-white.text-center Descripción clave
              th.text-bold.bg-morado-2.text-white.text-center Ejemplos o elementos asociados
          tbody
            tr
              td.text-bold.bg-morado-claro Características de un buen instrumento de evaluación.
              td.bg-morado-claro Deben ser claros, objetivos, relevantes, y con validez y confiabilidad.
              td.bg-morado-claro 
                div.d-flex
                  img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
                  p.mb-0 Instrucciones comprensibles.
                div.d-flex
                  img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
                  p.mb-0 Criterios definidos (rúbricas).
                div.d-flex
                  img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
                  p.mb-0 Relación con competencias. 
                div.d-flex
                  img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
                  p.mb-0 Resultados precisos y repetibles.
            tr
              td.text-bold.bg-morado-claro Tipos de instrumentos de evaluación.
              td.bg-morado-claro Diferentes herramientas permiten evaluar diversas competencias y formatos de aprendizaje.
              td.bg-morado-claro 
                div.d-flex
                  img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
                  p.mb-0 Rúbricas: niveles de desempeño.
                div.d-flex
                  img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
                  p.mb-0 Listas de cotejo: verificación sí/no.
                div.d-flex
                  img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
                  p.mb-0 Cuestionarios: opción múltiple, VF.
                div.d-flex
                  img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
                  p.mb-0 Portafolios digitales.
                div.d-flex
                  img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
                  p.mb-0 Foros evaluativos.
            tr
              td.text-bold.bg-morado-claro Retroalimentación.
              td.bg-morado-claro Es esencial, debe ser específica, constructiva, orientadora y oportuna.
              td.bg-morado-claro Comentarios escritos, audios, videos, participación en foros.
            tr
              td.text-bold.bg-morado-claro Evaluación auténtica.
              td.bg-morado-claro Simula contextos reales; fomenta el uso práctico de los conocimientos y el desarrollo de competencias transferibles.
              td.bg-morado-claro Diseñar un plan, resolver un caso, analizar datos reales.


      .bg-full-width.border-top.actividad(style='background-color: #ebf1f5; border-top: 5px solid #f5c145 !important')
        .p-4.p-md-5
          #Actividad
            <Actividad :cuestionario='cuestionario'/>

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema4',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Unidad 1',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál de las siguientes opciones describe mejor el concepto de currículo en el ámbito educativo formal?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El conjunto de experiencias de aprendizaje informales que un estudiante adquiere fuera de la escuela.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El listado de asignaturas que un estudiante debe aprobar para obtener un título.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El plan de estudios que estructura los contenidos, objetivos, metodologías y evaluaciones de un programa educativo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La interacción entre estudiantes y profesores en un entorno de aprendizaje.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué se entiende por diseño instruccional en el contexto de la educación virtual?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La creación de materiales didácticos impresos para cursos en línea.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El proceso sistemático para planificar, diseñar, desarrollar e implementar el aprendizaje virtual para alcanzar objetivos definidos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La simple digitalización de contenidos de cursos presenciales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La gestión técnica de las plataformas de aprendizaje en línea.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Un modelo de diseño curricular que se centra en el desarrollo de habilidades y capacidades específicas que los estudiantes deben demostrar en situaciones reales se conoce como:',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Modelo tecnológico.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Modelo comunicativo-interactivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Modelo basado en resultados de aprendizaje.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Modelo basado en competencias.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de los siguientes componentes del currículo requiere una adaptación significativa al pasar de la educación presencial a la virtual para asegurar la participación activa de los estudiantes?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los objetivos de aprendizaje.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Los contenidos del curso.', esCorrecta: false },
            {
              id: 'c',
              texto: 'La metodología de enseñanza.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'El sistema de evaluación.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de las siguientes tendencias actuales en educación digital se centra en adaptar las experiencias de aprendizaje a las necesidades individuales de cada estudiante?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Microaprendizaje.', esCorrecta: false },
            { id: 'b', texto: 'Gamificación.', esCorrecta: false },
            { id: 'c', texto: 'Aprendizaje personalizado.', esCorrecta: true },
            {
              id: 'd',
              texto:
                'Uso de inteligencia artificial para la gestión administrativa.',
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
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
