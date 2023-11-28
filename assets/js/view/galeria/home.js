import get_template from '../../components/get_template.js'
import api from "../../../../static/js/api/adm.js"

export default {
    data: function () {
        return {

            title: "Contato",
            img: null,
            id: null,
            titulo: null,
            descricao: null,
            imagem: null,

            projectos: [],

            jms: "todos",
            todos: true,
            webX: false,
            appX: false,
            psdX: false,
            portifolio: true,
            kim: "kim0",
            teste: "teste0",
            joferbino: "joferbino0",
            doar: "doar0",
            amiguinho: "amiguinho0",
        }
    },

    methods: {


        todas() {
            this.jms = "todos",
                this.todos = true,
                this.webX = false,
                this.appX = false,
                this.psdX = false
        },

        kim() {
        },

        web() {
            this.jms = "web",
                this.todos = false,
                this.webX = true,
                this.appX = false,
                this.psdX = false
        },

        app() {
            this.jms = "app",
                this.todos = false,
                this.webX = false,
                this.appX = true,
                this.psdX = false
        },

        psd() {
            this.jms = "psd",
                this.todos = false,
                this.webX = false,
                this.appX = false,
                this.psdX = true
        },

        verPagina() {

        },

        async listar() {
            let res = await api.lista_projecto();
            return res;
        }, 

        async visualizar(id) {
            window.localStorage.setItem('id', this.projectos = id);
            console.log(this.projectos = id)
            window.location.href = "#/detalhe"
        },

    },

    async mounted() {

        this.img = 'http://127.0.0.1:3333/uploads/'
        this.id = window.localStorage.getItem('id');
        // listar()

        this.projectos = (await this.listar()).data;
        console.log(this.projectos)
 

    },

    template: await get_template('./assets/js/view/galeria/home')
}