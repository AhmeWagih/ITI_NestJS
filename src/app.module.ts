import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookmarksModule } from './bookmarks/bookmarks.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/ITI_NestLJS'),
    BookmarksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
