import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type BookmarkDocument = HydratedDocument<Bookmark>;

@Schema()
export class Bookmark {
  @Prop()
  title: string;

  @Prop()
  description?: string;

  @Prop()
  url: string;

  @Prop()
  tags?: string[];
}

export const BookmarkSchema = SchemaFactory.createForClass(Bookmark);
