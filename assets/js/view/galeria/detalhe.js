import get_template from '../../components/get_template.js'
import api from "../../../../static/js/api/adm.js"
import Carousel from '../../components/slider/Carousel.js'


export default {

  components: { Carousel },

  data: function () {
    return {

      jms2: "assets/imagem/1.jpg",


      img: null,
      id: null,
      titulo: null,
      descricao: null,
      categoria: null,
      estado: null,
      dados: [],
      jms: [], 

      img1: "undefined",
      img2: "undefined",
      img3: "undefined",
      img4: "undefined",
      img5: "undefined",
      img6: "undefined",
      img7: "undefined",
      img8: "undefined",
      img9: "undefined",
      img10: "undefined",
      img11: "undefined",
      img12: "undefined",
      img13: "undefined",
      img14: "undefined",
      img15: "undefined",
      img16: "undefined",


      slides: [
        "assets/imagem/1.jpg",
        "assets/imagem/2.jpg",
        "assets/imagem/3.jpg",
        "assets/imagem/4.jpg",
      ],

    }
  },

  methods: {

    async listar() {
      const response = await fetch(`http://127.0.0.1:3333/api/projectos/` + this.id);
      const movies = await response.json();

      return movies;
    },



    async listar2() {
      let dataForm = new FormData();

      let res = await fetch(
        `http://127.0.0.1:3333/api/projectos/` + this.id,
        {
          method: "POST",
          body: dataForm,
        }
      );
      let data = await res.json();


      if (data.error) {
        this.error = data.message;
        iziToast.error({
          title: "Error",
          message: this.error,
          position: "bottomCenter",
        });
        return null;
      }

      this.msg = data.message;
      iziToast.success({
        title: "OK",
        message: this.msg,
        position: "bottomCenter",
      });
      window.location.href = `#/`

    },

  },


  computed: {

    verImg() {
      let valores
      valores = this.jms.filter((filtrar) => {


        return filtrar != "http://127.0.0.1:3333/uploads/undefined";
      })

      console.log(valores)
      //  alert(valores)
      return valores
    },

    verImg2() {
      let valores

      valores = this.jms.filter((filtrar) => {
        return filtrar.imagem == ! "undefined";
      })

      console.log(valores)
      alert(valores)
      return valores
    },

  },

  async created() {

    // this.id_prod = 60;    this.listar(); 

    this.img = 'http://127.0.0.1:3333/uploads/'
    this.id = window.localStorage.getItem('id');

    //   this.dados = (await this.listar2()).dados

    this.dados = (await this.listar()).data

    this.id = this.dados.id
    this.titulo = this.dados.titulo
    this.categoria = this.dados.categoria
    this.estado = this.dados.estado

    this.descricao = this.dados.descricao
  
    this.jms = [
      this.img+this.dados.img1,
      this.img+this.dados.img2,
      this.img+this.dados.img3,
      this.img+this.dados.img4,
      this.img+this.dados.img5,
      this.img+this.dados.img6,
      this.img+this.dados.img7,
      this.img+this.dados.img8,
      this.img+this.dados.img9,
      this.img+this.dados.img10,
      this.img+this.dados.img11,
      this.img+this.dados.img12,
      this.img+this.dados.img13,
      this.img+this.dados.img14,
      this.img+this.dados.img15,
      this.img+this.dados.img16,

    ]


    
 
    //  { tagFuncao: 'DOC.AGRO.INDUS ', evento: 'TODOS' } ]

    // console.log(this.titulo)
    //  console.log(this.dados)

  },

  async mounted() {
  },

  filters: {
     
    esta_categoria(status) {
        let apresentar = {
            1: 'Construção Civil e Obras Públicas',
            2: 'Estudo Topográfico',
            3: 'Projectos de estradas, Esgotos e Valas',
            4: 'Projetos Arquitetônicos', 
        }
        return apresentar[status]
    },


    este_estado(status) {
        let apresentar = {
            1: 'Em execução',
            2: 'Concluido',
            3: 'Video',
        }
        return apresentar[status]
    },
},


  template: await get_template('./assets/js/view/galeria/detalhe')
}