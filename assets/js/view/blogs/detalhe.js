import get_template from '../../components/get_template.js'
import api from "../../../../static/js/api/adm.js"
import Carousel from '../../components/slider/Carousel.js'


export default {

  components: { Carousel },

  data: function () {
    return {
      error: null,
      msg: null,
      img: null,
      id: null,
      titulo: null,
      descricao: null,
      categoria: null,
      estado: null,
      dados: [],
      cometario: [],
      jms: [],
      public: [],
      imgUrl: null,
      imgPublic: "undefined",

      nome: null,
      email: null,
      texto: null

    }
  },

  methods: {

    async cometarios() {

      this.error = null;
      // localStorage.removeItem('token')
      let res = await api.cometar_public(this.id, this.nome, this.email, this.texto);

      if (res.error) {
        this.error = res.message;
        iziToast.error({
          title: "Error",
          message: this.error,
          position: "bottomCenter",
        });
        return null;
      }

      this.msg = res.message;
      iziToast.success({
        title: "OK",
        message: this.msg,
        position: "bottomCenter",
      });
      this.listar()

    },


    async listar() {
      let res = await api.lista_blog_um(this.id);

      return res;
  },


    async listarPublic() {
      let res = await api.lista_blog();
      return res;
    },

  },


  computed: {

    verImg() {
      let valores
      valores = this.jms.filter((filtrar) => {


        return filtrar != "https://api.ark-tracos.com/uploads/undefined";
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

    // this.id_prod = 60;  fetch  this.listar(); 

    this.imgUrl = 'https://api.ark-tracos.com/uploads/'
    this.id = window.localStorage.getItem('id');


    this.dados = (await this.listar()).data
    this.id = this.dados.id
    this.titulo = this.dados.titulo
    this.descricao = this.dados.descricao
    // this.categoria = this.dados.categoria
    // this.estado = this.dados.estado
    this.img = this.imgUrl + this.dados.imagem,

      this.cometario = this.dados.comentarios

    this.public = (await this.listarPublic()).data;
    this.imgPublic = this.imgUrl + this.public.imagem

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


  template: await get_template('./assets/js/view/blogs/detalhe')
}