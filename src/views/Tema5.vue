<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 5
        h1 Inserción y edición de elementos visuales
      .row
        .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
          p En esta unidad temática se profundiza en el uso de elementos visuales dentro de Microsoft PowerPoint como recursos estratégicos para fortalecer la comunicación del mensaje. Se aborda la inserción, edición y optimización de imágenes, íconos y formas desde una perspectiva técnica y comunicativa, considerando criterios de diseño visual, derechos de autor y rendimiento del archivo. El dominio de estos elementos permite construir presentaciones claras, coherentes y alineadas con estándares profesionales, favoreciendo la comprensión de la información y el impacto visual en contextos académicos y productivos.
          .row
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src="@/assets/curso/tema5/img1.svg", alt="", style="width: 210px;").m-auto
            .col-md
              .p-4.bg-c21
                .row.h-100.align-items-center
                  .col-12
                    p.mb-0 Las personas procesan la información visual con mayor rapidez que el texto, lo que convierte a los elementos gráficos en aliados estratégicos para la transmisión efectiva de mensajes complejos (Lidwell, Holden, & Butler, 2015). En este sentido, Microsoft PowerPoint ofrece herramientas que permiten integrar recursos visuales de manera controlada y coherente, siempre que se apliquen criterios profesionales de selección y edición.
        .col-lg-5(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema5/img1.png", alt="", style="width: 440px;").m-auto
      Separador
      #t_5_1
      .titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 5.1 Inserción de imágenes, íconos y formas
      .row.align-items-center.mb-4
        .col-lg-auto.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema5/img2.svg", alt="", style="width: 100px;").m-auto
        .col-lg(data-aos="fade-left")
          p.mb-0 Microsoft PowerPoint permite insertar imágenes desde archivos locales, bancos de imágenes en línea o recursos corporativos. Desde un enfoque profesional, la selección de imágenes debe responder a criterios de pertinencia, calidad y coherencia con el mensaje que se desea comunicar.
      .titulo-sexto.color-secundario.mb-3
        p.mb-0 #[b Figura 9.] Opciones para la inserción de imágenes
      .row.mb-4
        .col-12
          .p-5.bg-c15(data-aos="fade-right")
            figure
              img(src="@/assets/curso/tema5/img2.png", alt="Texto alternativo: Menú Insertar de PowerPoint con opciones para agregar imágenes desde dispositivo, banco de imágenes o recursos en línea.", style="width: 500px;").m-auto
      .row.mb-4
        .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
          .row.mb-3
            .col-12
              .p-4.bg-c21
                p.mb-0 Las imágenes utilizadas deben reforzar el contenido de la diapositiva. En entornos profesionales, se recomienda emplear recursos de alta resolución y estilo uniforme para mantener una identidad visual consistente a lo largo de la presentación.
          p.mb-0 Las formas permiten organizar información, destacar conceptos y construir estructuras visuales claras. Rectángulos, círculos, flechas y líneas pueden utilizarse para enfatizar relaciones, procesos o jerarquías. Su uso avanzado implica integrarlas estratégicamente, respetando principios de alineación y proporción, y evitando la saturación visual. A continuación, se sintetizan los principales elementos visuales y su aplicación estratégica:
        .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema5/img3.svg", alt="", style="width: 400px;").m-auto
      .row
        .col-md-6.col-lg-3.mb-4.mb-lg-0
          .p-4.bg-c22
            figure.mb-4
              img(src="@/assets/curso/tema5/img4.svg", alt="", style="width: 100px;").m-auto
            p.text-center #[b Imágenes]
            p.text-center.mb-0 Refuerzan mensajes, contextualizan información y mejoran el impacto visual. Deben ser pertinentes, nítidas y coherentes con el estilo general.
        .col-md-6.col-lg-3.mb-4.mb-lg-0
          .p-4.bg-c22
            figure.mb-4
              img(src="@/assets/curso/tema5/img5.svg", alt="", style="width: 100px;").m-auto
            p.text-center #[b Íconos]
            p.text-center.mb-0 Facilitan la síntesis de conceptos y mejoran la comprensión rápida de ideas o categorías.
        .col-md-6.col-lg-3.mb-4.mb-md-0
          .p-4.bg-c22
            figure.mb-4
              img(src="@/assets/curso/tema5/img6.svg", alt="", style="width: 100px;").m-auto
            p.text-center #[b Formas]
            p.text-center.mb-0 Permiten estructurar procesos, destacar datos, conectar ideas o construir diagramas personalizados.
        .col-md-6.col-lg-3
          .p-4.bg-c22
            figure.mb-4
              img(src="@/assets/curso/tema5/img7.svg", alt="", style="width: 100px;").m-auto
            p.text-center #[b Recursos corporativos]
            p.text-center.mb-0 Favorecen identidad institucional mediante uso de logotipos, colores y piezas gráficas autorizadas.
      Separador
      #t_5_2
      .titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 5.2 Edición de imágenes y objetos visuales
      .row.align-items-center.mb-4
        .col-lg-auto.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema5/img8.svg", alt="", style="width: 100px;").m-auto
        .col-lg(data-aos="fade-left")
          p.mb-0 Una vez insertado un recurso visual, Microsoft PowerPoint ofrece herramientas para ajustar tamaño, recortar, alinear y conservar proporciones. Mantener la relación original de una imagen resulta fundamental para evitar distorsiones que afecten la calidad visual. La alineación precisa de imágenes y objetos contribuye a una presentación ordenada y profesional. Para ello, se recomienda utilizar guías, cuadrículas y opciones de alineación automática disponibles en la aplicación.
      .titulo-sexto.color-secundario.mb-3
        p.mb-0 #[b Figura 10.] Aplicación de acciones y comandos a múltiples objetos visuales seleccionados
      .row.mb-4
        .col-12
          .p-5.bg-c15(data-aos="fade-right")
            figure
              img(src="@/assets/curso/tema5/img3.png", alt="Diapositiva con varios objetos seleccionados y herramientas de formato para alinear, distribuir, agrupar y ordenar elementos.", style="width: 500px;").m-auto
      p.mb-4 Al seleccionar varios objetos visuales, es posible ordenarlos y ajustarlos rápidamente mediante las opciones de Formato, lo que optimiza tiempos de edición y mejora la consistencia visual.
      .row.bg-c25.mb-4
        .col-12
          .px-5
            .titulo-sexto.color-secundario.mb-3
              p.mb-0 #[b Figura 11.] Transformación de puntos de las formas
            .row.mb-4
              .col-12
                .p-5.bg-c15(data-aos="fade-right")
                  figure
                    img(src="@/assets/curso/tema5/img4.png", alt="Forma editada en PowerPoint con nodos y controladores visibles para modificar curvas y contornos personalizados.", style="width: 500px;").m-auto
            p.mb-4 Al utilizar las opciones de edición avanzada sobre una forma, pueden modificarse sus puntos de anclaje para generar transformaciones personalizadas. Esta funcionalidad amplía las posibilidades creativas y permite construir recursos gráficos ajustados a necesidades específicas. A continuación, se presentan las principales acciones de edición:
            .row.align-items-center.mb-4
              .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
                figure
                  img(src="@/assets/curso/tema5/img6.png", alt="", style="width: 340px;").m-auto
              .col-lg-8(data-aos="fade-left")
                SlyderF.circl-arrow(columnas="col-md-6")
                  .tarjeta.color-primario1.p-4
                    .row.justify-content-center.mb-3
                      .col-5
                        img(src='@/assets/curso/tema5/img7.png' alt='')
                    p.text-center #[b Recorte]
                    p.text-center Ajusta el encuadre de imágenes según el espacio disponible.
                  .tarjeta.color-primario1.p-4
                    .row.justify-content-center.mb-3
                      .col-auto
                        img(src='@/assets/curso/tema5/img8.png' alt='', style="width: 110px;")
                    p.text-center #[b Uniformidad visual]
                    p.text-center Adapta dimensiones sin afectar proporción visual.
                  .tarjeta.color-primario1.p-4
                    .row.justify-content-center.mb-3
                      .col-5
                        img(src='@/assets/curso/tema5/img9.png' alt='')
                    p.text-center #[b Alineación]
                    p.text-center Ordena objetos respecto a márgenes, centro o entre sí.
                  .tarjeta.color-primario1.p-4
                    .row.justify-content-center.mb-3
                      .col-auto
                        img(src='@/assets/curso/tema5/img10.png' alt='', style="width: 100px;")
                    p.text-center #[b Distribución]
                    p.text-center Mantiene espacios uniformes entre varios elementos.
                  .tarjeta.color-primario1.p-4
                    .row.justify-content-center.mb-3
                      .col-auto.mt-2.mb-3
                        img(src='@/assets/curso/tema5/img11.png' alt='', style="width: 150px;")
                    p.text-center #[b Agrupación]
                    p.text-center Une objetos para moverlos o editarlos como una sola unidad.
                  .tarjeta.color-primario1.p-4
                    .row.justify-content-center.mb-3
                      .col-auto
                        img(src='@/assets/curso/tema5/img12.png' alt='', style="width: 100px;")
                    p.text-center #[b Edición de puntos]
                    p.text-center Personaliza formas mediante modificación de nodos y curvas.
            p.mb-4 A continuación, se presenta el procedimiento general para insertar y manipular elementos visuales dentro de la herramienta.
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/NzoQrP4qTjs?si=OgTGzL7TsOeR4BRX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .row.align-items-center.mb-4
        .col-lg-auto.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema5/img9.svg", alt="", style="width: 100px;").m-auto
        .col-lg(data-aos="fade-left")
          p.mb-0 El uso responsable de imágenes y recursos gráficos constituye un aspecto ético y legal fundamental en la creación de presentaciones profesionales. No todas las imágenes disponibles en internet pueden utilizarse libremente, por lo que resulta necesario conocer los tipos de licencias y las condiciones de uso.
      .row
        .col-md-6.col-lg-3.mb-4.mb-lg-0
          .p-4.bg-c22
            figure.mb-4
              img(src="@/assets/curso/tema5/img10.svg", alt="", style="width: 100px;").m-auto
            p.text-center #[b Licencias de uso]
            p.text-center.mb-0 Refuerzan mensajes, contextualizan información y mejoran el impacto visual. Deben ser pertinentes, nítidas y coherentes con el estilo general.
        .col-md-6.col-lg-3.mb-4.mb-lg-0
          .p-4.bg-c22
            figure.mb-4
              img(src="@/assets/curso/tema5/img5.svg", alt="", style="width: 100px;").m-auto
            p.text-center #[b Autoría]
            p.text-center.mb-0 Reconocer la fuente cuando sea requerido.
        .col-md-6.col-lg-3.mb-4.mb-md-0
          .p-4.bg-c22
            figure.mb-4
              img(src="@/assets/curso/tema5/img6.svg", alt="", style="width: 100px;").m-auto
            p.text-center #[b Bancos autorizados]
            p.text-center.mb-0 Utilizar repositorios confiables o recursos institucionales.
        .col-md-6.col-lg-3
          .p-4.bg-c22
            figure.mb-4
              img(src="@/assets/curso/tema5/img7.svg", alt="", style="width: 100px;").m-auto
            p.text-center #[b Uso responsable]
            p.text-center.mb-0 Evitar copiar material protegido sin permiso correspondiente.

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

<style lang="sass"></style>
