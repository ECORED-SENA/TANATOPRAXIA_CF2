<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Manejo de residuos hospitalarios y similares

    p.mb-4
    .row.justify-content-center.mb-3
      .col-lg-4
        figure.mb-2
          img.mx-auto(src="@/assets/curso/tema1/img1.svg", alt="iamgen ambiental", style='width:330px;')
      .col-lg-8
        p.mb-4 El manejo de residuos ayudará a prevenir riesgos personales y colectivos, entendiendo por riesgos personales aquellos que afectan la integridad física y emocional de un ser humano a causa de una actividad laboral, mientras que un riesgo colectivo es un fenómeno o peligro que puede manifestarse en cualquier momento en un entorno social o natural.
        .cajon.color-secundario.p-4.mb-2
          p.mb-0 Conociendo las características de estos riesgos, se crean diferentes protocolos, que guían a los profesionales en buenas prácticas sobre el manejo de los residuos sanitarios. Estas prácticas tienen técnicas necesarias para su ejecución, a partir de los procedimientos de gestión interna y externa de residuos sanitarios.

    .bloque-texto-a.color-primario.p-4.p-md-4.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-9
          .bloque-texto-a__texto.p-4
            p Para iniciar este proceso de aprendizaje, se debe entender que los residuos hospitalarios y similares se definen como elementos, insumos, materiales o instrumentos que tienen suficientes patógenos como para causar una enfermedad. Normalmente, están relacionados con fluidos corporales y sangre, resultantes de las actividades de diferentes sectores, tales como: cementerios, centros de estética y cosmetología, docencia, farmacias, mataderos, salud, tanatopraxia y veterinarios.
        .col-lg-3.mb-4.mb-lg-0
          figure.mb-4
            img.mx-auto(src="@/assets/curso/tema1/img2.svg", alt="iamgen ambiental", style='width:215px;')
          
              
  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
