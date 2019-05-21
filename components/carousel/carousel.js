class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    this.slideArr = this.carousel.querySelectorAll('.slide');
    this.slideIndex = 0;
    this.controls = this.carousel.querySelectorAll('.ctrl');
    this.controls.forEach(ctrl => ctrl.addEventListener('click', e => {
      if (!e.target.parentNode.parentNode.hasAttribute('disabled')) {
        // only fire off the cycleSlide() method if the button is not disabled
        this.cycleSlide(e)
      }

      e.preventDefault();
    }));
  }

  cycleSlide(e) {
    // Set variables to clean up logic
    let ctrl = e.target.parentNode.parentNode;
    let ctrlNum = this.slideArr.length - 1;

    if (ctrl.classList.contains('next')) {
      // disable the controls to prevent clicking until after animation finishes
      ctrl.setAttribute('disabled', '');
      // Handle incrementing of slideIndex
      if (this.slideIndex < ctrlNum) {
        this.slideIndex++;
      } else {
        this.slideIndex = 0;
      }

      // Handle Next animation
      this.slideArr.forEach((slide, i) => {
        if (slide.classList.contains('active') && ctrl.classList.contains('next')) {
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
              ctrl.removeAttribute('disabled');
            }
          });
        }
      });
    } else if (ctrl.classList.contains('prev')) {
      ctrl.setAttribute('disabled', '');
      // Handle incrementing of slideIndex
      if (this.slideIndex > 0) {
        this.slideIndex--;
      } else {
        this.slideIndex = ctrlNum;
      }
      // Handle Prev Animation
      this.slideArr.forEach((slide, i) => {
        if (slide.classList.contains('active') && ctrl.classList.contains('prev')) {
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
              ctrl.removeAttribute('disabled');
            }
          });
        }
      });
    }
  }
};

const carousels = document
  .querySelectorAll('.carousel')
  .forEach(carousel => new Carousel(carousel));