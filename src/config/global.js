export default {
  global: {
    Name: 'Fundamentos y uso del entorno de Microsoft PowerPoint para la creación de diapositivas',
    Description:
      'Este componente formativo permitirá reconocer y utilizar de manera adecuada el entorno de la aplicación, creando presentaciones básicas mediante el uso de herramientas esenciales, diseños prediseñados y la inserción de elementos visuales, de acuerdo con requerimientos académicos y del entorno productivo, fortaleciendo así tus habilidades digitales bajo el enfoque de formación por competencias del SENA.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Contextualización del uso profesional de Microsoft PowerPoint',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'El poder de la narrativa visual',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'El potencial multimodal de PowerPoint en la comunicación gráfica',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Relación entre comunicación visual, productividad y toma de decisiones',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Reconocimiento del entorno de Microsoft PowerPoint',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Interfaz gráfica',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Configuración del entorno según el tipo de proyecto',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Uso eficiente de atajos de teclado para mejorar la productividad ',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Gestión estructural de presentaciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'La gestión estructural como base de una presentación profesional',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Planeación previa de una presentación',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Jerarquía de la información y secuencia visual ',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Aplicación de temas, estilos, diseños prediseñados y plantillas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Configuración del tamaño y formato de diapositivas',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Temas prediseñados',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Plantillas maestras ',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Inserción y edición de elementos visuales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Inserción de imágenes, íconos y formas',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Edición de imágenes y objetos visuales ',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Gestión de archivos y organización del trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo:
              'Optimización del peso de archivos sin perder calidad visual',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Guardado de presentaciones en distintos formatos',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Importación y reutilización de diapositivas',
            hash: 't_6_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/21720198_CF01_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: '<i>Bytes</i>',
      significado:
        'unidad básica de almacenamiento digital utilizada para medir el tamaño de archivos, incluyendo presentaciones de PowerPoint y sus recursos multimedia.',
    },
    {
      termino: 'Diapositiva maestra',
      significado:
        'herramienta que permite definir estilos globales de diseño, tipografía y formato, garantizando coherencia visual en toda la presentación.',
    },
    {
      termino: 'Elementos visuales',
      significado:
        'recursos gráficos como imágenes, íconos, formas y gráficos que apoyan y refuerzan el mensaje de una diapositiva.',
    },
    {
      termino: 'Formatos de archivo',
      significado:
        'tipos de extensión en los que puede guardarse una presentación (PPTX, PDF, PPSX, entre otros), según su uso y forma de distribución.',
    },
    {
      termino: 'Gráficos vectoriales',
      significado:
        'imágenes compuestas por líneas y formas matemáticas que pueden escalarse sin perder calidad, ideales para íconos y logotipos en presentaciones.',
    },
    {
      termino: 'Interfaz de PowerPoint',
      significado:
        'conjunto de elementos visuales que permiten la interacción del usuario con la aplicación, incluyendo la cinta de opciones, paneles y área de trabajo.',
    },
    {
      termino: 'Jerarquía visual',
      significado:
        'organización de los elementos gráficos y textuales de una diapositiva para guiar la atención del espectador hacia la información más importante.',
    },
    {
      termino: 'Mapas de bits',
      significado:
        'imágenes formadas por píxeles cuya calidad depende de la resolución, como fotografías digitales utilizadas en diapositivas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Centro de Escritura Javeriano. (2022). <i>Guía para el diseño de ayudas visuales</i>. Pontificia Universidad Javeriana Cali.',
      link: '',
    },
    {
      referencia:
        'Instituto Tecnológico del Cantábrico. (2015). <i>Presentaciones eficaces</i>.',
      link: '',
    },
    {
      referencia:
        'Lidwell, W., Holden, K., y Butler, J. (2015). <i>Principios universales del diseño, revisados y actualizados</i>. Rockport Publishers. ',
      link: 'https://books.google.com.co/books?id=l0QPECGQySYC&printsec=frontcover&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false',
    },
    {
      referencia:
        'Microsoft Corporation. (2024). <i>Guía de inicio rápido de PowerPoint</i>. Soporte técnico de Microsoft.',
      link: 'https://support.microsoft.com/es-es/powerpoint',
    },
    {
      referencia:
        'Velasco, J. (2020). <i>Comunicación visual y presentaciones de alto impacto</i>. Business School Press.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliceveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
