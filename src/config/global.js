export default {
  global: {
    componenteFormativo: 'Manejo de residuos hospitalarios y similares',
    descripcionCurso:
      'El presente componente de formación surge en el contexto del manejo de los residuos hospitalarios y similares, generados en entidades prestadoras de salud o similares, los cuales deben gestionarse a partir de la normativa para controlar infecciones y la conservación del buen estado de salud en las comunidades, personal de la salud y del medio ambiente.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Manejo de residuos hospitalarios y similares',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Gestión interna en el manejo de residuos hospitalarios y similares',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Comunicación y sensibilización',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Sistema de vigilancia epidemiológica ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Riesgos y reportes',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
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
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Decreto 4741 de 2005 [Ministerio de Ambiente, Vivienda y Desarrollo Territorial]. Por el cual se reglamenta parcialmente la prevención y manejo de los residuos o desechos peligrosos generados en el marco de la gestión integral. Diciembre 30 de 2005. ',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=18718',
    },
    {
      referencia:
        'Decreto 351 del 2014. [Ministerio de Salud y Protección Social]. Por el cual se reglamenta la gestión integral de los residuos generados en la atención en salud y otras actividades. Febrero 19 de 2014. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=56755',
    },
    {
      referencia:
        'Decreto 1072 de 2015. [Ministerio de trabajo]. Por medio del cual se expide el Decreto Único Reglamentario del Sector Trabajo. Mayo 26 de 2015.<br>',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/0/DUR+Sector+Trabajo+Actualizado+a+15+de+abril++de+2016.pdf/a32b1dcf-7a4e-8a37-ac16-c121928719c8',
    },
    {
      referencia:
        'Ley 1562 de 2012. Por la cual se modifica el Sistema de Riesgos Laborales y se dictan otras disposiciones en materia de Salud Ocupacional. Julio 11 de 2012. DO. Nº 48.488. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Ley-1562-de-2012.pdf',
    },
    {
      referencia:
        'Ministerio del Medio Ambiente y Ministerio de Salud. (2002). Gestión integral de residuos hospitalarios y similares en Colombia. Manual de procedimiento.<br>',
      link:
        'https://www.slideshare.net/viluvedu/manual-residuos-hospitalarios-1',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social, Ministerio de Ambiente y Desarrollo Sostenible y Ministerio de Transporte. (2015). Proyecto de manual para la gestión integral de residuos generados en la atención de salud y otras actividades.<br>',
      //link:
      //'https://www.minambiente.gov.co/images/Atencion_y_particpacion_al_ciudadano/Consulta_Publica/V_22_Manual_Gesti%C3%B3n_Integral_16_12_14_CP.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Atención en salud',
      significado:
        'Conjunto de servicios que se brindan a las personas en relación con aseguramiento y actividades de promoción y prevención.',
    },
    {
      termino: 'Etiqueta',
      significado:
        'Información impresa que indica sobre el riesgo de peligrosidad de los materiales. Para envases y empaques debe medir 10 cm X 10 cm.',
    },
    {
      termino: 'Generador',
      significado:
        'Es la persona natural o jurídica que produce residuos hospitalarios y similares en desarrollo de actividades relacionadas con prestación de servicios de salud, entre ellos los cementerios, morgues, funerarias y hornos crematorios.',
    },
    {
      termino: 'Residuos hospitalarios y similares',
      significado:
        'Son los elementos, insumos, materiales o instrumentos que tienen suficientes patógenos como para causar una enfermedad.',
    },
    {
      termino: 'Segregación en la fuente',
      significado:
        'Consiste en la separación, almacenamiento y transporte adecuado de los residuos generados al interior de la empresa.',
    },
    {
      termino: 'Unidad de almacenamiento',
      significado:
        'Son sitios de depósito cerrados y de carácter temporal para almacenar los residuos generados.',
    },
  ],
  complementario: [
    {
      texto:
        'Decreto 351 del 2014. [Ministerio de Salud y Protección Social]. Por el cual se reglamenta la gestión integral de los residuos generados en la atención en salud y otras actividades. Febrero 19 de 2014.',
      tipo: 'Decreto (texto digital)',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=56755',
    },
    {
      texto:
        'Ministerio de Salud y Protección Social, Ministerio de Ambiente y Desarrollo Sostenible y Ministerio de Transporte. (2015). Proyecto de manual para la gestión integral de residuos generados en la atención de salud y otras actividades.',
      tipo: 'Pdf',
      descarga: '/downloads/Manual_Gestión_Integra.pdf',
    },
    {
      texto:
        'Ley 1562 de 2012. Por la cual se modifica el Sistema de Riesgos Laborales y se dictan otras disposiciones en materia de Salud Ocupacional. Julio 11 de 2012. DO. Nº 48.488.',
      tipo: 'Texto digital',
      link: 'https://www.mintrabajo.gov.co/normatividad/leyes/2012',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina María Restrepo Zapata',
        cargo: 'Experta temática',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Jhacesiz Mary Hincapié Atehortúa',
        cargo:
          'Instructora (EPC) - Líder desarrollo curricular Servicios Personales',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Adriana Maria Bustamante Cataño',
        cargo: 'Profesional de Diseño y producción curricular',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Cristian Metaute Medina',
        cargo: 'Diseñador Instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica del SENA - Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisión metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniela Muñoz Bedoya',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'José Jaime Luis Tang Pinzón',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: ['Jesus Antonio Vecino Valero'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Andres Ayala Angarita',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Isabel Román Rueda',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
