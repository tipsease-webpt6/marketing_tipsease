class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    this.slideArr = this.carousel.querySelectorAll('.slide');
    this.slideIndex = 0;
    this.nextBtn = this.carousel.querySelector('.next');
    this.prevBtn = this.carousel.querySelector('.prev');
    this.nextBtn.addEventListener('click', e => this.cycleSlide(e));
    this.prevBtn.addEventListener('click', e => this.cycleSlide(e));
  }

  cycleSlide(e) {
    // Set variables to clean up logic
    let ctrl = e.target.parentNode.parentNode;
    let ctrlNum = this.slideArr.length - 1;

    // Remove Active Class
    this.slideArr.forEach(slide => slide.classList.remove('active'));

    if (ctrl.classList.contains('next')) {
      if (this.slideIndex < ctrlNum) {
        this.slideIndex++;
      } else {
        this.slideIndex = 0;
      }

      this.slideArr[this.slideIndex].classList.add('active');
    } else if (ctrl.classList.contains('prev')) {
      if (this.slideIndex > 0) {
        this.slideIndex--;
      } else {
        this.slideIndex = ctrlNum;
      }
      this.slideArr[this.slideIndex].classList.add('active');
    }

    e.preventDefault();
  }
}

const carousels = document
  .querySelectorAll('.carousel')
  .forEach(carousel => new Carousel(carousel));
