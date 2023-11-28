import get_template from './../get_template.js'

export default {
    emits: ['mouseenter', "mouseout"],
    props: ['slide', "currentSlide", "index", "direction"],
    computed: {
        transitionEffect(){
            return this.direction === "right" ? "slide-out" : "slide-in";
        }
    },
 
    template: await get_template('./assets/js/components/slider/Carouselitem')
}

