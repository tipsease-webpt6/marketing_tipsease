class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    this.slideArr = this.carousel.querySelectorAll('.slide');
    this.slideIndex = 0;
    this.controls = this.carousel.querySelectorAll('.ctrl');
    this.init = document.addEventListener('DOMContentLoaded', () => {
      this.timer();

      this.controls.forEach(ctrl => ctrl.addEventListener('click', e => {
        if (!e.target.parentNode.parentNode.hasAttribute('disabled')) {
          // only fire off the cycleSlide() method if the button is not disabled
          this.cycleSlide(e)
        }

        e.preventDefault();
      }));
    })
  }

  timer() {
    window.slideInterval = setInterval(() => {
      // Handle incrementing of slideIndex
      if (this.slideIndex < (this.slideArr.length - 1)) {
        this.slideIndex++;
      } else {
        this.slideIndex = 0;
      }

      this.slideArr.forEach((slide) => {
        if (slide.classList.contains('active')) {
          TweenLite.fromTo(slide, 1, {
            opacity: 1,
            x: 0
          }, {
            opacity: 0,
            x: "-500px",
            onComplete: () => {
              // When animation finishes remove active class from current slide and apply it to the next slide and animate
              slide.classList.remove('active');
              this.slideArr[this.slideIndex].classList.add('active');
              TweenLite.fromTo(this.slideArr[this.slideIndex], 1, {
                opacity: 0,
                x: "500px"
              }, {
                opacity: 1,
                x: 0
              });
            }
          });
        }
      });
    }, 5000);
  }

  slideRight(btn, num) {
    // disable the controls to prevent clicking until after animation finishes
    btn.setAttribute('disabled', '');
    // Handle incrementing of slideIndex
    if (this.slideIndex < num) {
      this.slideIndex++;
    } else {
      this.slideIndex = 0;
    }

    // Handle Next animation
    this.slideArr.forEach((slide) => {
      if (slide.classList.contains('active') && btn.classList.contains('next')) {
        TweenLite.fromTo(slide, 1, {
          opacity: 1,
          x: 0
        }, {
          opacity: 0,
          x: "-500px",
          onComplete: () => {
            // When animation finishes remove active class from current slide and apply it to the next slide and animate
            slide.classList.remove('active');
            this.slideArr[this.slideIndex].classList.add('active');
            TweenLite.fromTo(this.slideArr[this.slideIndex], 1, {
              opacity: 0,
              x: "500px"
            }, {
              opacity: 1,
              x: 0
            });
            btn.removeAttribute('disabled');
            this.timer();
          }
        });
      }
    });
  }

  slideLeft(btn, num) {
    btn.setAttribute('disabled', '');

    // Handle incrementing of slideIndex
    if (this.slideIndex > 0) {
      this.slideIndex--;
    } else {
      this.slideIndex = num;
    }

    // Handle Prev Animation
    this.slideArr.forEach((slide) => {
      if (slide.classList.contains('active') && btn.classList.contains('prev')) {
        TweenLite.fromTo(slide, 1, {
          opacity: 1,
          x: 0
        }, {
          opacity: 0,
          x: "500px",
          onComplete: () => {
            // When animation finishes remove active class from current slide and apply it to the prev slide and animate
            slide.classList.remove('active');
            this.slideArr[this.slideIndex].classList.add('active');
            TweenLite.fromTo(this.slideArr[this.slideIndex], 1, {
              opacity: 0,
              x: "-500px"
            }, {
              opacity: 1,
              x: 0
            });
            btn.removeAttribute('disabled');
            this.timer();
          }
        });
      }
    });
  }

  cycleSlide(e) {
    let ctrl = e.target.parentNode.parentNode;
    let ctrlNum = this.slideArr.length - 1;

    clearInterval(window.slideInterval);

    if (ctrl.classList.contains('next')) {
      this.slideRight(ctrl, ctrlNum);
    }

    if (ctrl.classList.contains('prev')) {
      this.slideLeft(ctrl, ctrlNum);
    }
  }
};

const carousels = document
  .querySelectorAll('.carousel')
  .forEach(carousel => new Carousel(carousel));