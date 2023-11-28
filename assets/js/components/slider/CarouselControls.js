import get_template from './../get_template.js'

export default {

   emits: ['prev', 'next'],
 
    template: await get_template('./assets/js/components/slider/CarouselControls')
}