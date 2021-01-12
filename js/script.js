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
      },
      asideItem: [
        {
          icon: "fas fa-desktop",
          text: "Demos"
        },
        {
          icon: "fas fa-shopping-cart",
          text: "Buy Now"
        }
      ]
    }, //fine data
    methods: {
      toogleActiveClass: function(index) {
        this.navIcons[index].active = !this.navIcons[index].active;
      }
    }
  }
);
