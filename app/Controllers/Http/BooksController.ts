import Book from "App/Models/Book";
import { schema } from "@ioc:Adonis/Core/Validator";

export default class BooksController {
  public async index() {
    const books = await Book.all();

    return books;
  }

  public async create({ request }) {
    const book = new Book();
    const body = request.body();

    const newBookSchema = schema.create({
      slug: schema.string(),
      title: schema.string(),
      subtitle: schema.string(),
      author: schema.string(),
      pages: schema.number(),
    });

    const payload = await request.validate({ schema: newBookSchema });

    if (payload) {
      book.slug = payload.slug;
      book.title = payload.title;
      book.subtitle = payload.subtitle;
      book.author = payload.author;
      book.pages = payload.pages;

      await book.save();

      return body;
    } else {
      return "Invalid";
    }
  }

  public async find({ params }) {
    const book = await Book.findOrFail(params.id);

    return book;
  }

  public async delete({ params }) {
    const book = await Book.findOrFail(params.id);

    await book.delete();

    return `Deleted book with id: ${params.id}`;
  }
}
