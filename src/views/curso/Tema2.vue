<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Evaluación y seguimiento del diseño instruccional'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          p.mb-4 La evaluación y el seguimiento del diseño instruccional constituyen la brújula que guía la calidad del aprendizaje en los entornos virtuales. Estos procesos no son eventos aislados al final de un curso, sino una espiral continua de reflexión y ajuste que se desarrolla a lo largo de toda la implementación del currículo (Anderson, 2011).
          .d-flex.bg-verde.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-15.svg', alt='Texto descriptivo de la imagen')
            .my-auto.p-4.p-xl-0
              p.pe-xl-3.mb-0 Su propósito fundamental es recopilar información valiosa sobre la efectividad de las estrategias pedagógicas, la usabilidad de los recursos digitales y el progreso del aprendizaje de los estudiantes, con el fin último de optimizar la experiencia educativa.
          span Los tipos de evaluación en el diseño instruccional, son:

      .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
        div.px-4.px-md-5.py-md-3
          SlyderA(tipo="b").bg-white
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Diagnóstica
                p Esta evaluación se despliega al inicio del curso, como un escaneo inicial para conocer a fondo los saberes previos, los intereses particulares y las necesidades específicas de los estudiantes. La información recabada en esta etapa es crucial para realizar ajustes precisos en el diseño del curso, adaptar los contenidos y personalizar la enseñanza, buscando conectar el nuevo conocimiento con el bagaje existente de los aprendices. En un EVA, esto puede lograrse a través de cuestionarios en línea, foros de presentación con preguntas orientadoras o actividades exploratorias sobre los temas centrales.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Formativa
                p La evaluación formativa es el hilo conductor que acompaña al estudiante a lo largo de su proceso de aprendizaje, actuando como un espejo que refleja sus avances, señala sus dificultades y revela oportunidades de mejora (López, 2018). Su rasgo distintivo es la retroalimentación constante y oportuna, que puede manifestarse en la revisión detallada de actividades entregadas, la moderación de discusiones en foros, la observación de la participación en tareas colaborativas, o la utilización de quizzes interactivos con respuestas explicativas. En el contexto virtual, herramientas como la analítica de aprendizaje pueden ofrecer información valiosa sobre el compromiso y las áreas donde los estudiantes necesitan más apoyo.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Sumativa
                p La evaluación sumativa se aplica al finalizar una unidad de aprendizaje o al concluir el curso completo, con el objetivo primordial de verificar el grado de cumplimiento de los objetivos de aprendizaje previamente establecidos. Generalmente, se expresa en calificaciones numéricas o en la emisión de certificaciones que acrediten el aprendizaje alcanzado. En un EVA, esto puede tomar la forma de exámenes en línea, la entrega de proyectos finales digitales, la creación de portafolios electrónicos que evidencian el aprendizaje a lo largo del tiempo, o la participación en evaluaciones entre pares con criterios definidos (Domínguez-Rodríguez, 2022).
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-18.png', alt='Texto que describa la imagen')

      #t_2_1.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.1
          h2 Seguimiento y monitoreo

      .row.mb-4
        .col-3.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')
        .col-12.col-xl-9
          p.mb-4 El seguimiento y monitoreo implican una observación sistemática y continua del desarrollo del curso virtual. Esto abarca el análisis del progreso general, el nivel de participación activa de los estudiantes en las diferentes actividades propuestas, la funcionalidad y usabilidad de las herramientas tecnológicas integradas y la eficacia pedagógica de los materiales (Sagastume, 2019).
          .mb-4.bg-amarillo.p-4(data-aos="fade-left")
            span Para llevar a cabo este seguimiento de manera efectiva en un EVA, se pueden emplear diversos instrumentos, tales como bitácoras de seguimiento del docente, registros automáticos de la actividad de los estudiantes en la plataforma (logs de acceso, tiempo dedicado a las tareas, interacciones en foros), encuestas de satisfacción periódicas, y el análisis cualitativo de las interacciones en los espacios de comunicación.
          span En la siguiente tabla, observe cada aspecto del seguimiento:

      p.mb-4 <b>Tabla 2.</b> Aspecto del seguimiento

      .tabla-a.mb-4
        table
          thead
            tr
              th.text-bold.bg-morado-2.text-white.text-center Aspecto del seguimiento 
              th.text-bold.bg-morado-2.text-white.text-center Descripción
          tbody
            tr
              td.text-bold.bg-morado-claro  Participación de los estudiantes.
              td.bg-morado-claro Frecuencia y calidad de las interacciones.
            tr
              td.text-bold.bg-morado-claro Progreso del aprendizaje.
              td.bg-morado-claro Calificaciones y desempeño en actividades.
            tr
              td.text-bold.bg-morado-claro Desempeño del profesor.
              td.bg-morado-claro Calidad de la retroalimentación, claridad de las explicaciones.
            tr
              td.text-bold.bg-morado-claro Funcionamiento de la plataforma.
              td.bg-morado-claro Disponibilidad, usabilidad y accesibilidad.
            tr
              td.text-bold.bg-morado-claro Calidad de los materiales.
              td.bg-morado-claro Claridad, relevancia y actualidad de los contenidos.
            tr
              td.text-bold.bg-morado-claro Satisfacción de los estudiantes.
              td.bg-morado-claro Percepciones y opiniones sobre el curso.

      #t_2_2.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.2
          h2 Indicadores de logro

      .row.bg-azul.p-4.py-xl-0.mb-4(data-aos='fade-up')
        .col-12.col-xl-8.d-flex
          .my-auto
            span Para que la evaluación sea verdaderamente efectiva y significativa, es imprescindible definir indicadores de logro que sean claros, medibles y directamente observables. Estos indicadores deben estar intrínsecamente alineados con los objetivos de aprendizaje que se persiguen y con las competencias que se han definido en el diseño curricular. En un EVA, los indicadores de logro pueden referirse a la calidad de las contribuciones en foros de discusión (según rúbricas específicas), la precisión y profundidad del análisis en ensayos o informes digitales, el nivel de colaboración demostrado en proyectos grupales en línea, o la puntuación obtenida en quizzes interactivos que evalúan la comprensión conceptual.
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-20.png', alt='Texto descriptivo de la imagen')  

      #t_2_3.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.3
          h2 Mejora continua

      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          p.mb-4 El proceso de evaluación y seguimiento no debe ser un fin en sí mismo, sino un motor para la mejora permanente del curso virtual. Esto implica un ciclo continuo de recolección sistemática de datos, análisis reflexivo de la información obtenida y la utilización de estos hallazgos para realizar ajustes oportunos y fundamentados en el diseño instruccional (Bates, 2015).
          .d-flex.bg-verde.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-22.svg', alt='Texto descriptivo de la imagen')
            .my-auto.p-4.p-xl-0
              p.pe-xl-3.mb-0 En un EVA, la mejora continua puede traducirse en la modificación de actividades que generan baja participación, la revisión de materiales que resultan confusos para los estudiantes (identificado a través del feedback o la analítica), o la incorporación de nuevas herramientas digitales que faciliten la interacción y el aprendizaje.

      p.mb-4 Con el fin de que repase los temas vistos sobre la evaluación y seguimiento del diseño instruccional, observe la siguiente infografía:

      ImagenInfografica.color-secundario.mb-4.bg-white
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/unidad/img-23.png', alt='Descripción de la imagen')
        .tarjeta.bg-white.p-4(x='7%' y='31%' numero='+')
          .h5.mb-3 Tipos de evaluación en un diseño instruccional
          div.d-flex
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
            p.mb-0 Diagnóstica.
          div.d-flex
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
            p.mb-0 Formativa.
          div.d-flex
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
            p.mb-0 Sumativa.
          div.d-flex
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
            p.mb-0 Herramientas: exámenes en línea, proyectos, portafolios digitales, entre otras.
        .tarjeta.bg-white.p-4(x='89%' y='33%' numero='+')
          .h5.mb-2 Indicadores de logro de un diseño instruccional
          p.mb-3 Deben ser claros, medibles y alineados con los objetivos del curso.
          p.mb-3 Ejemplos en EVA:
          div.d-flex
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
            p.mb-0 Calidad de aportes en foros.
          div.d-flex
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
            p.mb-0 Profundidad de análisis en ensayos.
          div.d-flex
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
            p.mb-0 Colaboración en proyectos grupales.
          div.d-flex
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
            p.mb-0 Resultados en quizzes.
        .tarjeta.bg-white.p-4(x='84.5%' y='53%' numero='+')
          .h5.mb-3 Mejora continua
          p.mb-3 La evaluación y el monitoreo alimentan mejoras en el diseño, implica recolectar datos, analizar y hacer ajustes.
          p.mb-3 Acciones:
          div.d-flex
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
            p.mb-0 Modificar actividades con baja participación.  
          div.d-flex
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
            p.mb-0 Revisar materiales confusos.
          div.d-flex
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
            p.mb-0 Incluir nuevas herramientas digitales que faciliten el aprendizaje.
        .tarjeta.bg-white.p-4(x='10%' y='71%' numero='+')
          .h5.mb-3 Seguimiento y monitoreo de un diseño instruccional
          div.d-flex
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
            p.mb-0 Observación continua del desarrollo del curso.
          div.d-flex
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
            p.mb-0 Evaluación del progreso, participación, eficacia y usabilidad.
          div.d-flex
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
            p.mb-0 Herramientas: bitácoras del docente, logs de acceso y tiempo en plataforma, encuestas de satisfacción, análisis de interacciones en foros.

      p
     
  
  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
