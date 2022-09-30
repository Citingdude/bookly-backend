import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async () => {
  return { hello: "world" };
});

// API
Route.group(() => {
  // V1
  Route.group(() => {
    // Books
    Route.get("/books", "BooksController.index");
    Route.get("/books/:id", "BooksController.find");
    Route.post("/books", "BooksController.create");
    Route.delete("/books/:id", "BooksController.delete");

    // Users
    Route.get("/users", "UsersController.index");
    Route.get("/users/:id", "UsersController.find");
    Route.patch("/users/:id", "UsersController.update");
    Route.post("/users", "UsersController.create");
    Route.delete("/users/:id", "UsersController.delete");

    // Categories
    Route.get("/categories", "CategoriesController.index");
    Route.post("/categories", "CategoriesController.create");

    // Authentication
    Route.post("/login", "AuthController.login");
    Route.post("/logout", "AuthController.logout");

    // Dashboard
    Route.get("dashboard", async ({ auth }) => {
      await auth.use("api").authenticate();
      console.log(auth.use("api").user!);
    });
  }).prefix("/v1");
}).prefix("/api");
