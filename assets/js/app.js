import Vue from './vendor/vue.js'
import Router from './vendor/vue-router.js'

import get_template from './components/get_template.js'

import page_menu from './components/menu/home.js'
Vue.component('p-menu', page_menu)

import page_footer from './components/footer/home.js'
Vue.component('p-footer', page_footer)

import carousel from './components/slider/Carousel.js'
Vue.component('c-carousel', carousel)

import carouselitem from './components/slider/Carouselitem.js'
Vue.component('c-carouselitem', carouselitem)

import carouselcontrols from './components/slider/CarouselControls.js'
Vue.component('c-carouselcontrols', carouselcontrols)

import carouselindicators from './components/slider/CarouselIndicators.js'
Vue.component('c-carouselindicators', carouselindicators)
 

import page_home from './view/home/home.js'
Vue.component('p-home', page_home)

import page_servicos from './view/servicos/home.js'
Vue.component('p-servicos', page_servicos)

import page_contrucao from './view/servicos/contrucao.js'
Vue.component('p-contrucao', page_contrucao)
import page_reabilitacao from './view/servicos/reabilitacao.js'
Vue.component('p-reabilitacao', page_reabilitacao)
import page_arquitetura from './view/servicos/arquitetura.js'
Vue.component('p-arquitetura', page_arquitetura)
import page_topografico from './view/servicos/topografico.js'
Vue.component('p-topografico', page_topografico) 
 
import page_sobre from './view/sobre/home.js'
Vue.component('p-sobre', page_sobre)

import page_galeria from './view/galeria/home.js'
Vue.component('p-galeria', page_galeria)

import page_detalhe from './view/galeria/detalhe.js'
Vue.component('p-detalhe', page_detalhe)

import page_blogs from './view/blogs/home.js'
Vue.component('p-blogs', page_blogs)

import page_contato from './view/contato/home.js'
Vue.component('p-contato', page_contato)

Vue.use(Router)



const routes = [
    { path: '/', component: { template: '<p-home></p-home>' } },
    { path: '/servicos', component: { template: '<p-servicos></p-servicos>' } },
 
    { path: '/construcao', component: { template: '<p-contrucao></p-contrucao>' } },
    { path: '/reabilitacao', component: { template: '<p-reabilitacao></p-reabilitacao>' } },
    { path: '/arquitetura', component: { template: '<p-arquitetura></p-arquitetura>' } },
    { path: '/topografico', component: { template: '<p-topografico></p-topografico>' } }, 

    { path: '/sobre', component: { template: '<p-sobre></p-sobre>' } },
    { path: '/portfolio', component: { template: '<p-galeria></p-galeria>' } },
    { path: '/detalhe', component: { template: '<p-detalhe></p-detalhe>' } },

    { path: '/blog', component: { template: '<p-blogs></p-blogs>' } },

    { path: '/contato', component: { template: '<p-contato></p-contato>' } }
]

const router = new Router({ routes })

new Vue({
    router,
    data: {}
}).$mount('#app')

;(async () => { })()