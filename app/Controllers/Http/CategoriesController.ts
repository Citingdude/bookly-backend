import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category';
import { schema } from "@ioc:Adonis/Core/Validator";

export default class CategoriesController {
  public async index() {
    // const query = request.qs();

    // if (!query.user) {
    //   return await Book.all();
    // }

    return await Category.all();
  }
  public async create({ request }: HttpContextContract) {
    const category = new Category();
    const body = request.body();

    const newCategorySchema = schema.create({
    });

    const payload = await request.validate({ schema: newCategorySchema });

    if (payload) {

      await category.save();

      return body;
    } else {
      return "Invalid";
    }
  }
}
