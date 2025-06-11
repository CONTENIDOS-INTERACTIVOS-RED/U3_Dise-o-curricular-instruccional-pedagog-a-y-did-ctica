export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Planificación y evaluación del diseño curricular en EVA',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Principios de planificación curricular en educación virtual',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Evaluación y seguimiento del diseño instruccional',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Seguimiento y monitoreo',
            desarrolloContenidos: true,
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Indicadores de logro',
            desarrolloContenidos: true,
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Mejora continua',
            desarrolloContenidos: true,
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Herramientas digitales para el diseño y la gestión curricular',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Integración de herramientas',
            desarrolloContenidos: true,
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Diseño de instrumentos de evaluación del aprendizaje en entornos virtuales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Características de un buen instrumento de evaluación',
            desarrolloContenidos: true,
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Tipos de instrumentos más comunes',
            desarrolloContenidos: true,
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Uso de retroalimentación',
            desarrolloContenidos: true,
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Evaluación auténtica',
            desarrolloContenidos: true,
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Belloch, C. (S.f.). Diseño Instruccional. Obtenido de https://www.uv.es/bellochc/pedagogia/EVA4.pdf',
      link: 'https://www.uv.es/bellochc/pedagogia/EVA4.pdf',
    },
    {
      referencia:
        'UNESCO. (2016). Qué hace el currículo de calidad. Obtenido de UNESDOC Biblioteca Digital: https://unesdoc.unesco.org/ark:/48223/pf0000243975_spa',
      link: 'https://unesdoc.unesco.org/ark:/48223/pf0000243975_spa',
    },
    {
      referencia:
        'González Bernal, M. I. (2006). Currículo basado en competencias: una experiencia en educación universitaria. Educación y Educadores , 9 (2), 95-117., 95-117. Obtenido de https://www.redalyc.org/pdf/834/83490209.pdf',
      link: 'https://www.redalyc.org/pdf/834/83490209.pdf',
    },
    {
      referencia:
        'Márquez-Fúnes, K., & Florez-Nisperuza, EP. (2021). Perspectivas curriculares y didácticas de las salidas de campo en las licenciaturas en Ciencias Sociales del Caribe. Entramado, 17(1), 136-148. Obtenido de https://doi.org/10.18041/1900-3803/entramado.1.7160',
      link: 'https://doi.org/10.18041/1900-3803/entramado.1.7160',
    },
    {
      referencia:
        'Martínez-Sum, S. d. (2019). Diseño, desarrollo e innovación del currículum en la. Proceedings of the Digital World Learning Conference CIEV. Obtenido de http://biblioteca.galileo.edu/tesario/bitstream/123456789/958/1/10.pdf',
      link:
        'http://biblioteca.galileo.edu/tesario/bitstream/123456789/958/1/10.pdf',
    },
    {
      referencia:
        'Navarro Reyes, Y. P. (2010). Una mirada a la planificación estratégica curricular. Telos, 12(2), 202-2016. Obtenido de https://www.redalyc.org/pdf/993/99315569006.pdf',
      link: 'https://www.redalyc.org/pdf/993/99315569006.pdf',
    },
    {
      referencia:
        'Luna Rizo, M., Ayala Ramírez, S., & Rosas Chávez, P. (2021). El Diseño Instruccional Elemento clave para la Innovación en el Aprendizaje: Modelos y Enfoques. Guadalajara. Obtenido de https://mta.udg.mx/sites/default/files/adjuntos/el_diseno_instruccional_interactivo.pdf',
      link:
        'https://mta.udg.mx/sites/default/files/adjuntos/el_diseno_instruccional_interactivo.pdf',
    },
    {
      referencia:
        'García-Pinilla, J. I., Pineda Miranda, B. A., Rodríguez-Jiménez, O. R., & Nicholls-Rodríguez, D. (2023). Desarrollo de competencias tecnológicas en docentes utilizando un modelo de diseño instruccional. Educación y Educadores, 26(1), e2613. https://doi.org/10.5294/edu.2023.26.1.3',
      link: 'https://doi.org/10.5294/edu.2023.26.1.3',
    },
    {
      referencia:
        'Lima, M. G. (2010). El modelo de diseño instruccional ASSURE aplicado a la educación a distancia. Tlatemoani: revista académica de investigación. Obtenido de https://dialnet.unirioja.es/servlet/articulo?codigo=7302838',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=7302838',
    },
    {
      referencia:
        'Molenda, M. (2003). En busca del esquivo modelo ADDIE. Indiana. Obtenido de https://www.researchgate.net/publication/251405713_In_search_of_the_elusive_ADDIE_model',
      link:
        'https://www.researchgate.net/publication/251405713_In_search_of_the_elusive_ADDIE_model',
    },
    {
      referencia:
        'Gimeno Sacristán, J. (2010). ¿Qué significa el currículum? Sinéctica(34). Obtenido de https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S1665-109X2010000100009',
      link:
        'https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S1665-109X2010000100009',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (S.f). Currículo. Obtenido de https://www.mineducacion.gov.co/1621/article-79413.html#:~:text=Curr%C3%ADculo%20es%20el%20conjunto%20de,las%20pol%C3%ADticas%20y%20llevar%20a',
      link: 'https://www.mineducacion.gov.co/1621/article-79413.html',
    },
    {
      referencia:
        'Núñez, M. E. (2016). Tendencias en la personalización de los entornos de aprendizaje. Universidades, 66(70), 69-88. Obtenido de http://udualerreu.org/index.php/universidades/article/download/427/417',
      link:
        'http://udualerreu.org/index.php/universidades/article/download/427/417',
    },
    {
      referencia:
        'Viviana Betancur-Chicué, V. (2023). Características del Diseño de Estrategias de microaprendizaje en escenarios educativos: revisión sistemática. RIED-Revista Iberoamericana de Educación a Distancia, 201-222. Obtenido de https://revistas.uned.es/index.php/ried/article/view/34056',
      link: 'https://revistas.uned.es/index.php/ried/article/view/34056',
    },
  ],
  glosario: [
    {
      termino: 'Alineación Constructiva',
      significado:
        'Principio de diseño curricular que enfatiza la coherencia entre los objetivos de aprendizaje, las actividades de enseñanza y aprendizaje, y los métodos de evaluación.',
    },
    {
      termino: 'Aprendizaje Asincrónico',
      significado:
        'Tipo de aprendizaje que no ocurre en tiempo real, permitiendo a los estudiantes participar en diferentes momentos y a su propio ritmo (ej. foros de discusión, tareas con plazos flexibles).',
    },
    {
      termino: 'Aprendizaje Auténtico',
      significado:
        'Enfoque pedagógico y de evaluación que involucra tareas y situaciones similares a las que los estudiantes enfrentarían en el mundo real o en contextos profesionales.',
    },
    {
      termino: 'Diseño Curricular Centrado en el Estudiante',
      significado:
        'Enfoque de planificación que prioriza las necesidades, intereses, estilos de aprendizaje y ritmos individuales de los estudiantes.',
    },
    {
      termino: 'Diseño Instruccional',
      significado:
        'Proceso sistemático de planificación, desarrollo, implementación y evaluación de experiencias de aprendizaje y materiales educativos.',
    },
    {
      termino: 'Entorno Virtual de Aprendizaje (EVA)',
      significado:
        'Espacio digital en línea utilizado para facilitar y gestionar procesos de enseñanza y aprendizaje (también conocido como LMS o plataforma de e-learning).',
    },
    {
      termino: 'Evaluación Auténtica',
      significado:
        'Tipo de evaluación que requiere que los estudiantes apliquen conocimientos y habilidades en contextos realistas o simulados.',
    },
    {
      termino: 'Evaluación Diagnóstica',
      significado:
        'Evaluación que se realiza al inicio de un curso o unidad para identificar los conocimientos previos, habilidades, intereses y necesidades de los estudiantes.',
    },
    {
      termino: 'Evaluación Formativa',
      significado:
        'Evaluación continua e integrada en el proceso de enseñanza-aprendizaje, cuyo objetivo principal es monitorear el progreso del estudiante y proporcionar retroalimentación para mejorar el aprendizaje y la enseñanza.',
    },
    {
      termino: 'Evaluación Sumativa',
      significado:
        'Evaluación que se realiza al final de un período de instrucción (unidad, curso) para determinar el grado en que los estudiantes han alcanzado los objetivos de aprendizaje.',
    },
    {
      termino: 'Flexibilidad Curricular',
      significado:
        'Capacidad del currículo para adaptarse a diferentes contextos, necesidades de los estudiantes y avances en el conocimiento y la tecnología.',
    },
    {
      termino: 'Herramientas Colaborativas Digitales',
      significado:
        'Aplicaciones o plataformas en línea que facilitan el trabajo en equipo, la comunicación y la creación conjunta de contenido (ej. Google Docs, Padlet, Miro).',
    },
    {
      termino: 'Herramientas de Creación de Contenido Interactivo',
      significado:
        'Software o plataformas que permiten desarrollar materiales didácticos dinámicos y participativos (ej. H5P, Genially, Powtoon).',
    },
    {
      termino: 'Herramientas de Evaluación Digital',
      significado:
        'Plataformas o aplicaciones en línea que facilitan la creación, aplicación y gestión de evaluaciones, a menudo con retroalimentación automática (ej. Socrative, Kahoot!, Quizizz).',
    },
    {
      termino: 'Inclusión Educativa',
      significado:
        'Enfoque que busca garantizar la participación y el aprendizaje de todos los estudiantes, respetando y valorando la diversidad.',
    },
    {
      termino: 'Indicadores de Logro',
      significado:
        'Criterios específicos, medibles, alcanzables, relevantes y con plazos definidos (SMART) que señalan el progreso hacia el cumplimiento de los objetivos de aprendizaje.',
    },
    {
      termino: 'Instrumentos de Evaluación',
      significado:
        'Herramientas o técnicas utilizadas para recopilar evidencia sobre el aprendizaje de los estudiantes (ej. rúbricas, listas de cotejo, cuestionarios, portafolios).',
    },
    {
      termino: 'Metadatos',
      significado:
        'Información descriptiva asociada a un recurso digital para facilitar su búsqueda, organización y gestión.',
    },
    {
      termino: 'Metodologías Activas',
      significado:
        'Enfoques pedagógicos que involucran activamente a los estudiantes en su proceso de aprendizaje, fomentando la participación, la exploración y la construcción del conocimiento (ej. aprendizaje basado en proyectos, aprendizaje colaborativo).',
    },
    {
      termino: 'Monitoreo del Diseño Instruccional',
      significado:
        'Proceso continuo de observación y seguimiento de la implementación del diseño del curso para identificar fortalezas, debilidades y áreas de mejora.',
    },
    {
      termino: 'Personalización del Aprendizaje',
      significado:
        'Adaptación de la enseñanza y los recursos a las necesidades, intereses y ritmos individuales de cada estudiante.',
    },
    {
      termino: 'Planificación Curricular',
      significado:
        'Proceso sistemático de organización y estructuración de los elementos del currículo (objetivos, contenidos, metodologías, evaluación) para guiar el proceso de enseñanza y aprendizaje.',
    },
    {
      termino: 'Plataforma de Gestión del Aprendizaje (LMS)',
      significado: '(Ver Entorno Virtual de Aprendizaje - EVA).',
    },
    {
      termino: 'Recursos Educativos Digitales (RED)',
      significado:
        'Materiales de enseñanza, aprendizaje o investigación que se encuentran en formato digital (ej. videos, simulaciones, presentaciones interactivas).',
    },
    {
      termino: 'Retroalimentación (Feedback)',
      significado:
        'Información proporcionada a los estudiantes sobre su desempeño con el objetivo de ayudarles a comprender sus fortalezas y áreas de mejora.',
    },
    {
      termino: 'Rúbricas',
      significado:
        'Instrumentos de evaluación que describen diferentes niveles de desempeño para criterios específicos, proporcionando una guía clara para la evaluación y la retroalimentación.',
    },
    {
      termino: 'Seguimiento del Aprendizaje',
      significado:
        'Proceso de monitorear el progreso de los estudiantes a lo largo del curso, identificando patrones de aprendizaje y áreas donde necesitan apoyo.',
    },
  ],
}
