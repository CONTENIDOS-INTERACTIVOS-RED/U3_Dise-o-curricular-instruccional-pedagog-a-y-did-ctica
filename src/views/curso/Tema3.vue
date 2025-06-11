<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Herramientas digitales para el diseño y la gestión curricular'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-4.mx-0
        .d-none.d-xl-block.col-4.px-0
          img.h-100(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8.d-flex.align-items-center.bg-amarillo.p-4(data-aos="fade-up")
          p.mb-0 La irrupción de la tecnología educativa ha expandido exponencialmente las fronteras del diseño, la implementación y la gestión del currículo en los entornos virtuales. Las herramientas digitales se han convertido en aliados indispensables para planificar cursos de manera eficiente, crear materiales didácticos innovadores, proponer actividades interactivas que fomenten el compromiso, monitorear de cerca el progreso individual y colectivo, y evaluar el aprendizaje de formas diversas y significativas (Marqués, 2020).

      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5

          .row
            .col-12.col-xl-6
              p.mb-4 Para continuar con el estudio de la temática, lo invitamos a escuchar el siguiente pódcast.
              TarjetaAudio.color-secundario.bg-white.mb-3(
                texto='Texto descriptivo del audio'
                tiempo
                :audio="require('../../assets/componentes/audios/audio-ej.mp3')"
                @audio-hover='mostrarIndicadorTarjetaAudio = false'
              )
            .col-6.d-none.d-xl-block
              img(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')
      
      #t_3_1.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 3.1
          h2 Integración de herramientas

      p.mb-4 El uso combinado de estas tecnologías debe responder a una estrategia pedagógica clara. La selección de herramientas no debe depender de modas, sino de su pertinencia para los objetivos del curso, su usabilidad y accesibilidad.
      p.mb-4 Para que pueda repasar las herramientas digitales para el diseño y la gestión curricular, lo invito a revisar la siguiente tabla:
      p.mb-4 <b>Tabla 3.</b> Herramientas digitales para el diseño y la gestión curricular

      .tabla-a
        table
          thead
            tr
              th.text-bold.bg-morado-2.text-white.text-center Categoría
              th.text-bold.bg-morado-2.text-white.text-center Descripción
              th.text-bold.bg-morado-2.text-white.text-center Ejemplos de herramientas
          tbody
            tr
              td.text-bold.bg-morado-claro Sistemas de gestión del aprendizaje (LMS).
              td.bg-morado-claro Plataformas que centralizan la administración del curso virtual. Permiten estructurar contenidos, gestionar actividades, facilitar la comunicación y hacer seguimiento del rendimiento académico. Ofrecen trazabilidad del aprendizaje y opciones de personalización.
              td.bg-morado-claro Moodle, Canvas, Blackboard, Google Classroom.
            tr
              td.text-bold.bg-morado-claro Herramientas para creación de contenido interactivo.
              td.bg-morado-claro Facilitan el diseño de materiales multimedia atractivos y dinámicos, como infografías, videos, cuestionarios gamificados y presentaciones animadas. Aumentan la motivación, la participación y mejoran la comprensión de los contenidos.
              td.bg-morado-claro H5P, Genially, Powtoon, Canva, Prezi.
            tr
              td.text-bold.bg-morado-claro Herramientas colaborativas.
              td.bg-morado-claro Promueven el trabajo en equipo y la co-creación. Permiten que los estudiantes colaboren en tiempo real o de manera asincrónica, compartan recursos y desarrollen proyectos de forma conjunta. Apoyan metodologías como el aprendizaje basado en proyectos y colaborativo.
              td.bg-morado-claro Google Docs, Padlet, Miro, Trello, Jamboard.
            tr
              td.text-bold.bg-morado-claro Herramientas de evaluación digital.
              td.bg-morado-claro Permiten realizar evaluaciones en línea con retroalimentación automática. Facilitan la recolección de datos sobre el desempeño y la implementación de dinámicas gamificadas que refuerzan el aprendizaje.
              td.bg-morado-claro Socrative, Kahoot!, Quizizz, Microsoft Forms, Edmodo.
            tr
              td.text-bold.bg-morado-claro Integración de herramientas.
              td.bg-morado-claro La selección debe responder a una estrategia pedagógica coherente. Se debe considerar la pertinencia según los objetivos de aprendizaje, así como la usabilidad y accesibilidad para todos los estudiantes. No se debe elegir por moda, sino por funcionalidad y valor pedagógico.
              td.bg-morado-claro Uso combinado,según estrategia.      

      p
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
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
