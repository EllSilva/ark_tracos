import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Projecto from 'App/Models/Projecto'

import { v4 as uuidv4 } from 'uuid'
import Application from '@ioc:Adonis/Core/Application'

export default class ProjectosController {

  public async index({ }: HttpContextContract) {
    const projecto = await Projecto.all()
    return projecto
  }

  private validationOptions = {
    types: ['image'],
    size: '2mb',
  }

  //CADASTRO DE PUBLICACAO

  public async store({ request, response }: HttpContextContract) {
    const body = request.only(['titulo', 'categoria', 'imagem', 'link', 'descricao'])

    try {
      //ENVIO DE IMAGEM
      const img = request.file('imagem', this.validationOptions)
      if (img) {
        const imgName = `${uuidv4()}.${img!.extname}`

        await img.move(Application.tmpPath('uploads'), {
          name: imgName,
        })

        body.imagem = imgName
      } else {
        const projectos = await Projecto.create(body)
        response.status(201)

        return {
          message: 'Galeria de Projecto criado com sucesso',
          data: projectos,
        }
      }

      const projectos = await Projecto.create(body)

      response.status(201)

      return {
        message: 'Galeria de Projecto criado com sucesso',
        data: projectos,
      }
    } catch (error) {
      return response.unauthorized(
        {
          error: true,
          message: 'Erro no Salvar, Verifique seus dados'
        }
      )
    }
  }


}
