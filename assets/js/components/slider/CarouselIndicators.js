import get_template from '../get_template.js'

export default {

    emits: ['switch'],
   props: ['total', 'currentIndex'],
 
    template: await get_template('./assets/js/components/slider/CarouselIndicators')
}