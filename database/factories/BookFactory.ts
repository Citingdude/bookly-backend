import book from "App/Models/Book";
import Factory from "@ioc:Adonis/Lucid/Factory";

export default Factory.define(book, ({ faker }) => {
  return {
    slug: faker.lorem.slug(),
    title: faker.lorem.words(),
    subtitle: faker.lorem.sentence(),
    author: faker.name.firstName("male"),
    pages: faker.datatype.number(999),
    description: faker.lorem.paragraphs(),
    userId: 1,
  };
}).build();
