// careers.js
// Este archivo contiene el arreglo con todas las carreras de Mendoza.
// Cada objeto incluye:
// - title: Nombre de la carrera.
// - institution: Nombre de la institución.
// - description: Descripción breve.
// - modality: Tipo de cursado ("presencial", "virtual", "mixta").
// - institutionType: Tipo de institución ("universidad", "instituto superior").
// - managementType: Tipo de gestión ("pública", "privada").
// - url: Enlace a la carrera o institución.

export const careersData = [
    // --- UNIVERSIDADES PÚBLICAS ---
    // UNCuyo
    {
        title: "Carreras de Grado (varias facultades)",
        institution: "Universidad Nacional de Cuyo (UNCuyo)",
        description: "Amplia gama de programas de grado y posgrado en diversas áreas del conocimiento. Predominantemente presenciales con posibilidad de componentes virtuales.",
        modality: "presencial",
        institutionType: "universidad",
        managementType: "pública",
        url: "https://www.uncuyo.edu.ar/"
    },
    {
        title: "Licenciatura en Logística",
        institution: "UNCuyo (Facultad de Ciencias Económicas)",
        description: "Gestión de la cadena de suministros con modalidad 100% a distancia.",
        modality: "virtual",
        institutionType: "universidad",
        managementType: "pública",
        url: "https://www.uncuyo.edu.ar/extension/oferta-academica/licenciatura-en-logistica-a-distancia"
    },
    {
        title: "Cursos y Postgrados con componentes virtuales",
        institution: "UNCuyo (varias facultades)",
        description: "Diversos programas que incorporan hasta un 50% de carga horaria virtual como parte de su plan de virtualización.",
        modality: "mixta",
        institutionType: "universidad",
        managementType: "pública",
        url: "https://www.uncuyo.edu.ar/"
    },
    // UTN - Facultad Regional Mendoza
    {
        title: "Ingeniería Civil, Electromecánica, Electrónica, Química, Sistemas de Información, Telecomunicaciones",
        institution: "UTN – Facultad Regional Mendoza",
        description: "Ingenierías técnicas oficiales con fuerte enfoque práctico.",
        modality: "presencial",
        institutionType: "universidad",
        managementType: "pública",
        url: "https://www4.frm.utn.edu.ar/ingenierias/"
    },
    {
        title: "Licenciatura en Administración de Empresas, Gestión de Empresas Turísticas y Hoteleras, Enseñanza de la Matemática, Higiene y Seguridad en el Trabajo, Enología",
        institution: "UTN FRM",
        description: "Licenciaturas en gestión, educación y salud laboral.",
        modality: "presencial",
        institutionType: "universidad",
        managementType: "pública",
        url: "https://www4.frm.utn.edu.ar/licenciaturas/"
    },
    {
        title: "Tecnicatura Universitaria en Enología, Gestión de Empresas Hoteleras, Gestión de Empresas Turísticas, Higiene y Seguridad, Programación, Producción de Videojuegos",
        institution: "UTN FRM",
        description: "Carreras técnicas especializadas para diversas industrias.",
        modality: "presencial",
        institutionType: "universidad",
        managementType: "pública",
        url: "https://www4.frm.utn.edu.ar/tecnicaturas-superiores/"
    },
    {
        title: "Especialización en Redes de Datos",
        institution: "UTN FRM",
        description: "Posgrado con modalidad a distancia para profesionales.",
        modality: "virtual",
        institutionType: "universidad",
        managementType: "pública",
        url: "https://www4.frm.utn.edu.ar/category/posgrados/especializaciones/"
    },
    {
        title: "Cursos de Capacitación (Virtuales)",
        institution: "UTN FRM",
        description: "Cursos de extensión universitaria y a distancia, como Renovación Credencial Manejo de Autoelevadores y Gestión de Costos Logísticos.",
        modality: "virtual",
        institutionType: "universidad",
        managementType: "pública",
        url: "https://www4.frm.utn.edu.ar/cursos-a-distancia-y-cursos-de-extension-universitaria/"
    },
    {
        title: "Maestrías y Doctorados",
        institution: "UTN FRM",
        description: "Programas avanzados de posgrado.",
        modality: "presencial",
        institutionType: "universidad",
        managementType: "pública",
        url: "https://www4.frm.utn.edu.ar/category/posgrados/"
    },
    // UTN - Facultad Regional San Rafael
    {
        title: "Ingeniería Civil, Ingeniería Electromecánica",
        institution: "UTN – Facultad Regional San Rafael",
        description: "Carreras de ingeniería con enfoque en infraestructura y energía.",
        modality: "presencial",
        institutionType: "universidad",
        managementType: "pública",
        url: "http://www.ofertaeducativasr.com.ar/universidad-tecnologica-nacional/"
    },
    {
        title: "Ingeniería Industrial",
        institution: "UTN – Facultad Regional San Rafael",
        description: "Formación en optimización de procesos industriales con modalidad a distancia.",
        modality: "virtual",
        institutionType: "universidad",
        managementType: "pública",
        url: "http://www.ofertaeducativasr.com.ar/universidad-tecnologica-nacional/"
    },

    // --- UNIVERSIDADES PRIVADAS ---
    // Universidad de Mendoza (UM)
    {
        title: "Abogacía, Corredor Inmobiliario, Escribanía, Procuración, Lic. en Emprendimientos Inmobiliarios",
        institution: "Universidad de Mendoza",
        description: "Oferta en Ciencias Jurídicas y Sociales, predominantemente presencial.",
        modality: "presencial",
        institutionType: "universidad",
        managementType: "privada",
        url: "https://um.edu.ar/ciencias-juridicas-y-sociales/"
    },
    {
        title: "Arquitectura, Diseño Gráfico, Diseño de Interiores, Diseño de Indumentaria y Textil, Lic. en Diseño",
        institution: "Universidad de Mendoza",
        description: "Carreras en Arquitectura, Urbanismo y Diseño, predominantemente presenciales.",
        modality: "presencial",
        institutionType: "universidad",
        managementType: "privada",
        url: "https://um.edu.ar/arquitectura-urbanismo-y-diseno/"
    },
    {
        title: "Kinesiología, Psicología, Nutrición, Odontología, Medicina",
        institution: "Universidad de Mendoza",
        description: "Carreras en Ciencias de la Salud y Medicina, predominantemente presenciales.",
        modality: "presencial",
        institutionType: "universidad",
        managementType: "privada",
        url: "https://um.edu.ar/ciencias-de-la-salud/"
    },
    {
        title: "Ingeniería en Informática, Electrónica, Industrial",
        institution: "Universidad de Mendoza",
        description: "Ingenierías, predominantemente presenciales.",
        modality: "presencial",
        institutionType: "universidad",
        managementType: "privada",
        url: "https://um.edu.ar/ingenieria/"
    },
    {
        title: "Contador Público, Lic. en Administración de Negocios",
        institution: "Universidad de Mendoza",
        description: "Carreras en Ciencias Económicas, predominantemente presenciales.",
        modality: "presencial",
        institutionType: "universidad",
        managementType: "privada",
        url: "https://um.edu.ar/ciencias-economicas/"
    },
    {
        title: "Cursos de Idiomas (Inglés A1, A2, B1, B2, C1+)",
        institution: "Universidad de Mendoza (Advanced English Mendoza)",
        description: "Cursos de inglés completamente en línea, en distintos niveles y duraciones.",
        modality: "virtual",
        institutionType: "universidad",
        managementType: "privada",
        url: "https://um.edu.ar/en/cursos-idioma/curso-de-ingles-regular/"
    },
    // Universidad del Aconcagua (UDA)
    {
        title: "Licenciatura en Niñez, Adolescencia y Familia",
        institution: "Universidad del Aconcagua",
        description: "Programa de grado en el área social, con modalidad a distancia.",
        modality: "virtual",
        institutionType: "universidad",
        managementType: "privada",
        url: "https://www.uda.edu.ar/index.php/licenciatura-en-ninez-adolecencia-y-familia-2-md"
    },
    {
        title: "Traductor Público de Inglés, Italiano, Portugués",
        institution: "Universidad del Aconcagua",
        description: "Traductorados públicos ofrecidos en modalidad a distancia.",
        modality: "virtual",
        institutionType: "universidad",
        managementType: "privada",
        url: "https://www.uda.edu.ar/index.php/oferta-educativa/modalidad-distancia-menu"
    },
    {
        title: "Tecnicatura Universitaria en Niñez, Adolescencia y Familia, Seguridad Ciudadana",
        institution: "Universidad del Aconcagua",
        description: "Carreras de pregrado a distancia en áreas sociales y de seguridad.",
        modality: "virtual",
        institutionType: "universidad",
        managementType: "privada",
        url: "https://www.uda.edu.ar/index.php/oferta-educativa/modalidad-distancia-menu"
    },
    {
        title: "Ciclos de Complementación Curricular (Licenciatura en Administración de Salud, Inglés, Niñez, Adolescencia y Familia, Seguridad Ciudadana Integral)",
        institution: "Universidad del Aconcagua",
        description: "Programas para complementar estudios previos, todos a distancia.",
        modality: "virtual",
        institutionType: "universidad",
        managementType: "privada",
        url: "https://www.uda.edu.ar/index.php/oferta-educativa/modalidad-distancia-menu"
    },
    {
        title: "Licenciatura en Dirección Creativa de Diseño y Publicidad (C.C.C.)",
        institution: "Universidad del Aconcagua",
        description: "Ciclo de Complementación Curricular con opción mixta, principalmente a distancia.",
        modality: "mixta",
        institutionType: "universidad",
        managementType: "privada",
        url: "https://www.uda.edu.ar/index.php/licenciatura-direcc-creat-diseno-public"
    },
    {
        title: "Diplomaturas y Cursos",
        institution: "Universidad del Aconcagua",
        description: "Oferta variada de formación continua a distancia.",
        modality: "virtual",
        institutionType: "universidad",
        managementType: "privada",
        url: "https://www.uda.edu.ar/index.php/oferta-educativa/modalidad-distancia-menu"
    },
    {
        title: "Licenciatura en Comercio Internacional, Marketing, Turismo (y otras)",
        institution: "Universidad del Aconcagua",
        description: "Carreras de grado ofrecidas en modalidad presencial.",
        modality: "presencial",
        institutionType: "universidad",
        managementType: "privada",
        url: "https://www.uda.edu.ar/index.php/oferta-educativa-fcsa"
    },
    // Universidad Juan Agustín Maza (UMAZA)
    {
        title: "Abogacía, Agrimensura, Bioquímica, Comunicación Social, Contador Público, Farmacia, Dirección de Empresas, Enología, Locución, Kinesiología y Fisioterapia, Nutrición, Periodismo, Musicoterapia, Publicidad, Realización Audiovisual, Terapia Ocupacional, Veterinaria, Licenciatura en Matemáticas",
        institution: "Universidad Juan Agustín Maza",
        description: "Amplia oferta de carreras de grado presenciales en diversas áreas.",
        modality: "presencial",
        institutionType: "universidad",
        managementType: "privada",
        url: "https://www.umaza.edu.ar/"
    },
    {
        title: "Licenciatura en Educación Física, Recursos Humanos, Instrumentación Quirúrgica, Anatomía Patológica, Anestesiología, Producción de Bioimágenes, Hemoterapia, Gastronomía",
        institution: "Universidad Juan Agustín Maza",
        description: "Licenciaturas con cursado a través del Campus Virtual.",
        modality: "virtual",
        institutionType: "universidad",
        managementType: "privada",
        url: "https://www.umaza.edu.ar/campus-virtual/"
    },
    {
        title: "Profesorado para Profesionales, Ciclo de Complementación de Podología Universitaria",
        institution: "Universidad Juan Agustín Maza",
        description: "Programas ofrecidos en modalidad a distancia a través del Campus Virtual.",
        modality: "virtual",
        institutionType: "universidad",
        managementType: "privada",
        url: "https://www.umaza.edu.ar/campus-virtual/"
    },
    {
        title: "Recursos Humanos (Ciclo de Complementación a distancia)",
        institution: "Universidad Juan Agustín Maza",
        description: "Ciclo de Complementación Curricular de Recursos Humanos, con opción a distancia.",
        modality: "virtual",
        institutionType: "universidad",
        managementType: "privada",
        url: "https://www.umaza.edu.ar/landings/recursoshumanos/inicio"
    },
    // Universidad de Congreso (UC)
    {
        title: "Abogacía, Administración, Comercialización, Contador, Economía, Hotelería, Recursos Humanos, Turismo, Comunicación, Periodismo, Arquitectura, Psicología, Kinesiología, Tecnicaturas en Dirección y Producción Audiovisual (y otras)",
        institution: "Universidad de Congreso",
        description: "Amplia oferta de carreras presenciales en distintas sedes.",
        modality: "presencial",
        institutionType: "universidad",
        managementType: "privada",
        url: "https://www.ucongreso.edu.ar/carreras-presenciales/"
    },
    {
        title: "Administración, Comercialización, Economía, Recursos Humanos, Comunicación, Comercio Exterior, Marketing Internacional, Relaciones Económicas Internacionales, Relaciones Internacionales y Gobernanza Global",
        institution: "Universidad de Congreso",
        description: "Carreras de grado ofrecidas completamente a distancia desde el primer año.",
        modality: "virtual",
        institutionType: "universidad",
        managementType: "privada",
        url: "https://www.ucongreso.edu.ar/carreras-a-distancia/"
    },
    {
        title: "Ciclos de Complementación Curricular a distancia (Administración, Comercialización, Recursos Humanos)",
        institution: "Universidad de Congreso",
        description: "Programas para complementar estudios previos, en modalidad a distancia.",
        modality: "virtual",
        institutionType: "universidad",
        managementType: "privada",
        url: "https://www.ucongreso.edu.ar/carreras-a-distancia/"
    },
    // Universidad Champagnat (UCH)
    {
        title: "Licenciatura en Administración de Empresas, Comercio Internacional, Abogacía y Procuración, Diseño Gráfico y Digital, Sistemas de Información",
        institution: "Universidad Champagnat",
        description: "Carreras de grado con modalidad presencial.",
        modality: "presencial",
        institutionType: "universidad",
        managementType: "privada",
        url: "https://www.uch.edu.ar/"
    },
    {
        title: "Especialización en Docencia en Entornos Digitales (Posgrado), Diplomatura en Entornos Virtuales de Aprendizaje para Educación (Posgrado)",
        institution: "Universidad Champagnat",
        description: "Programas de posgrado con enfoque en educación digital y entornos virtuales.",
        modality: "virtual",
        institutionType: "universidad",
        managementType: "privada",
        url: "https://www.uch.edu.ar/"
    },

    // --- INSTITUTOS SUPERIORES PÚBLICOS ---
    // Instituto Superior de Educación Mendoza (ISEM)
    {
        title: "Profesorado de Educación Inicial, Secundaria en Historia, Secundaria en Geografía",
        institution: "Instituto Superior de Educación Mendoza (ISEM)",
        description: "Carreras docentes con validez oficial, predominantemente presenciales. Cuentan con campus virtual de apoyo.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "privada",
        url: "https://isem-infd.mendoza.edu.ar/sitio/"
    },
    {
        title: "Tecnicatura Superior en Preceptoría Escolar",
        institution: "Instituto Superior de Educación Mendoza (ISEM)",
        description: "Formación técnica para el ámbito escolar, predominantemente presencial. Cuentan con campus virtual de apoyo.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "privada",
        url: "https://isem-infd.mendoza.edu.ar/sitio/"
    },
    {
        title: "Cursos de Capacitación (Preceptor Escolar, Secretario Escolar)",
        institution: "Instituto Superior de Educación Mendoza (ISEM)",
        description: "Cursos de actualización docente con puntaje y resolución de la DGE.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "privada",
        url: "https://isem-infd.mendoza.edu.ar/sitio/capacitacion/"
    },
    // IES 9-006 (Rivadavia)
    {
        title: "Profesorado de Educación Especial",
        institution: "IES 9-006 (Rivadavia)",
        description: "Formación docente especializada en educación inclusiva con enfoque en discapacidad.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://superior-infd.mendoza.edu.ar/"
    },
    {
        title: "Tecnicatura en Interpretación de Lengua de Señas",
        institution: "IES 9-006 (Rivadavia)",
        description: "Formación técnica para intérpretes de lengua de señas argentina.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://superior-infd.mendoza.edu.ar/"
    },
    
    // IES de San Rafael
    {
        title: "Tecnicatura Superior en Gastronomía",
        institution: "IES San Rafael",
        description: "Formación técnica en artes culinarias y gestión gastronómica.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://superior-infd.mendoza.edu.ar/"
    },
    {
        title: "Tecnicatura en Recursos Renovables",
        institution: "IES San Rafael",
        description: "Formación en gestión sostenible de recursos naturales.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://superior-infd.mendoza.edu.ar/"
    },
    
    // IES Valle de Uco (Tupungato)
    {
        title: "Tecnicatura en Vitivinicultura",
        institution: "IES Valle de Uco",
        description: "Formación técnica especializada en producción vitivinícola.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://superior-infd.mendoza.edu.ar/"
    },
    {
        title: "Profesorado de Educación Física",
        institution: "IES Valle de Uco",
        description: "Formación docente con especialización en actividades de montaña.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://superior-infd.mendoza.edu.ar/"
    },
    
    // Nuevas carreras tecnológicas 2025
    {
        title: "Tecnicatura Superior en Ciencia de Datos e Inteligencia Artificial",
        institution: "Varios IES públicos",
        description: "Nueva carrera tecnológica lanzada para 2025, con enfoque en análisis avanzado de datos.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://superior-infd.mendoza.edu.ar/"
    },
    {
        title: "Tecnicatura Superior en Redes y Ciberseguridad",
        institution: "Varios IES públicos",
        description: "Formación en seguridad informática y protección de redes digitales.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://superior-infd.mendoza.edu.ar/"
    },
    {
        title: "Tecnicatura en Guía Náutico Andino",
        institution: "IES 9-016",
        description: "Formación especializada en navegación y actividades acuáticas en ambientes de montaña.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://ief9-016.edu.ar/"
    },
    {
        title: "Formación Profesional en Maestro Cervecero",
        institution: "IES 9-029",
        description: "Capacitación intensiva en producción artesanal de cerveza.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://www.ies9029.edu.ar/"
    },
    
    // Becas 2025 (como referencia)
    {
        title: "Becas para Profesorados en Matemática, Física y Química",
        institution: "DGE Mendoza",
        description: "Programa de incentivo económico para estudiantes de profesorados en áreas estratégicas.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://www.mendoza.edu.ar/becas-2025/"
    },
    // Instituto de Educación Física 9-016 Dr. Jorge E. Coll (IEF 9-016)
    {
        title: "Profesorado de Educación Física",
        institution: "IEF 9-016 Dr. Jorge E. Coll",
        description: "Formación para profesores de educación física en diversas sedes.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://ief9-016.edu.ar/profesorado-de-educacion-fisica/"
    },
    {
        title: "Tecnicatura Superior en Actividades de Montaña, Conservación de la Naturaleza, Preparación Física",
        institution: "IEF 9-016 Dr. Jorge E. Coll",
        description: "Tecnicaturas con enfoque en actividad física y medio ambiente.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://ief9-016.edu.ar/"
    },
    {
        title: "Formación Profesional Guardavidas y Náuticos Andinos",
        institution: "IEF 9-016 Dr. Jorge E. Coll",
        description: "Capacitaciones profesionales para actividades acuáticas y de montaña.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://ief9-016.edu.ar/"
    },
    // I.E.S. Nº 9-011 - Del Atuel
    {
        title: "Profesorado de Educación Secundaria en Biología, Geografía, Historia, Informática, Inglés, Lengua y Literatura, Matemática",
        institution: "I.E.S. Nº 9-011 - Del Atuel",
        description: "Formación docente en diversas disciplinas, predominantemente presencial.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://ies9011-infd.mendoza.edu.ar/sitio/oferta-educativa/"
    },
    {
        title: "Tecnicatura Superior en Turismo & Hotelería, Gastronomía",
        institution: "I.E.S. Nº 9-011 - Del Atuel",
        description: "Tecnicaturas en el sector turístico y gastronómico.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://ies9011-infd.mendoza.edu.ar/sitio/oferta-educativa/"
    },
    // Instituto Tecnológico Universitario (ITU) Mendoza
    {
        title: "Tecnicatura Universitaria en Desarrollo de Software, Electricidad y Sistemas de Control Industriales, Gestión de Empresas, Higiene y Seguridad en el Trabajo, Logística y Transporte, Mantenimiento e Instalaciones Industriales, Marketing, Producción Industrial y Automatización, Redes de Datos y Telecomunicaciones",
        institution: "Instituto Tecnológico Universitario (ITU) Mendoza",
        description: "Tecnicaturas universitarias que responden a las demandas productivas, con cursado regular y vespertino.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://itu.uncuyo.edu.ar/estudios/"
    },
    {
        title: "Cursos y Talleres (ej. Manejo de Autoelevadores, Gestión de Costos Logísticos)",
        institution: "Instituto Tecnológico Universitario (ITU) Mendoza",
        description: "Cursos de capacitación, algunos ofrecidos en modalidad virtual.",
        modality: "mixta",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://itu.uncuyo.edu.ar/cursos/"
    },
    // IES N° 9-001 Gral. José de San Martín
    {
        title: "Profesorado de Biología, Educación Especial, Educación Inicial, Educación Primaria, Geografía, Historia, Inglés, Lengua y Literatura, para Técnicos",
        institution: "IES N° 9-001 Gral. José de San Martín",
        description: "Variedad de profesorados con apoyo de campus virtual.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://ens9001-infd.mendoza.edu.ar/sitio/"
    },
    {
        title: "Tecnicatura en Administración Pública, Comunicación Social, Diseño de Indumentaria, Textil y Accesorios, Higiene y Seguridad Laboral",
        institution: "IES N° 9-001 Gral. José de San Martín",
        description: "Tecnicaturas con apoyo de campus virtual.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://ens9001-infd.mendoza.edu.ar/sitio/"
    },
    // IES 9-002 Tomás Godoy Cruz
    {
        title: "Profesorado de Inglés, Artes Visuales, Educación Secundaria en Biología, Educación Especial, Educación Inicial, Educación Primaria, Educación Secundaria en Física, Educación Secundaria en Lengua y Literatura, Educación Secundaria en Matemática, Educación Secundaria en Química",
        institution: "IES 9-002 Tomás Godoy Cruz",
        description: "Amplia oferta de profesorados en diversas especialidades.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://ens9002-infd.mendoza.edu.ar/sitio/carreras/"
    },
    {
        title: "Tecnicatura en Producción Artística y Artesanal",
        institution: "IES 9-002 Tomás Godoy Cruz",
        description: "Formación técnica en el ámbito artístico.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://ens9002-infd.mendoza.edu.ar/sitio/carreras/"
    },
    // Instituto Superior de Formación Docente y Técnica N° 9-003 Mercedes Tomasa de San Martín de Balcarce
    {
        title: "Profesorado de Educación Primaria, Educación Inicial, Educación Especial, para Técnicos (PROTEC)",
        institution: "IES 9-003 Mercedes Tomasa de San Martín de Balcarce",
        description: "Programas de formación docente.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://ens9003-infd.mendoza.edu.ar/sitio/carreras/"
    },
    {
        title: "Tecnicatura Superior en Locución de Radio y Televisión, Acompañamiento Terapéutico",
        institution: "IES 9-003 Mercedes Tomasa de San Martín de Balcarce",
        description: "Tecnicaturas en comunicación y salud.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://ens9003-infd.mendoza.edu.ar/sitio/carreras/"
    },
    // ISTEEC Mendoza
    {
        title: "Administración de Empresas, Administración Pública, Comercio Internacional y Aduana, Contabilidad, Enología e Industria de los Alimentos, Logística, Marketing, Turismo y Hotelería, Recursos Humanos, FP3 Logística Minera",
        institution: "ISTEEC Mendoza",
        description: "Carreras técnicas presenciales con enfoque en estudios económicos y técnicos. Cuentan con Campus Virtual.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://isteec.edu.ar/"
    },

    // --- INSTITUTOS SUPERIORES PRIVADOS ---
    // Instituto Superior Juan Gutenberg Mendoza
    {
        title: "Tecnicatura Superior en Diseño Multimedial",
        institution: "Instituto Superior Juan Gutenberg",
        description: "Carrera pionera en Tecnología Gráfica y Diseño Multimedial. El ingreso es mixto (virtual asincrónico y presencial).",
        modality: "mixta",
        institutionType: "instituto superior",
        managementType: "privada",
        url: "https://institutojgutenberg.edu.ar/"
    },
    {
        title: "Cursos Online (LSA, Administrativo Veterinaria, Secretariado Médico)",
        institution: "Instituto Superior Juan Gutenberg",
        description: "Cursos cortos completamente en línea para diversas áreas.",
        modality: "virtual",
        institutionType: "instituto superior",
        managementType: "privada",
        url: "https://institutojgutenberg.edu.ar/cursos-online-gutenberg/"
    },
    // IAV - Instituto Argentino de Ventas Mendoza
    {
        title: "Curso de Ejecutivo de Atención Telefónica, Ejecutivo de Venta en Terreno, Ejecutivo de Venta Telefónica, Supervisión y Liderazgo",
        institution: "IAV - Instituto Argentino de Ventas",
        description: "Formación profesional especializada en el ámbito de las ventas.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "privada",
        url: "https://www.educaedu.com.ar/centros/iav--instituto-argentino-de-ventas-uni2721"
    },
    // Instituto Intercultural Lenguas Extranjeras - Español Mendoza
    {
        title: "Cursos de Lenguas Extranjeras",
        institution: "Instituto Intercultural Lenguas Extranjeras - Español Mendoza",
        description: "Cursos de idiomas (ej. Español como Lengua Extranjera) y preparación para exámenes IELTS.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "privada",
        url: "https://www.intercultural.com.ar/"
    },

    // **NUEVAS CARRERAS AGREGADAS - TECNOLÓGICAS 2025**
    {
        title: "Tecnicatura Superior en Ciencias de Datos e Inteligencia Artificial",
        institution: "IES (Varios institutos de gestión estatal)",
        description: "Nueva carrera tecnológica lanzada para el ciclo lectivo 2025, enfocada en análisis de datos y IA.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://superior-infd.mendoza.edu.ar/"
    },
    {
        title: "Tecnicatura Superior en Desarrollo de Software",
        institution: "IES (Varios institutos de gestión estatal)",
        description: "Nueva carrera tecnológica lanzada para el ciclo lectivo 2025, especializada en programación y desarrollo.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://superior-infd.mendoza.edu.ar/"
    },
    {
        title: "Tecnicatura Superior en Redes y Ciberseguridad",
        institution: "IES (Varios institutos de gestión estatal)",
        description: "Nueva carrera tecnológica lanzada para el ciclo lectivo 2025, enfocada en seguridad informática y redes.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://superior-infd.mendoza.edu.ar/"
    },

    // --- TECNICATURAS SUPERIORES ---
    {
        title: "Tecnicatura Superior en Enología e Industrias de los Alimentos",
        institution: "Instituto de Educación Superior N° 9-029",
        description: "Formación técnica integral para la producción y control de calidad en enología e industrias alimentarias. Ubicada en la sede Ugarteche (Jauretche). Inscripción ciclo 2025 cerrada por cupos completos.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://www.ies9029.edu.ar/"
    },
    {
        title: "Tecnicatura Superior en Gestión de Recursos Humanos",
        institution: "Instituto de Educación Superior N° 9-029",
        description: "Formación técnica para la administración y desarrollo del capital humano en organizaciones. Se imparte en la sede Central (Marianetti). Todas las carreras del IES 9-029 requieren asistencia física. Inscripción ciclo 2025 cerrada por cupos completos.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://www.ies9029.edu.ar/"
    },
    {
        title: "Tecnicatura Superior en Higiene y Seguridad con Orientación en Calidad y Medio Ambiente",
        institution: "Instituto de Educación Superior N° 9-029",
        description: "Formación técnica para la prevención de riesgos laborales, gestión de la seguridad, calidad y protección ambiental. Se ha impartido en la Sede Central (Marianetti). Inscripción ciclo 2025 cerrada por cupos completos.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://www.ies9029.edu.ar/"
    },
    {
        title: "Tecnicatura Superior en Turismo y Hotelería",
        institution: "Instituto de Educación Superior N° 9-029",
        description: "Formación técnica para la gestión y operación en el sector turístico y hotelero. Se ha impartido en la Sede Luján (Torres). Inscripción ciclo 2025 cerrada por cupos completos.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://www.ies9029.edu.ar/"
    },

    // --- PROFESORADOS ---
    {
        title: "Profesorado de Educación Primaria",
        institution: "Instituto de Educación Superior N° 9-029",
        description: "Formación docente para la enseñanza en el nivel primario. Inscripción ciclo 2025 cerrada por cupos completos.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://www.ies9029.edu.ar/"
    },
    {
        title: "Profesorado de Educación Secundaria en Geografía",
        institution: "Instituto de Educación Superior N° 9-029",
        description: "Formación docente especializada en la enseñanza de Geografía para el nivel secundario. Inscripción ciclo 2025 cerrada por cupos completos.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://www.ies9029.edu.ar/"
    },
    {
        title: "Profesorado para Técnicos/as",
        institution: "Instituto de Educación Superior N° 9-029",
        description: "Programa de formación docente dirigido a profesionales con títulos técnicos que deseen habilitarse para la enseñanza. Inscripciones cerradas y sin fecha definida para nuevos comienzos.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://www.ies9029.edu.ar/"
    },

    // --- ESPECIALIZACIONES ---
    {
        title: "Especialización Docente de Nivel Superior en Educación Permanente de Jóvenes y Adultos con Perspectiva de Promoción y Protección de Derechos",
        institution: "Instituto de Educación Superior N° 9-029",
        description: "Programa de posgrado docente de 400 horas reloj (2 años) diseñado para profesionales de la educación. Se ofrece a distancia. Inscripción ciclo 2025 cerrada por cupos completos.",
        modality: "a distancia",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://www.ies9029.edu.ar/inscripciones-epja2025/"
    },

    // --- FORMACIÓN PROFESIONAL ---
    {
        title: "Formación Profesional de Nivel III en Maestro Cervecero",
        institution: "Instituto de Educación Superior N° 9-029",
        description: "Programa de formación profesional que capacita en el arte y la ciencia de la elaboración de cerveza. Inscripción ciclo 2025 cerrada por cupos completos.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://www.ies9029.edu.ar/"
    },
// --- PROFESORADOS ---
    {
        title: "Profesorado de Educación Primaria",
        institution: "Instituto de Educación Superior N° 9-023",
        description: "Programa de formación docente para el nivel primario. Usualmente de cuatro años de duración.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://ies9023-infd.mendoza.edu.ar/sitio/"
    },
    {
        title: "Profesorado para la Educación Secundaria en concurrencia con el título de base",
        institution: "Instituto de Educación Superior N° 9-023",
        description: "Diseñado para profesionales con título de base que buscan habilitación pedagógica para la enseñanza secundaria.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://ies9023-infd.mendoza.edu.ar/sitio/"
    },
    {
        title: "Profesorado de Educación Secundaria en Matemática",
        institution: "Instituto de Educación Superior N° 9-023",
        description: "Formación de docentes especializados en Matemática para el nivel secundario. Duración usual de cuatro años.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://ies9023-infd.mendoza.edu.ar/sitio/"
    },
    {
        title: "Profesorado de Educación Secundaria Lengua y Literatura",
        institution: "Instituto de Educación Superior N° 9-023",
        description: "Formación docente con currículo exhaustivo en lengua y literatura, incluyendo ESI y tecnologías digitales. Se imparte en turno mañana (8:00 AM a 1:00 PM).",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://ies9023-infd.mendoza.edu.ar/sitio/"
    },

    // --- TECNICATURAS SUPERIORES ---
    {
        title: "Tecnicatura Superior en Administración Pública",
        institution: "Instituto de Educación Superior N° 9-023",
        description: "Formación técnica para el sector público, incluyendo gestión de políticas, contabilidad pública y procedimientos de contratación. Se imparte en turno noche (7:00 PM a 11:00 PM). Requiere exámenes de ingreso en Matemática, Estado y Sociedad, y Administración General.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://ies9023-infd.mendoza.edu.ar/sitio/"
    },
    {
        title: "Tecnicatura Superior en Desarrollo de Software",
        institution: "Instituto de Educación Superior N° 9-023",
        description: "Programa de tres años que abarca desde la programación fundamental hasta temas avanzados como ciberseguridad y gestión de proyectos. Se imparte en turno intermedio (2:30 PM a 6:30 PM). Requiere exámenes de ingreso en Matemática y Lógica.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://ies9023-infd.mendoza.edu.ar/sitio/"
    },
    {
        title: "Tecnicatura Superior en Enfermería",
        institution: "Instituto de Educación Superior N° 9-023",
        description: "Contribuye a la salud pública formando profesionales de enfermería calificados. Usualmente presencial con una duración de tres años.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://ies9023-infd.mendoza.edu.ar/sitio/"
    },
    {
        title: "Tecnicatura Superior en Enología e Industrias de los Alimentos",
        institution: "Instituto de Educación Superior N° 9-023",
        description: "Programa relevante para la industria vitivinícola de Mendoza, ubicado en las antiguas instalaciones de la bodega Giol.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://ies9023-infd.mendoza.edu.ar/sitio/"
    },
    {
        title: "Tecnicatura Superior en Mecatrónica",
        institution: "Instituto de Educación Superior N° 9-023",
        description: "Formación multidisciplinaria que integra mecánica, electrónica e informática, preparando para fabricación avanzada y automatización industrial.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://ies9023-infd.mendoza.edu.ar/sitio/"
    },
    {
        title: "Tecnicatura Superior en Servicios Básicos y Construcciones Livianas Industrializadas",
        institution: "Instituto de Educación Superior N° 9-023",
        description: "Enfocada en construcciones modernas, eficiencia energética y domótica. Se imparte en turno noche (7:00 PM a 11:00 PM). Requiere exámenes de ingreso en Matemática y Física.",
        modality: "presencial",
        institutionType: "instituto superior",
        managementType: "pública",
        url: "https://ies9023-infd.mendoza.edu.ar/sitio/"
    },    
];
