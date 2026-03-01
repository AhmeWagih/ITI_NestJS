import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { ConnectToDB } from './bookmarks/utils/ConnectToDB';

async function bootstrap() {
  // await ConnectToDB();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
