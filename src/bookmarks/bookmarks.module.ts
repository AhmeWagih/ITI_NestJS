import { Module } from '@nestjs/common';
import { BookmarksController } from './controllers/bookmarks.controller';
import { BookmarksService } from './services/bookmarks.service';

@Module({
  imports: [],
  controllers: [BookmarksController],
  providers: [BookmarksService],
})
export class BookmarksModule {}
