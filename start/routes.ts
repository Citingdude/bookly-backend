import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async () => {
  return { hello: "world" };
});

// Books
Route.get("/books", "BooksController.index");
Route.get("/books/:id", "BooksController.find");
Route.post("/books", "BooksController.create");
Route.delete("/books/:id", "BooksController.delete");

// Users
Route.get("/users", "UsersController.index");
Route.post("/users", "UsersController.create");
