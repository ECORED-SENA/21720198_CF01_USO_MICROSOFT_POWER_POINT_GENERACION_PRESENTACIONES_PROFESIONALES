<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      .row.bg-c1
        .col-12
          .px-5.pb-5
            .row.align-items-center
              .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
                figure
                  img(src="@/assets/curso/intro/img2.png", alt="", style="width: 300px;").m-auto
              .col-lg-9(data-aos="fade-left")
                p Microsoft PowerPoint es mucho más que una herramienta para crear diapositivas: #[b es un medio clave para comunicar ideas, apoyar decisiones y transmitir información de forma clara y visual en contextos académicos, laborales y empresariales]. En este componente formativo comenzarás a explorar las posibilidades que ofrece PowerPoint para estructurar y presentar contenidos de manera profesional, comprendiendo su papel dentro de los entornos productivos actuales.
                .row
                  .col-xl.bg-c2.mb-4.mb-xl-0
                    .p-4.h-100
                      .row.align-items-center.h-100
                        .col-12
                          p.mb-0 A lo largo de este componente, se fortalecerán tus #[b habilidades digitales] al aprender a organizar información, aplicar diseños adecuados y utilizar correctamente los elementos básicos de la aplicación, lo que permitirá mejorar la calidad de las presentaciones y aumentar el impacto de los mensajes en diferentes escenarios de la vida personal y profesional.
                  .col-xl-auto.ps-0
                    figure
                      img(src="@/assets/curso/intro/img3.png", alt="", style="width: 400px;").m-auto
      .row.bg-c3
        .col-12
          .p-5
            .row.align-items-center
              .col-lg-auto.mb-4.mb-lg-0(data-aos="fade-right")
                figure
                  img(src="@/assets/curso/intro/img4.png", alt="", style="width: 100px;").m-auto
              .col-lg(data-aos="fade-left")
                p.text-white.mb-0 El desarrollo de los contenidos se abordará desde #[b un enfoque práctico y progresivo], partiendo del reconocimiento del entorno de PowerPoint y avanzando hacia la gestión estructural de presentaciones, el uso de diseños prediseñados y la correcta integración de elementos visuales, siempre a través de ejemplos cercanos al contexto real y alineados con las exigencias del mundo laboral.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
