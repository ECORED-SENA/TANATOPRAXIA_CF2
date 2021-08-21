<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Gestión interna en el manejo de residuos hospitalarios y similares
    
    p.mb-5 La gestión integral del manejo de residuos hospitalarios incluye una serie de pasos que van desde su generación hasta la disposición final de estos. Para esto, el generador deberá implementar, planear y ejecutar un plan de manejo que incluya procedimientos para evitar, disminuir, aprovechar y disponer adecuadamente los residuos peligrosos y no peligrosos generados en sus instalaciones. Cada organización deberá hacer su clasificación según su naturaleza, y su resultado es la identificación del tipo de residuos que genera. Según el Decreto 351 (Capítulo II, 2014), los residuos generados en la atención en salud y otras actividades se clasifican en residuos no peligrosos y peligrosos, con riesgo biológico o infeccioso.  Con la intención de que identifique esta clasificación, observe el siguiente recurso educativo.

    ImagenInfografica.color-secundario.mb-5

      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema2/dinamica.svg', alt='Texto que describa la imagen')
          

      .tarjeta.tarjeta--gris(x="17%" y="17%")
        .col-lg-12.px-3.py-3(style='background-color: #008F85; border-radius:5px; ')
          .h5.text-white.mb-0 PELIGROSO
        .col-lg-12.px-3.py-3(style='')
          p  Son los residuos producidos por el generador con características de origen infeccioso, radiactivo, químico, corrosivo, tóxico, entre otros, que representan un riesgo para la comunidad y el medio ambiente.
      
      .tarjeta.tarjeta--gris(x="4%" y="28.5%")
        .col-lg-12.px-3.py-3(style='background-color: #008F85; border-radius:5px; ')
          .h5.text-white.mb-0 RIESGO BIOLÓGICO E INFECCIOSO
        .col-lg-12.px-3.py-3(style='') 
          p Son residuos que representan un alto riesgo de infección, ya que pueden contener altas cargas de microorganismos patógenos, tales como virus, bacterias, hongos o parásitos.
      
      .tarjeta.tarjeta--gris(x="4%" y="37.5%")
        .col-lg-12.px-3.py-3(style='background-color: #008F85; border-radius:5px; ')
          .h5.text-white.mb-0 RADIOACIVO
        .col-lg-12.px-3.py-3(style='') 
          p Son sustancias emisoras de energía predecible y continua en forma alfa, beta o de fotones, cuya interacción con materia puede dar lugar a rayos X y neutrones.
      
      .tarjeta.tarjeta--gris(x="4%" y="45.5%")
        .col-lg-12.px-3.py-3(style='background-color: #008F85; border-radius:5px; ')
          .h5.text-white.mb-0 QUÍMICO
        .col-lg-12.px-3.py-3(style='') 
          p Son residuos contaminados con sustancias químicas capaces de producir la muerte dependiendo de sus niveles de concentración, entre ellos se encuentran: los fármacos, los residuos derivados de tratamientos oncológicos, metales pesados (plomo, cromo, zinc, mercurio) y los aceites usados.
            
      /// riesgo biologico e infeccioso///////////////
      .tarjeta.tarjeta--gris(x="29%" y="28.5%")
        .col-lg-12.px-3.py-3(style='background-color: #008F85; border-radius:5px; ')
          .h5.text-white.mb-0 ANATOMOPATOLÓGICO
        .col-lg-12.px-3.py-3(style='') 
          p Son todos aquellos residuos provenientes de partes y/o restos humanos, como muestras de tejidos, biopsias, amputaciones, restos de cadáveres y fluidos corporales.

      .tarjeta.tarjeta--gris(x="29%" y="37.5%")
        .col-lg-12.px-3.py-3(style='background-color: #008F85; border-radius:5px; ')
          .h5.text-white.mb-0 BIOSANITARIOS
        .col-lg-12.px-3.py-3(style='') 
          p Son todos los elementos resultantes de los procesos realizados donde el material esté contaminado con sangre o fluidos.

      .tarjeta.tarjeta--gris(x="29%" y="45.5%")
        .col-lg-12.px-3.py-3(style='background-color: #008F85; border-radius:5px; ')
          .h5.text-white.mb-0 CORTOPUNZANTES
        .col-lg-12.px-3.py-3(style='') 
          p Son los instrumentos que por su capacidad cortante o punzante puedan ocasionar un accidente percutáneo. Acá se encuentran las agujas, las hojas de bisturí, trocar y cuchillas.
      
      .tarjeta.tarjeta--gris(x="29%" y="54%")
        .col-lg-12.px-3.py-3(style='background-color: #008F85; border-radius:5px; ')
          .h5.text-white.mb-0 DE ANIMALES
        .col-lg-12.px-3.py-3(style='') 
          p Son los restos de animales usados para fines de investigación, muestra o testeo, los cuales se encuentran contaminados con un agente infeccioso.
      //no peligrosos//////////////////////////
      
      .tarjeta.tarjeta--gris(x="61%" y="17%")
        .col-lg-12.px-3.py-3(style='background-color: #008F85; border-radius:5px; ')
          .h5.text-white.mb-0 NO PELIGROSO
        .col-lg-12.px-3.py-3(style='')
          p  Residuos que no poseen peligrosidad o riesgo de infección o contaminación al medio ambiente o a la persona. Entre ellos:<br> 1. Biogradables, 2. Reciclables, 3. Inertes, 4. Ordinarios.
      
      .tarjeta.tarjeta--gris(x="60.5%" y="37%")
        .col-lg-12.px-3.py-3(style='background-color: #008F85; border-radius:5px; ')
          .h5.text-white.mb-0 NO APROVECHABLES
        .col-lg-12.px-3.py-3(style='')
          p Son aquellos residuos que por sus características no pueden ser aprovechados y por lo tanto debe darse una disposición final adecuada. 
      
      .tarjeta.tarjeta--gris(x="60.5%" y="28.5%")
        .col-lg-12.px-3.py-3(style='background-color: #008F85; border-radius:5px; ')
          .h5.text-white.mb-0 APROVECHABLES
        .col-lg-12.px-3.py-3(style='')
          p Son todos los residuos que por sus características se pueden reintroducir a la cadena productiva o aquellos a los que se les puede dar un uso diferente.
      
      


    p.mb-5 Identificados los residuos peligrosos y no peligrosos generados en las instalaciones de una organización, es importante la estructuración e implementación de un plan para la gestión integral de residuos hospitalarios y similares (PGIRH), el cual se estructura con base en dos componentes, según el Manual de procedimientos para la gestión integral de residuos hospitalarios y similares (MPGIRH), en Colombia (Ministerio del Medio Ambiente y Ministerio de Salud, 2002). Ellos son:

    .tarjeta--container.tarjetas-claras.row.mb-5
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/tema2/img1.svg', alt='icono que acompaña')
        .row.justify-content-center
          .col-auto
            h2.mb-5.text-center Gestión interna
            p.mb-4.text-center 
              b “Consiste en la planeación e implementación articulada de todas y cada una de las actividades realizadas al interior de la entidad generadora de residuos hospitalarios y similares” 
              b-none (Ministerio del Medio Ambiente y Ministerio de Salud, 2002, p. 32).
      
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/tema2/img2.svg', alt='icono que acompaña')
        .row.justify-content-center
          .col-auto
            h2.mb-5.text-center Gestión externa
            p.mb-4.text-center 
              b “Es el conjunto de operaciones y actividades de la gestión de residuos que, por lo general, se realizan por fuera del establecimiento del generador, como la recolección, aprovechamiento, el tratamiento y/o disposición final” 
              b-none (Ministerio del Medio Ambiente y Ministerio de Salud, 2002, p. 66).


    .row.justify-content-center
      .col-lg-4.mb-4.align-self-center
        figure
          img.mx-auto(src='@/assets/curso/tema2/img3.jpg', alt='Gestión integral de residuos hospitalarios', style='width:400px;')
      .col-lg-8
        p.mb-4 El plan para la gestión integral de residuos hospitalarios y similares (PGIRH) debe contar con un plan de contingencias, capacitación y socialización a sus empleados, un programa de seguridad y salud en el trabajo y cronograma de actividades. Este último debe actualizarse cada dos (2) años, si llegase a existir algún cambio que modifique la gestión de residuos, o cuando la entidad competente lo solicite.  Para establecer la cantidad de residuos generados, se lleva un registro que debe contener la siguiente información:
        .row.justify-content-center
          .col-auto.mb-4.px-xl-0
            figure
              img(src='@/assets/curso/tema2/img4.svg', alt='Gestión integral de residuos hospitalarios', style='width:234px;')
          .col-auto.mb-4.px-xl-0
            figure
              img(src='@/assets/curso/tema2/img5.svg', alt='Gestión integral de residuos hospitalarios', style='width:234px;')
          .col-auto.mb-4.px-xl-0
            figure
              img(src='@/assets/curso/tema2/img6.svg', alt='Gestión integral de residuos hospitalarios', style='width:234px;')

    .cajon.color-secundario.p-4.mb-5
      p.mb-0 Esta información ya diligenciada permitirá al generador identificar su clasificación de acuerdo con la cantidad de residuos peligrosos generados, siguiendo lo establecido en el Decreto 4741 de 2005.

    .row.justify-content-center.mb-4
      .col-lg-8
        .titulo-sexto.color-primario
          h5 Tipo de generador
        .tabla-a.color-primario.mb-4
            table
              caption Nota. Tomada del artículo 28, Decreto 4741 de 2005, p.14.
              thead
                tr
                  th(style='font-size: 18px; width:50%;') Tipo de generador
                  th(style='font-size: 18px') Cantidad de residuos o desechos<br> peligrosos generados (kg/mes)
              tbody.text-center
                tr
                  td Gran generador
                  td.text-center &ge;1000
                tr
                  td Mediano generador
                  td.text-center 100 &ndash; 999
                tr
                  td Peque&ntilde;o generador
                  td.text-center 10 &ndash; 99
                tr
                  td Microgenerador
                  td.text-center &lt;10

    p.mb-4 Para realizar la planeación e implementación del plan de manejo integral de residuos hospitalarios y similares, se debe contar con un grupo administrativo de gestión sanitaria y ambiental que diseñe, ejecute y verifique la adherencia al plan de manejo; este está encabezado por un director general, uno administrativo y otro financiero, al igual que un empleado, un jefe de servicios y, por último, un representante del cuerpo médico.  Dentro de las actividades iniciales del grupo, también se establecen procesos y procedimientos especiales que garantizan el manejo integral de los residuos; estos son:
    
    .row.justify-content-center.mb-4
      .col-lg-5.mb-4
        figure
          .responsive
            img(src='@/assets/curso/tema2/img7.svg', alt='imagen ambiental', style='')
      .col-lg-7
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Diagnóstico ambiental y sanitario")
            .col-md-12.mb-4.mb-md-0
              p.mb-2 Se debe generar la caracterización de los residuos generados, tanto de forma cualitativa como cuantitativa, llevando  control sobre las cantidades obtenidas, contando los vertimientos realizados al alcantarillado público, emisiones atmosféricas y demás residuos clasificados en el Decreto 4741 de 2005.

          .row(numero="2" titulo="Programa de formación y educación")
            .col-md-12.mb-4.mb-md-0
              p.mb-2 Ofrecer capacitaciones a todos los empleados de la empresa con el fin de garantizar el conocimiento sobre el manejo de los residuos generados en la institución, contemplando estrategias y medidas requeridas para garantizar el éxito del plan.

          .row(numero="3" titulo="Segregación en la fuente")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 Consiste en la separación, almacenamiento y transporte adecuado de los residuos generados al interior de la empresa. Este paso es fundamental para dar inicio al plan de manejo integral de residuos. Para la segregación de los residuos, se debe de contar con los recipientes o contenedores adecuados para evitar así que residuos no peligrosos se contaminen al tener contacto con residuos peligrosos.
              p.mb-5 Para la realización de este procedimiento, se debe de cumplir con ciertas condiciones, entre ellas se encuentran:
              a.anexo.mb-4(:href="obtenerLink('/downloads/infografia.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p #[strong Anexo.] Plan de manejo integral de residuos

          .row(numero="4" titulo="Desactivación")
            .col-md-12.mb-4.mb-md-0
              p.mb-2 Todo residuo hospitalario debe desinfectarse y ser trasladado a plantas de incineración. Estos procesos de desinfección se realizan dependiendo del método con el que cuente la empresa. Para ello se podrá usar desinfección con autoclaves, calor en seco, radiación, microondas y uso de gases.
          .row(numero="5" titulo="Movimiento interno de residuos ")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 Consiste en trasladar los residuos desde su lugar de generación hasta el sitio de almacenamiento central o interno. Este movimiento se debe realizar en las horas donde haya menos tránsito de personas, sin coincidir con movimiento de alimentos, material no contaminado o medicamentos. También se debe tener en cuenta que estos trayectos deben de ser lo más cortos posibles y no se usarán ductos para su evacuación. 
              p.mb-4 Según el Ministerio de Salud y Medio Ambiente (2015), este proceso se registrará minuciosamente dentro del plan de manejo integral de residuos, identificando:
              .row.justify-content-center
                .col-lg-10
                  ul.lista-ul
                    li 
                      i.fas.fa-biohazard
                      | Frecuencias y horarios de recolección. 
                    li 
                      i.fas.fa-biohazard
                      | Tipos de residuos a recolectar. 
                    li 
                      i.fas.fa-biohazard
                      | Plano del establecimiento donde se identifique la ubicación de las áreas de generación de los residuos.

          .row(numero="6" titulo="Almacenamiento interno-central")
            .col-md-12.mb-4.mb-md-0
              p.mb-2 Son sitios de depósito temporal de los residuos generados, los cuales deben estar en lugares restringidos al público. Para ello, se usarán elementos de señalización adecuada, contar con buena iluminación y ventilación, cobertura contra aguas lluvias, con paredes, techo y pisos de fácil limpieza, con equipos para apagar el fuego y evitar la entrada de roedores. 
          
          .row(numero="7" titulo="Control de emisiones gaseosas y efluentes líquidos")
            .col-md-12.mb-4.mb-md-0
              p.mb-2 Los residuos líquidos hospitalarios están cargados de agentes patógenos y materia orgánica, por eso, al momento de ser vertidos en un afluente, podrían llegar a causar un daño en la salud pública si no son tratados debidamente. Para esto, todo generador de dichos residuos deberá obtener los permisos y licencias establecidas para el cuidado del medio ambiente.
          
          .row(numero="8" titulo="Plan de contingencia")
            .col-md-12.mb-4.mb-md-0
              p.mb-2 Como su nombre lo indica, es un plan para afrontar las situaciones adversas generadas dentro el manejo de residuos hospitalarios, tales como  incendios, inundaciones, terremotos, sismos, alteraciones del orden público y corte del suministro de energía y/o agua.

          .row(numero="9" titulo="Indicadores de gestión interna")
            .col-md-12.mb-4.mb-md-0
              p.mb-2 Es un conjunto de elementos que se establecen para la verificación del cumplimiento del plan integral para el manejo de los residuos hospitalarios. Uno de los procedimientos a realizar es el cálculo mensual de generación de residuos; para ello se usarán indicadores de destinación, capacitación, beneficios, estadísticas de accidentabilidad e indicadores de coincidencia. 

          .row(numero="10" titulo="Informe y reporte a las autoridades")
            .col-md-12.mb-4.mb-md-0
              p.mb-2 Los indicadores de gestión interna se transportan en un informe-reporte que tendrá que ser presentado a la autoridad ambiental y sanitaria, ya que representa el control y vigilancia del acatamiento de la normatividad. 

          .row(numero="11" titulo="Programa de seguridad y salud el trabajador ")
            .col-md-12.mb-4.mb-md-0
              p.mb-2 El Ministerio del Trabajo, comprometido con el mejoramiento de las políticas del cuidado al trabajador, estableció el
                b Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST),
                b-none  el cual debe ser implementado por todos los empleadores, y consiste en el desarrollo de un proceso lógico y por etapas, basado en la mejora continua, lo cual incluye la política, la organización, la planificación, la aplicación, la evaluación, la auditoría y las acciones de mejora con el objetivo de anticipar, reconocer, evaluar y controlar los riesgos que puedan afectar la seguridad y la salud en los espacios laborales  (Ministerio del Trabajo, Decreto 1072 de 2015 Libro 2, Parte 2, Título 4, Capítulo 6).

          .row(numero="12" titulo="Cronograma")
            .col-md-12.mb-4.mb-md-0
              p.mb-2 Se tendrá un cronograma de actividades, donde se verifique el desarrollo de las actividades propuestas en el manual para la gestión integral de residuos, conteniendo información tal como actividades, los responsables y los indicadores.

          .row(numero="13" titulo="Revisión y mejoramiento continuo de procesos")
            .col-md-12.mb-4.mb-md-0
              p.mb-2 Se realizará un proceso de evaluación continuo para identificar si las metas planteadas en el plan de manejo se han cumplido o no, y así determinar posibles acciones de mejora dentro del proceso, lo que llevará a cumplir a cabalidad lo propuesto inicialmente. 

    .bloque-texto-a.color-primario.p-4.p-md-4.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-9
          .bloque-texto-a__texto.p-4
            p Todo residuo hospitalario habrá de ser tratado para su desactivación y así realizar la disposición final de este teniendo en cuenta la normatividad y legislación vigente. Para ello, cada generador creará y efectuará un plan de limpieza y desinfección para todos los elementos, insumos, materiales y lugares que tuviesen contacto directo con los residuos, teniendo en cuenta las instrucciones y exigencias que garanticen la desactivación del material contaminado. Se cuenta con gran variedad de procesos para realizar estas actividades, entre ellos están:
        .col-lg-3.mb-4.mb-lg-0
          figure.mb-4
            img.mx-auto(src="@/assets/curso/tema2/img8.svg", alt="iamgen ambiental", style='width:215px;')

    .row.justify-content-center
      .col-lg-11
        .row.justify-content-center
          .col-auto.mb-4.p-0
            figure
              img(src='@/assets/curso/tema2/img9.svg', alt='Térmico con combustión ', style='width:260px;')
          .col-auto.mb-4.p-0
            figure
              img(src='@/assets/curso/tema2/img10.svg', alt='Térmico sin combustión', style='width:260px;')
          .col-auto.mb-4.p-0
            figure
              img(src='@/assets/curso/tema2/img11.svg', alt='Químico', style='width:260px;')
          .col-auto.mb-4.p-0
            figure
              img(src='@/assets/curso/tema2/img12.svg', alt='Por irradiación', style='width:260px;')



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
