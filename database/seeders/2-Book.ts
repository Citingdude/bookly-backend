import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import BookFactory from "Database/factories/BookFactory";

export default class extends BaseSeeder {
  public async run() {
    BookFactory.createMany(20);
  }
}
