import { Module } from '@nestjs/common';
import { BookmarksController } from './controllers/bookmarks.controller';
import { BookmarksService } from './services/bookmarks.service';
import { Bookmark, BookmarkSchema } from './schemas/bookmark.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Bookmark.name, schema: BookmarkSchema },
    ]),
  ],
  controllers: [BookmarksController],
  providers: [BookmarksService],
})
export class BookmarksModule {}
