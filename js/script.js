var app = new Vue(
  {
    el: "#app",
    data: {
      header: {
        logoImg: {
          name: "logo",
          path: "avadabarbers-logo-x1.png"
        },
        navIcons: [
          {
            prefix: "fas ",
            type: "fa-shopping-cart",
            close: "fa-times",
            active: false
          },
          {
            prefix: "fas ",
            type: "fa-bars",
            close: "fa-times",
            active: false
          },
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
        navLinks: [
          "Home",
          "About Us",
          "Services",
          "Shop",
          "Our Team",
          "Blog",
          "Contact Us"
        ]
      },
      main: {
        services: {
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
        },
        groomingProducts: {
          productsList: [
            {
              name: "Brush",
              image: "brush_dark-800x800.webp",
              price: "15.00"
            },
            {
              name: "Scissors",
              image: "scissors-600x600.webp",
              price: "85.00"
            },
            {
              name: "Hot oil",
              image: "hot_oil_dark-400x400.webp",
              price: "15.00"
            },
            {
              name: "Straight Razor",
              image: "straight_razor_dark-600x600.webp",
              price: "30.00"
            },
          ],
          monthProduct: {
            name: "Shaving Butter",
            image: "shaving_butter-400x400.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque laoreet enim est, vel molestie dolor ultrices ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          },
        },
        reviews: {
          usersReviews: [
            {
              name: "John Doe",
              avatar: "avadabarbers-trimcut-gallery6-200x200.jpg",
              rev: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis eleifend ante ut sagittis. Sed sodales, urna et imperdiet placerat, ex nisi aliquam orci, ac varius odio libero et arcu."
            },
            {
              name: "Pete Jones",
              avatar: "avadabarbers-trimcut-gallery7-200x201.jpg",
              rev: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis eleifend ante ut sagittis. Sed sodales, urna et imperdiet placerat, ex nisi aliquam orci, ac varius odio libero et arcu."

            },
            {
              name: "Mark Wilson",
              avatar: "avadabarbers-trimcut-gallery3-200x201.jpg",
              rev: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis eleifend ante ut sagittis. Sed sodales, urna et imperdiet placerat, ex nisi aliquam orci, ac varius odio libero et arcu."
            },
          ],
        },
        blogs: [
          {
            title: "Avada Barbers Now Open",
            cover: "avadabarbers-second-blog-700x441.jpg",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut dapibus magna. Praesent semper,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut dapibus magna. Praesent semper."
          },
          {
            title: "Choosing The Right Barber",
            cover: "avadabarbers-choosing-blog-700x441.jpg",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut dapibus magna. Praesent semper,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut dapibus magna. Praesent semper."
          },
          {
            title: "Quick Service Guide",
            cover: "avadabarbers-ourservice-blog-700x441.jpg",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut dapibus magna. Praesent semper,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut dapibus magna. Praesent semper."
          }
        ]
      },
      footer: {
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
      }
    }, //fine data
    methods: {
      toogleActiveClass: function(index) {
        this.header.navIcons[index].active = !this.header.navIcons[index].active;
      } //fine funzione
    } //methods
  }
);
