<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Riesgos y reportes
    
    p.mb-4 En la manipulación de residuos hospitalarios existe el riesgo de sufrir un accidente laboral, por ello se procura que todos los agentes involucrados en la recolección, almacenamiento y transporte de dichos residuos usen adecuadamente los elementos de bioseguridad que disminuyen o eliminan el riesgo de contraer una enfermedad ocasionada por algún agente infeccioso-patógeno que pudiese ingresar en el cuerpo.

    .row.justify-content-center.mb-4
      .col-lg-5
        figure.mb-4
          img.mx-auto(src='@/assets/curso/tema5/img1.jpg', alt='Mal manejo de residuos hospitalarios', style='width:410px;')
      .col-lg-7
        p.mb-4 Para evitar enfermedades ocasionadas por el mal manejo de los residuos hospitalarios, todo el personal de recolección y transporte siempre deberá contar con elementos de protección personal, tales como gafas, guantes resistentes a pinchazos de aguja, cortes por vidrios u otros materiales cortopunzantes, y ropa única y exclusivamente para esta actividad (delantal desechable o lavable y botas de goma). Todo esto ayudará a minimizar el posible riesgo de contagio por exposición a residuos peligrosos.
        .cajon.color-secundario.p-4.mb-5
          p.mb-0 Algunas de las enfermedades que el personal puede sufrir a causa del contacto y posible contaminación con los agentes infecciosos o químicos en los residuos peligrosos son:
        .row.justify-content-center
          .col-lg-10
            ul.lista-ul
              li 
                i.fas.fa-biohazard
                p.mb-0 #[strong Agentes infecciosos: ] hepatitis, rubéola, tuberculosis, SIDA, entre otros.
              li 
                i.fas.fa-biohazard
                p.mb-0 #[strong Agentes químicos: ] cáncer, lesiones en la piel, infertilidad, entre otros.
    
    p.mb-5 Si llegase a ocurrir un accidente laboral, suceso repentino que sobrevenga por una causa o con ocasión del trabajo y que produzca en el trabajador una lesión orgánica, una perturbación funcional o psiquiátrica, una invalidez o la muerte (Ley 1562 de 2012), deberá ser reportado inmediatamente ante la ARL, siguiendo la ruta establecida por cada entidad aseguradora. Las generalidades de este paso a paso son:
    
    .tarjeta--container.tarjetas-claras.row.mb-5
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/tema5/img1.svg', alt='icono que acompaña')
        .row.justify-content-center
          .col-auto
            h2.mb-5.text-center Reporte del empleador
            p.mb-4.text-center Comunicarse con las líneas de atención de la ARL, quienes le proveerán la información necesaria para direccionar al trabajador accidentado a la IPS más cercana, de acuerdo con el lugar de la ocurrencia del accidente y, posteriormente, el presunto accidente de trabajo.
      
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/tema5/img2.svg', alt='icono que acompaña')
        .row.justify-content-center
          .col-auto
            h2.text-center.mb-5(style='') Reporte como empleado
            p.mb-4.text-center Se tendrá que comunicar inmediatamente el suceso a su empleador, para que este active la ruta y usted pueda recibir la atención que necesita. Si este accidente genera una afectación de la condición de salud que no da espera, podrá visitar una sala de urgencias.

    .cajon.color-secundario.p-4.mb-4
      p.mb-0 Al reconocer y aplicar estas disposiciones para el manejo integral de residuos biosanitarios y similares, se está garantizando el cuidado de la salud personal y del medio ambiente, ayudando así en la reducción de materiales contaminantes y que, en ocasiones, van a procesos inadecuados de tratamiento, los cuales proveerán un medio propicio para la reproducción de diferentes agentes patógenos, provocando así diferentes tipos de enfermedades, tanto en el empleado del generador como en la población. Igualmente, se producirán afectaciones en el medio ambiente, como efecto invernadero, reducción de la capa de ozono y contaminación del suelo, el agua y el aire.  Y, por último, se dará cumplimiento a los lineamientos y requerimientos establecidos por normativa para la gestión de dichos recursos.



</template>

<script>
export default {
  name: 'Tema5',
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
