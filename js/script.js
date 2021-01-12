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
      ]
    },
    methods: {

    }
  }
);
