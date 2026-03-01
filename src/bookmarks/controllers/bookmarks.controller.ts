import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { BookmarksService } from '../services/bookmarks.service';
import { type CreateBookmark } from '../dto/CreateBookmark';
import { type UpdateBookmark } from '../dto/UpdateBookmark';

@Controller('bookmarks')
export class BookmarksController {
  constructor(private bookmarksService: BookmarksService) {}

  @Get()
  getAllBookmarks() {
    return this.bookmarksService.getAllBookmarks();
  }

  @Get(':id')
  getBookmark(@Param('id') id: string) {
    return this.bookmarksService.getBookmark(id);
  }

  @Post()
  createBookmark(@Body() Body: CreateBookmark) {
    return this.bookmarksService.createBookmark(Body);
  }

  @Patch(':id')
  updateBookmark(@Body() Body: UpdateBookmark, @Param('id') id: string) {
    return this.bookmarksService.updateBookmark(id, Body);
  }

  @Delete(':id')
  deleteBookmark(@Param('id') id: string) {
    return this.bookmarksService.deleteBookmark(id);
  }
}
