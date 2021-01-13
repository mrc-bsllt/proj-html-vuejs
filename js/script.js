var app = new Vue(
  {
    el: "#app",
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
      ],
      columnService: [
        {
          iconPath: "avadabarbers-trimcut-icon-before.png",
          alt: "trim",
          title: "Trim &amp; Cut",
          paragraph: "Avada Barbers are experts in the lickety split trim and hair cut. Quick but careful and ridiculously good looking"
        },
        {
          iconPath: "avadabarbers-washndry-icon.png",
          alt: "wash",
          title: "Wash &amp; Dry",
          paragraph: "Take a seat in our fine leather chairs, lean back and let us lather you a fresh head in a luxurious fashion."

        },
        {
          iconPath: "avadabarbers-beardtrim-icon.png",
          alt: "beard",
          title: "Beard Tidy",
          paragraph: "Tame the tangles and untidy facial hairs like a gentleman with our Beard Tidy services from Avada Barbers."

        }
      ],
      corporateData: [
        "Avada Barbers",
        "123 New York Street",
        "New York City",
        "info@yourwebsite.com",
        "+1 (555) 555-1212",
      ],
      socialPages: [
        {
          social: "fa-facebook-f",
          prefix: "fab ",
        },
        {
          social: "fa-twitter",
          prefix: "fab ",
        },
        {
          social: "fa-youtube",
          prefix: "fab ",
        },
        {
          social: "fa-instagram",
          prefix: "fab ",
        },
      ],
      productsList: [
        {
          name: "Brush",
          image: "brush_dark-800x800.webp",
          price: "&#36;15.00"
        },
        {
          name: "Scissors",
          image: "scissors-600x600.webp",
          price: "&#36;85.00"

        },
        {
          name: "Hot oil",
          image: "hot_oil_dark-400x400.webp",
          price: "&#36;15.00"

        },
        {
          name: "Straight Razor",
          image: "straight_razor_dark-600x600.webp",
          price: "&#36;30.00"

        },
      ],
    }, //fine data
    methods: {
      toogleActiveClass: function(index) {
        this.navIcons[index].active = !this.navIcons[index].active;
      }
    }
  }
);
