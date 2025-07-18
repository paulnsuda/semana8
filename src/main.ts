import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'https://fronted-semanaa8-wd5e.vercel.app',
    methods: 'GET,POST,PUT,DELETE',
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
