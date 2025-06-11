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


      .bg-full-width.border-top.actividad.mb-5(style='background-color: #ebf1f5; border-top: 5px solid #f5c145 !important')
        .p-4.p-md-5
          #Actividad
            <Actividad :cuestionario='cuestionario'/>

      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' alt='Icono enlace' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://publicaciones.unpa.edu.ar/index.php/ictunpa/article/view/560") Lezcano, L., & Vilanova, G. (2017). Instrumentos de evaluación de aprendizaje en entornos virtuales. Perspectiva de estudiantes y aportes de docentes. Informes Científicos Técnicos-UNPA, 9(1), 1-36.
              
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' alt='Icono enlace' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://revistas.um.es/red/article/view/24721") Onrubia, J. (2005). Aprender y enseñar en entornos virtuales: actividad conjunta, ayuda pedagógica y construcción del conocimiento. Revista de Educación a distancia (RED).
              
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' alt='Icono libro' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/90692") Torres, A. (2015) La construcción de las estrategias de aprendizaje en la formación inicial del profesional de la educación desde los entornos virtuales de aprendizaje. Editorial Universitaria.
              
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' alt='Icono video' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=aWRC2vHLKss&ab_channel=MiradorUniversitarioUNAM") [Vídeo] Mirador Universitario UNAM. (2021, 07 de octubre) Evaluación para el aprendizaje en educación en línea | Temporada 3
            
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

      p

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
      tema: 'Planificación y evaluación del diseño curricular en EVA',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué principio favorece la coherencia entre objetivos, contenidos y evaluación en educación virtual?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Flexibilidad', esCorrecta: false },
            { id: 'b', texto: 'Inclusividad', esCorrecta: false },
            { id: 'c', texto: 'Interactividad', esCorrecta: false },
            { id: 'd', texto: 'Alineación constructiva', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué tipo de evaluación se aplica antes de iniciar un curso para conocer el nivel del estudiante?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Sumativa', esCorrecta: false },
            { id: 'b', texto: 'Formativa', esCorrecta: false },
            { id: 'c', texto: 'Diagnóstica', esCorrecta: true },
            { id: 'd', texto: 'Final', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál herramienta permite crear contenido interactivo como cuestionarios y líneas de tiempo?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Genially', esCorrecta: false },
            { id: 'b', texto: 'Google Meet', esCorrecta: false },
            { id: 'c', texto: 'H5P', esCorrecta: true },
            { id: 'd', texto: 'Canva', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué instrumento es más adecuado para evaluar habilidades complejas en entornos virtuales?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Lista de cotejo', esCorrecta: false },
            { id: 'b', texto: 'Cuestionario', esCorrecta: false },
            { id: 'c', texto: 'Rúbrica', esCorrecta: true },
            { id: 'd', texto: 'Foro', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de las siguientes es una característica distintiva de la educación virtual?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Evaluación escrita', esCorrecta: false },
            { id: 'b', texto: 'Flexibilidad', esCorrecta: true },
            { id: 'c', texto: 'Rigor presencial', esCorrecta: false },
            { id: 'd', texto: 'Uniformidad', esCorrecta: false },
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
