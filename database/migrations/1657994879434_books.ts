import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "books";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table.string("slug").unique().notNullable();
      table.text("title").notNullable();
      table.text("subtitle").nullable();
      table.text("author").notNullable();
      table.integer("pages");
      table.text("description").nullable();
      table.text("image").nullable();
      table
        .integer("user_id")
        .unsigned()
        .references("users.id")
        .onDelete("CASCADE"); // delete post when user is deleted

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
