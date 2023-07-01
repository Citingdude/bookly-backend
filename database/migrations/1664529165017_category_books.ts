import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'book_category'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      // relationship
      table.integer('book_id').unsigned().references("books.id")
      table.integer('category_id').unsigned().references("categories.id")
      table.unique(['book_id', 'category_id'])

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
