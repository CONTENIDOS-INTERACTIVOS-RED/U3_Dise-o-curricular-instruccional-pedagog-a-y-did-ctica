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
        'Silva Quiroz, J. y. (2017). Una propuesta de modelo para introducir metodologías activas en educación superior. Innovación educativa (México, DF).',
      link:
        'https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S1665-26732017000100117',
    },
    {
      referencia:
        'ProFuturo. (5 de abril de 2024). Modelos pedagógicos en la era digital.',
      link:
        'https://profuturo.education/observatorio/enfoques/modelos-pedagogicos-en-la-era-digital/',
    },
    {
      referencia:
        'Alejos, C. &. (2023). Estrategias metodológicas de enseñanza híbrida universitaria.',
      link:
        'https://alicia.concytec.gob.pe/vufind/Record/UCVV_769f5e76bded871deca1ed7e9335c904',
    },
    {
      referencia:
        'Caballero, J. E. (2022). Herramientas digitales más eficaces en el proceso enseñanza-aprendizaje. Horizontes. Revista de Investigación En Ciencias de La Educación, 6(23), 669-678.',
      link:
        'https://revistahorizontes.org/index.php/revistahorizontes/article/view/505',
    },
    {
      referencia:
        'Sierra, C.A. (2012) Educación virtual, aprendizaje autónomo y construcción de conocimiento. Editorial Politécnico Grancolombiano.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/70988',
    },
    {
      referencia:
        'Anderson, T. y. (2011). Tres generaciones de pedagogía de educación a distancia. Revista Internacional de Investigación en Aprendizaje Abierto y Distribuido, 12(3), 80-97.',
      link:
        'https://www.erudit.org/en/journals/irrodl/2011-v12-n3-irrodl05132/1067616ar/abstract/',
    },
    {
      referencia:
        'ÉXITO EDUCATIVO . (31 de mayo de 2023). Redefiniendo la educación: La importancia de los enfoques innovadores en tiempos de crisis.',
      link: 'https://exitoeducativo.net/importancia-enfoques-innovadores/',
    },
    {
      referencia:
        'Domínguez-Rodríguez, Y. (2022). Instrumentos y tipos de evaluación. Con-Ciencia Serrana Boletín Científico de la Escuela Preparatoria Ixtlahuaco, 37-39.',
      link:
        'https://repository.uaeh.edu.mx/revistas/index.php/ixtlahuaco/article/view/8460',
    },
    {
      referencia:
        'Sagastume, F. M.-S. (2019). La importancia del tutor en los cursos virtuales: experiencia, buenas prácticas y recomendaciones.',
      link: 'http://biblioteca.galileo.edu/xmlui/handle/123456789/781',
    },
    {
      referencia:
        'Bates, A. (2015). Enseñar en la era digital: directrices para el diseño de la enseñanza y el aprendizaje. BCcampus.',
      link:
        'https://openlibrary-repo.ecampusontario.ca/jspui/handle/123456789/276',
    },
    {
      referencia:
        'Murcia, M. A. (2020) Diseño instruccional para profes: guía para la innovación educativa con TIC. Ediciones USTA.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/140725',
    },
    {
      referencia:
        'López García, C. &. (2017). Tema 2. Herramientas de creación de presentaciones. Reflexión sobre las herramientas Power Point, Prezi, Piktochart y Powtoon.',
      link: 'http://dspace.unia.es/handle/10334/3859',
    },
    {
      referencia:
        'Cáceres, C. (Et Al) (2021) Aplicaciones de las plataformas de enseñanza virtual a la educación superior. Editorial Dykinson.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/175737',
    },
    {
      referencia:
        'Lezcano, L. &. (2017). Instrumentos de evaluación de aprendizaje en entornos virtuales. Perspectiva de estudiantes y aportes de docentes. Informes Científicos Técnicos-UNPA, 1-36.',
      link:
        'https://publicaciones.unpa.edu.ar/index.php/ictunpa/article/view/560',
    },
    {
      referencia:
        'Valcárcel, N. M. (2012). La evaluación del aprendizaje en entornos virtuales de enseñanza aprendizaje: notas para una reflexión. Revista Iberoamericana de Educación, 1-16.',
      link: 'https://rieoei.org/RIE/article/view/1443',
    },
    {
      referencia:
        'Pérez-Chaverri, J. &.-S. (2016). Características de la retroalimentación como parte de la estrategia evaluativa durante el proceso de enseñanza aprendizaje en entornos virtuales: una perspectiva teórica. Revista Electrónica Calidad en la Educación Superior, 7(1), 175-204.',
      link:
        'https://revistas.uned.ac.cr/index.php/revistacalidad/article/view/1381',
    },
    {
      referencia:
        'Garcia Peña, K. E. (2021). Evaluación auténtica en entornos virtuales de aprendizaje en la educación técnico-productiva Cusco, 2021.',
      link: 'https://repositorio.ucv.edu.pe/handle/20.500.12692/72381',
    },
    {
      referencia:
        'Ocampo, H. (2010) La evaluación del aprendizaje en la universidad, aportes de la educación virtual a los modelos clásicos. Editorial Universitaria.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/81101',
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
