<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 6
        h1 Gestión de archivos y organización del trabajo
      .row.align-items-center
        .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
          p En este apartado se abordan las prácticas avanzadas relacionadas con la gestión de archivos y la organización del trabajo en Microsoft PowerPoint, entendidas como competencias clave para garantizar la eficiencia, la calidad y la correcta distribución de presentaciones profesionales.
          .row
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src="@/assets/curso/tema6/img1.svg", alt="", style="width: 210px;").m-auto
            .col-md
              .p-4.bg-c21
                .row.h-100.align-items-center
                  .col-12
                    p.mb-0 Se profundiza en la optimización del peso de los archivos sin afectar la calidad visual, el guardado en distintos formatos, la importación y edición de diapositivas entre presentaciones y la preparación de archivos para su entrega o publicación. Estos aspectos resultan fundamentales en contextos académicos, laborales y empresariales, donde el manejo responsable de la información digital constituye un requisito indispensable.
        .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema6/img1.png", alt="", style="width: 470px;").m-auto
      Separador
      #t_6_1
      .titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 6.1 Optimización del peso de archivos sin perder calidad visual
      .row.mb-4
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema6/img2.png", alt="", style="width: 400px;").m-auto
        .col-lg-8(data-aos="fade-left")
          .row.mb-3
            .col-12
              .p-4.bg-c22
                p.mb-0 La optimización del peso de una presentación constituye una práctica esencial cuando los archivos deben compartirse, almacenarse o proyectarse en diferentes dispositivos y plataformas. Un archivo excesivamente pesado puede generar dificultades de envío, tiempos de carga elevados y fallos durante la presentación, afectando la experiencia del usuario y la percepción de profesionalismo.
          p.mb-0 Microsoft PowerPoint ofrece herramientas específicas para reducir el tamaño de los archivos sin comprometer significativamente la calidad visual. Una de las prácticas más relevantes es la compresión de imágenes, que permite disminuir la resolución de los recursos gráficos según el medio de uso final, como pantalla, proyección o distribución digital (Microsoft Corporation, 2024).
      .row.bg-c18
        .col-12
          .px-5
            .titulo-sexto.color-secundario.mb-3
              p.mb-0 #[b Figura 12.] Herramienta para comprimir imágenes en PowerPoint
            .row.mb-4
              .col-12
                .p-5.bg-c15(data-aos="fade-right")
                  figure
                    img(src="@/assets/curso/tema6/img3.png", alt="Ventana de configuración para comprimir imágenes, ajustar resolución y eliminar áreas recortadas.", style="width: 600px;").m-auto
            .row.align-items-center.mb-4
              .col-lg-auto.mb-4.mb-lg-0(data-aos="fade-right")
                figure
                  img(src="@/assets/curso/tema6/img2.svg", alt="", style="width: 100px;").m-auto
              .col-lg(data-aos="fade-left")
                p.mb-0 La herramienta Comprimir imágenes permite reducir el tamaño del archivo al disminuir la resolución de las imágenes y eliminar áreas recortadas. Esto resulta especialmente útil para compartir presentaciones por correo electrónico o publicarlas en plataformas con límites de tamaño. Además, permite aplicar la compresión a todas las imágenes o únicamente a las seleccionadas. A continuación, se presentan las principales acciones para optimizar archivos de manera profesional:
            .row.align-items-center.mb-4
              .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
                figure
                  img(src="@/assets/curso/tema6/img4.png", alt="", style="width: 340px;").m-auto
              .col-lg-8(data-aos="fade-left")
                SlyderF.circl-arrow(columnas="col-md-6")
                  .tarjeta.color-primario1.p-4
                    .row.justify-content-center.mb-3
                      .col-6
                        img(src='@/assets/curso/tema6/img3.svg' alt='')
                    p.text-center #[b Comprimir imágenes]
                    p.text-center Reduce el tamaño del archivo ajustando resolución y eliminando áreas recortadas innecesarias.
                  .tarjeta.color-primario1.p-4
                    .row.justify-content-center.mb-3
                      .col-6
                        img(src='@/assets/curso/tema6/img4.svg' alt='')
                    p.text-center #[b Seleccionar resolución adecuada]
                    p.text-center Permite adaptar la calidad según uso final: impresión, pantalla o distribución digital.
                  .tarjeta.color-primario1.p-4
                    .row.justify-content-center.mb-3
                      .col-6
                        img(src='@/assets/curso/tema6/img5.svg' alt='')
                    p.text-center #[b Evitar imágenes excesivamente pesadas]
                    p.text-center Previene archivos lentos y mejora el rendimiento general de la presentación.
                  .tarjeta.color-primario1.p-4
                    .row.justify-content-center.mb-3
                      .col-6
                        img(src='@/assets/curso/tema6/img6.svg' alt='')
                    p.text-center #[b Reutilizar recursos visuales]
                    p.text-center Favorece coherencia gráfica y disminuye duplicación innecesaria de elementos.
                  .tarjeta.color-primario1.p-4
                    .row.justify-content-center.mb-3
                      .col-6
                        img(src='@/assets/curso/tema6/img7.svg' alt='')
                    p.text-center #[b Eliminar diapositivas no utilizadas]
                    p.text-center Reduce peso total y mantiene orden en el documento final.
                  .tarjeta.color-primario1.p-4
                    .row.justify-content-center.mb-3
                      .col-6
                        img(src='@/assets/curso/tema6/img8.svg' alt='')
                    p.text-center #[b Gestionar audio y video]
                    p.text-center Optimiza contenido multimedia para evitar archivos demasiado pesados o incompatibles.
                  .tarjeta.color-primario1.p-4
                    .row.justify-content-center.mb-3
                      .col-6
                        img(src='@/assets/curso/tema6/img9.svg' alt='')
                    p.text-center #[b Guardar versiones finales limpias]
                    p.text-center Facilita distribución profesional y mejora tiempos de carga.
      .row.bg-c9
        .col-12
          .p-5
            .row.align-items-center
              .col-lg-auto.mb-4.mb-lg-0(data-aos="fade-right")
                figure
                  img(src="@/assets/curso/tema1/img2.png", alt="", style="width: 60px;").m-auto
              .col-lg(data-aos="fade-left")
                p.text-white.mb-0 Estas prácticas contribuyen a presentaciones más funcionales, eficientes y alineadas con estándares de productividad digital en entornos organizacionales y educativos.
      Separador
      #t_6_2
      .titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.2 Guardado de presentaciones en distintos formatos
      p.mb-4 El guardado de presentaciones en diferentes formatos responde a necesidades específicas de uso, distribución y compatibilidad. Microsoft PowerPoint permite almacenar archivos en formatos editables, de visualización y de distribución, lo que amplía las posibilidades de uso más allá del entorno de edición. La selección adecuada del formato debe considerar el propósito de la presentación, el público objetivo y el medio de entrega. A continuación, se presentan los formatos más utilizados y su aplicación recomendada:

</template>

<script>
export default {
  name: 'Tema6',
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

<style lang="sass"></style>
