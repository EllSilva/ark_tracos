import get_template from '../../components/get_template.js'

export default {
  data: function () {
    return {
      title: "home"
    }

  },

  methods: {

  },

  async mounted() {

        
    var swiper = new Swiper(".slide-principal", {
      spaceBetween: 30,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 12500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    function typeWrite(elemento){
      const textoArray = elemento.innerHTML.split('');
      elemento.innerHTML = ' ';
      textoArray.forEach(function(letra, i){   
        
      setTimeout(function(){
          elemento.innerHTML += letra;
      }, 75 * i)
  
    });
  }
  const titulo = document.querySelector('.titulo-principal');
  typeWrite(titulo);


    
    AOS.init({
      duration: 1000,
    });
    
     
 
  
  },
  template: await get_template('./assets/js/view/home/home')
}