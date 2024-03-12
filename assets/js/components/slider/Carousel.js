import get_template from './../get_template.js'
import CarouselItem from './Carouselitem.js'
import CarouselControls from './CarouselControls.js'
import CarouselIndicators from './CarouselIndicators.js'


export default {

    props: {
        slides: {
            type: Array,
            required: true
        },
        controls: {
            type: Boolean,
            default: false
        },
        indicators: {
            type: Boolean,
            default: false
        },
        interval: {
            type: Number,
            default: 5000
        },
    },

    components: { CarouselItem, CarouselControls, CarouselIndicators },

    data: function () {
        return {

            currentSlide: 0,
            sliderInterval: null,
            dierection: "right"
        }
    },

    methods: {
        setCurrentSlide(index) {
            this.currentSlide = index;
        },

        prev(step = -1) {
            const index = this.currentSlide > 0 ? this.currentSlide + step : this.slides.length - 1;
            this.setCurrentSlide(index);
            this.dierection = "left";
            this.startSlideTimer();
        },
        _next(step = 1) {
            const index = this.currentSlide < this.slides.length - 1 ? this.currentSlide + step : 0;
            this.setCurrentSlide(index);
            this.dierection = "right";
            this.startSlideTimer();
        },
        next(step = 1) {
            this._next(step);
            this.startSlideTimer();
        },

        startSlideTimer() {
            this.stopSlideTimer();
            this.sliderInterval = setInterval(() => {
                this._next();
            }, this.interval)
        },
        stopSlideTimer() {
            clearInterval(this.sliderInterval);
        },

        switchSlide(index) {
            const step = index - this.currentSlide;
            if (step > 0) {
                this.next(step)
            } else {
                this.prev(step)
            }
        },
    },

    mounted() {
        this.startSlideTimer();
    },

    beforeUnmount() {
        this.stopSlideTimer();
    },

    template: await get_template('./assets/js/components/slider/Carousel')
}