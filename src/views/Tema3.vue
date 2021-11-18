<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Comunicación y sensibilización
    
    p.mb-4 Todos los grandes y medianos generadores de residuos hospitalarios están en la obligación de crear y efectuar un plan de comunicación y sensibilización sobre el manejo adecuado de residuos, con el fin de dar a conocer las particularidades y necesidades de los procesos implementados para la gestión de estos.  Este programa debe contar con actividades y necesidades especiales que garanticen que todas las personas involucradas con el manejo de residuos tendrán la socialización y capacitación necesaria para la realización de su obligación laboral. Entre su programa de desarrollo, se deberá contar con:


    .tarjeta--container.tarjetas-claras.row.mb-5
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/tema3/img1.svg', alt='icono que acompaña')
        .row.justify-content-center
          .col-auto
            h2.mb-5.text-center Caracterización de la población a <br>quien va a capacitar
            p.mb-4.text-center ¿Qué tipo de personal recibirá esta sensibilización? Si es personal operativo, administrativo, asistencial, pacientes o usuarios.
      
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/tema3/img2.svg', alt='icono que acompaña')
        .row.justify-content-center
          .col-auto
            h2.text-center(style='margin-bottom: 75px;') Programa de capacitación
            p.mb-4.text-center Donde se deben describir el objetivo las frecuencias, las metodologías a usar, los temas a presentar, a quién va dirigido y quién realizará la capacitación. Este debe incluir la socialización de cada uno de los componentes desarrollados en el Plan de Gestión.



    .cajon.color-secundario.p-4.mb-5
      p.mb-0 Los documentos sobre la implementación y realización del programa de sensibilización deberán reposar en el archivo, para cuando la entidad competente los solicite. Los micro y pequeños generadores de residuos deben contar con métodos de divulgación del plan de manejo integral de residuos hospitalarios y similares.
</template>

<script>
export default {
  name: 'Tema3',
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
