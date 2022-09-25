import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class AuthController {
  public async login({ auth, request, response }: HttpContextContract) {
    console.log(auth);
    console.log(request);
    console.log(response);

    const email = "glenn.reumers@hotmail.com";
    const password = "password";

    try {
      const token = await auth.use("api").attempt(email, password);
      return token;
    } catch {
      return response.unauthorized("Invalid credentials");
    }
  }
}
