<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    
    p.mb-5 Apreciado aprendiz, sea bienvenido a esta experiencia de aprendizaje enfocada en la gestión integral de residuos provenientes de actividades relacionadas con la prestación de servicios de salud y similares. Para iniciar, está invitado a revisar el siguiente recurso de aprendizaje.

    .p-2.margenNegativo.mb-5(style='background-color: #D1EBEA')
      p.mb-0.text-center
        b Este componente de formación le brinda información sobre el manejo de los residuos obtenidos de actividades hospitalarias y similares

    .row.justify-content-center.mb-4
      .col-lg-6.align-self-center
        figure.mb-4
          img.mx-auto(src="@/assets/curso/img1.svg", alt="", style='width:566px;')
      .col-lg-6
        .titulo-segundo.mb-4
          h3 ¿Por qué surge este momento?
        p.mb-4 Surge debido a que la prestación de servicios de salud y similares generan desechos contaminantes debido al uso y manipulación de elementos que entran en contacto con:
        figure.mb-4
          img.mx-auto(src="@/assets/curso/img2.svg", alt="", style='')


    figure.mb-5
      img.mx-auto(src="@/assets/curso/img3.svg", alt="", style='')

    .row.justify-content-center
      .col-lg-6.mb-4
        .titulo-segundo.mb-4
          h3 ¿Cuál es la intención de este momento?
        p.mb-4 Desarrollar conocimientos, habilidades y actitudes necesarios para entender los protocolos y actividades que se deben acoger en la gestión integral de residuos y así suministrar un adecuado manejo, recolección y destino final de los residuos biosanitarios generados.
        .cajon.color-secundario.p-4
          p.mb-0 Finalmente, recuerde estos aspectos para iniciar y culminar con éxito el componente de formación.
      .col-lg-6.mb-4
        figure.mb-4
          img.mx-auto(src="@/assets/curso/img4.svg", alt="imagen ambiental", style='width:495px;')

    .row.justify-content-center.mb-4
      .col-auto.mb-4
        figure
          img.mx-auto(src="@/assets/curso/img5.svg", alt="Organice un horario de estudio individual y colaborativo.", style='width:230px;')
      .col-auto.mb-4
        figure
          img.mx-auto(src="@/assets/curso/img6.svg", alt="Revise las notificaciones del curso constantemente.", style='width:230px;')
      .col-auto.mb-4
        figure
          img.mx-auto(src="@/assets/curso/img7.svg", alt="Participe de los foros y actividades sugeridas por el instructor.", style='width:230px;')
      .col-auto.mb-4
        figure
          img.mx-auto(src="@/assets/curso/img8.svg", alt="Entregue las evidencias esperadas durante este componente de formación. Si tiene alguna inquietud no dude en escribirnos.", style='width:230px;')

    .row.justify-content-center
      .col-lg-6
        .p-3.mb-5(style='background-color: #D1EBEA')
          p.mb-0.text-center
            b Si tiene alguna inquietud no dude en escribirnos. 

    p.mb-5 Para la elaboración de este componente, se abordaron varios autores conocidos en 
      b manejo de residuos hospitalarios y similares, 
      b-none de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos de 
      b tanatopraxia.

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
