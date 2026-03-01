import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBookmark } from '../dto/CreateBookmark';
import { UpdateBookmark } from '../dto/UpdateBookmark';
import { Bookmark } from './../schemas/bookmark.schema';

@Injectable()
export class BookmarksService {
  constructor(
    @InjectModel(Bookmark.name) private bookmarkModel: Model<Bookmark>,
  ) {}

  async getAllBookmarks() {
    const bookmarks = await this.bookmarkModel.find();
    return bookmarks;
  }

  async getBookmark(id: string) {
    const bookmark = await this.bookmarkModel.findById(id);
    return bookmark;
  }

  async createBookmark(Body: CreateBookmark) {
    const bookmark = await this.bookmarkModel.create(Body);
    return bookmark;
  }

  async updateBookmark(id: string, Body: UpdateBookmark) {
    const bookmark = await this.bookmarkModel.findByIdAndUpdate(id, Body, {
      new: true,
    });
    return bookmark;
  }

  async deleteBookmark(id: string) {
    await this.bookmarkModel.findByIdAndDelete(id);
    return { message: 'Bookmark deleted successfully' };
  }
}
