import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column, manyToMany, ManyToMany } from "@ioc:Adonis/Lucid/Orm";
import User from "./User";
import Category from "./Category";

export default class Book extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public slug: string;

  @column()
  public title: string;

  @column()
  public subtitle: string;

  @column()
  public author: string;

  @column()
  public pages: number;

  @column()
  public description: string;

  @column()
  public userId: number;

  @column()
  public image: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>;

  @manyToMany(() => Category)
  public categories: ManyToMany<typeof Category>
}
