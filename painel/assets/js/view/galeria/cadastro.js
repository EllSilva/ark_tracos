import get_template from '../../components/get_template.js'
import api from "../../../../../static/js/api/adm.js"

export default {
  data: function () {
    return { 
      error: null,
      msg: null,
      file: "",
      titulo: null,
      categoria: null,
      link: null,
      imagemLink: null,
      descricao: null,
      nome: null,
      imagemVer: null,
      showFoto:true,
      showLink:false, 
    }
  },

  methods: {

    Btn_link() {
      this.showFoto = false;
      this.showLink = true;
      },

      Btn_foto() {
        this.showLink = false;
        this.showFoto = true;
        },

    exemploRemover() {
      this.imagemVer = "";
      },

      updatePreview(e) {
        var file,
          files = e.target.files;
        if (files.length === 0) {
          alert("foto nao foi escolhido ");
        }
        console.log(files);
        var imgTamanho = files[0].size;
        if (imgTamanho < 2035028) {
          file = new FileReader();
          file.onload = (e) => {
            this.imagemVer = e.target.result;
            this.nome = files[0].name;
          };
        } else {
          alert("o tamanho da imagem deve ser menor que 2MBs");
        }
  
        file.readAsDataURL(files[0]);
      },
  

      async sendFile() {
         
        let dataForm = new FormData();
        dataForm.append("titulo", this.titulo);
        dataForm.append("categoria", this.categoria); 
        dataForm.append("imagem", this.$refs.img.files[0]);   
        dataForm.append("link", this.link); 
        dataForm.append("descricao", this.descricao); 

        let res = await fetch(
          `http://127.0.0.1:3333/api/projectos`,
          {
            method: "POST",
            body: dataForm,
          }
        );
        let data = await res.json();
           
        if (!data) {
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
       
      },

      async cadastra_link() {

        alert("link")
        this.error = null;
  
        // localStorage.removeItem('token')
        let res = await api.cadastra_projeto(this.titulo, this.categoria, this.link);
  
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
      },

  },

  async mounted() {

  },
  template: await get_template('./assets/js/view/galeria/cadastro')
}