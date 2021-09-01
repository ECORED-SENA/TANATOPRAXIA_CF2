<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Sistema de vigilancia epidemiológica

    figure.mb-5
      .video
        <iframe width="933" height="525" src="https://www.youtube.com/embed/z2IgW8GoefI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    


    p.mb-5 El sistema de vigilancia epidemiológica (SVE) es un programa de vigilancia que permite identificar, recolectar y monitorear la salud de los empleados, para así determinar la incidencia de los factores de riesgo de cada una de las operaciones y prevenir enfermedades laborales. Este sistema también ayudará a implementar y fomentar en todos los trabajadores mejores hábitos de salud laboral, para así promover una mejor calidad de vida. Este proceso comienza con:
    
    .row.justify-content-center.mb-4
      .col-lg-5.mb-4
        figure
          img.mx-auto(src='@/assets/curso/tema4/img1.svg', alt='imagen ambiental', style='width:470px;')
      .col-lg-7
        LineaTiempoD.color-primario
          p.text-medium(numero="1" titulo="Evaluación inicial del trabajador") Son los exámenes médicos realizados antes de ser contratado, donde se verifica que el trabajador se encuentra con buenas condiciones de salud, tanto físicas como mentales, para realizar el oficio al cual va a ingresar.
          
          p.text-medium(numero="2" titulo="Evaluaciones periódicas") Son las pruebas que se les realizan a los trabajadores para determinar su adaptabilidad a la labor realizada y el impacto de esta en sus condiciones de salud. Estas también ayudan a establecer el nivel de factor de riesgo del empleado ante el ambiente laboral.
          
          p.text-medium(numero="3" titulo="Evaluación de egreso") Son los análisis que se le realizan al trabajador cuando ha terminado su trabajo, con el fin de conocer las condiciones de salud general con las que este ha culminado sus labores.
        
    p.mb-5 El SVE tiene un procedimiento establecido en cuatro (4) fases:
    .row.justify-content-center
      .col-lg-10
        .row.justify-content-center
          .col-auto.p-0.mb-5
            figure.mb-2
              img.mx-auto(src='@/assets/curso/tema4/img2.svg', alt='Identificación', style='width:234px;')
        
          .col-auto.p-0.mb-5
            figure.mb-2
              img.mx-auto(src='@/assets/curso/tema4/img3.svg', alt='Valoración', style='width:234px;')
        
          .col-auto.p-0.mb-5
            figure.mb-2
              img.mx-auto(src='@/assets/curso/tema4/img4.svg', alt='Verificar', style='width:234px;')
        
          .col-auto.p-0.mb-5
            figure.mb-2
              img.mx-auto(src='@/assets/curso/tema4/img5.svg', alt='Evaluación', style='width:234px;')
    
    p.mb-4 Conocer, distinguir y aplicar las fases del sistema de vigilancia epidemiológica conlleva al mejoramiento del entorno laboral y la calidad de vida, ya que su propósito final es conocer y valorar la incidencia de determinadas enfermedades o riesgos que pueden padecer los trabajadores, para así realizar planes de acciones de mejora, promoción y prevención en salud.
    .cajon.color-secundario.p-4.mb-5
      p.mb-0 Al culminar la realización y el análisis de este sistema de vigilancia, se obtendrán instrumentos, condiciones y recursos para obtener información verídica que permita realizar el monitoreo del estado y las tendencias de la situación de salud, y de esta manera determinar y orientar políticas en salud. Es necesario recordar que este proceso debe ser cíclico y monitoreado permanentemente, para obtener información verídica que permita la constante actualización sobre los factores de riesgos a los cuales están expuestos los trabajadores.
    
</template>

<script>
export default {
  name: 'Tema4',
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
