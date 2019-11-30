class Swiper {
    constructor(params) {
        this.wrapper = document.querySelector(params.wrapper);
        this.slides = document.querySelectorAll(params.slides);
        this.preBtn = document.querySelector(params.preBtn);
        this.nextBtn = document.querySelector(params.nextBtn);
        this.preBtn.addEventListener('click', () => {
            window.clearInterval(this.slideInterval);
            this.preSlide();
            this.autoSwitch();
        });
        this.nextBtn.addEventListener('click', ()=>{
            window.clearInterval(this.slideInterval);
            this.nextSlide();
            this.autoSwitch();
        });
        this.currentIndex = 0;
        this.nums = this.slides.length;//轮播图的数量
        this.autoSwitch();
    }

    //切换下一张图
    nextSlide() {
        this.slides[this.currentIndex].classList.remove('active');
        if (++this.currentIndex >= this.nums) {
            this.currentIndex = 0;
        }
        this.slides[this.currentIndex].classList.add('active');
    }

    preSlide() {
        this.slides[this.currentIndex].classList.remove('active');
        if (--this.currentIndex < 0) {
            this.currentIndex = this.nums-1;
        }
        this.slides[this.currentIndex].classList.add('active');
    }

    autoSwitch() {
        this.slideInterval = setInterval(() => {
            this.nextSlide();
        }, 5000);
    }
}

let homeSwiper = new Swiper({
    wrapper: '.swiper-wrapper',
    slides: '.home-hero-container .swiper-slide',
    preBtn: '.home-hero-container .swiper-container .swiper-btn-pre',
    nextBtn: '.home-hero-container .swiper-container .swiper-btn-next'
});