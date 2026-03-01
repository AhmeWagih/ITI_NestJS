import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookmark } from '../dto/CreateBookmark';
import { UpdateBookmark } from '../dto/UpdateBookmark';
import { BookmarkSchema } from './../schemas/bookmark.schema';

@Injectable()
export class BookmarksService {
  async getAllBookmarks() {
    try {
      const bookmarks = await BookmarkSchema.find();
      return bookmarks;
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async getBookmark(id: string) {
    try {
      const bookmark = await BookmarkSchema.findById(id);
      if (!bookmark) throw new NotFoundException('Bookmark not found');
      return bookmark;
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async createBookmark(Body: CreateBookmark) {
    try {
      const bookmark = await BookmarkSchema.create(Body);
      return bookmark;
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async updateBookmark(id: string, Body: UpdateBookmark) {
    try {
      const bookmark = await BookmarkSchema.findByIdAndUpdate(id, Body, {
        new: true,
      });
      if (!bookmark) throw new NotFoundException('Bookmark not found');
      return bookmark;
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async deleteBookmark(id: string) {
    try {
      const bookmark = await BookmarkSchema.findByIdAndDelete(id);
      if (!bookmark) throw new NotFoundException('Bookmark not found');
      return bookmark;
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
