import get_template from '../../components/get_template.js'
import api from "../../../../static/js/api/adm.js"

export default {
    data: function () {
        return {
            title: "Contato",
            img: null,
            id_prod: null,
            titulo: null,
            descricao: null,
            imagem: null,

            produtos: [],
        }
    },

    methods: {
        async visualizar(id) {
            globalThis._blog = this.produtos.find(aluguel => aluguel.id == id)
            // window.location.href = "#/detalhe"
        },

        async listar() {
            let res = await api.lista_blog();

            return res;
        },


        async listar2() {
            let res = await api.listar_blog(
                this.titulo,
                this.descricao,
                this.imagem,
            )

            return res
        },

    },

    async mounted() {
        // this.id_prod = 60;

        let dados2 = (await this.listar2()).data
        this.titulo = dados2.titulo
        this.descricao = dados2.descricao
        this.imagem = dados2.imagem
        console.log("aquiiiiiii " + dados2.descricao)

        let dados = (await this.listar()).data;

        this.img = 'http://127.0.0.1:3333/uploads/'

        console.log(this.img)
        this.produtos = (await this.listar()).data;
        console.log(this.produtos)
    },

    template: await get_template('./assets/js/view/blogs/home')
}