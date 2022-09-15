import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import User from "App/Models/User";

export default class extends BaseSeeder {
  public static developmentOnly = true;

  public async run() {
    await User.create({
      email: "glenn.reumers@hotmail.com",
      password: "password",
    });
  }
}
