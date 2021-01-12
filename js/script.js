var header = new Vue(
  {
    el: "header",
    data: {
      logoImg: {
        name: "logo",
        path: "avadabarbers-logo-x1.png"
      },
      navIcons: [
        {
          prefix: "fas ",
          type: "fa-shopping-cart",
          active: false
        },
        {
          prefix: "fas ",
          type: "fa-bars",
          active: false
        }
      ],
      mainHeaderImg: {
        name: "main img",
        path: "avadabarbers_hero_focalmirror-600x825.png"
      }
    },
    methods: {

    }
  }
);
