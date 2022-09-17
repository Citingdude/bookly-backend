// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from "@ioc:Adonis/Core/Validator";
import User from "App/Models/User";

export default class UsersController {
  public async index() {
    const users = await User.all();

    return users;
  }

  public async find({ params }) {
    const user = await User.findOrFail(params.id);

    return user;
  }

  public async update({ params, request, response }) {
    const user = await User.findOrFail(params.id)

    const updateUserSchema = schema.create({
      email: schema.string([rules.email()])
    })

    try {
      const payload = await request.validate({
        schema: updateUserSchema
      })

      user.email = payload.email

      await user.save()
    } catch (error) {
      response.badRequest(error.messages);
    }
  }

  public async create({ request, response }) {
    const user = new User();

    const newUserSchema = schema.create({
      email: schema.string([rules.email()]),
      password: schema.string([rules.confirmed(), rules.minLength(4)]),
    });

    try {
      /**
       * Step 2 - Validate request body against
       *          the schema
       */
      const payload = await request.validate({
        schema: newUserSchema,
      });

      user.email = payload.email;
      user.password = payload.password;

      user.save();
    } catch (error) {
      /**
       * Step 3 - Handle errors
       */
      response.badRequest(error.messages);
    }
  }

  public async delete({ params }) {
    const user = await User.findOrFail(params.id)

    await user.delete()
  }
}
