var app = new Vue(
  {
    el: "#app",
    data: {
      header: {
        status: false,
        logoImg: {
          name: "logo",
          path: "avadabarbers-logo-x1.png"
        },
        navIcons: [
          {
            class: "fas fa-shopping-cart",
            deleteClass: "fas fa-times",
            prefix: "fas ",
            type: "fa-shopping-cart",
            close: "fa-times",
            active: false
          },
          {
            class: "fas fa-bars",
            deleteClass: "fas fa-times",
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
            text: "Demos",
            hoverEffect: false
          },
          {
            icon: "fas fa-shopping-cart",
            text: "Buy Now",
            hoverEffect: false
          }
        ],
        layoverMenu: {
          activeBgIndex: -1,
          navLinks: [
            {
              text: "Home",
              bg: "url('img/avadabarbers-homepage-hero-bg.jpg')"
            },
            {
              text: "About Us",
              bg: "url('img/about_bg.jpg')"
            },
            {
              text: "Services",
              bg: "url('img/services_bg.jpg')"
            },
            {
              text: "Shop",
              bg: "url('img/shop_bg.jpg')"
            },
            {
              text: "Our Team",
              bg: "url('img/team_bg.jpg')"
            },
            {
              text: "Blog",
              bg: "url('img/blog_bg.jpg')"
            },
            {
              text: "Contact Us",
              bg: "url('img/contact_bg.jpg')"
            }
          ]
        },
      },
      main: {
        services: {
          status: false,
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
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut dapibus magna. Praesent semper,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut dapibus magna. Praesent semper.",
            hoverEffect: false
          },
          {
            title: "Choosing The Right Barber",
            cover: "avadabarbers-choosing-blog-700x441.jpg",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut dapibus magna. Praesent semper,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut dapibus magna. Praesent semper.",
            hoverEffect: false
          },
          {
            title: "Quick Service Guide",
            cover: "avadabarbers-ourservice-blog-700x441.jpg",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut dapibus magna. Praesent semper,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut dapibus magna. Praesent semper.",
            hoverEffect: false
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

      toogleActiveClass: function(ref, ref2, index) {
        this[ref][ref2][index].active = !this[ref][ref2][index].active;
      }, //fine funzione

      changeBgLayover: function(index) {
        this.header.layoverMenu.activeBgIndex = index;
      }, //fine funzione

      toggleHoverEffect: function (ref, ref2, index) {
        this[ref][ref2][index].hoverEffect = !this[ref][ref2][index].hoverEffect;
      }, //fine funzione

      getSectionTopCordinal: function(sectionId) {
        const section = document.getElementById(sectionId);
        const allSectionCordinal = section.getBoundingClientRect();
        return allSectionCordinal.top - 650;
      } // fine funzione

    }, // fine methods
    mounted: function () {
      const targetCordinal = this.getSectionTopCordinal("services")

      window.addEventListener('scroll', () => {
        if (window.scrollY > 1 && !this.header.navIcons[1].active) {
          this.header.status = true;
          console.log(window.scrollY, targetCordinal);
        } else {
          this.header.status = false;
        }

        if (window.scrollY >= targetCordinal) {
          this.main.services.status = true;
        }
      })
    } // fine mounted
  } // fine Vue
);
