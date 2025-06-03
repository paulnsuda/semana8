import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
 const app = await NestFactory.create(AppModule); // Configura CORS para permitir tu frontend desdeVercel
 app.enableCors({
 origin: process.env.FRONTEND_URL || '*', //Permite tu dominio o todos (solo para pruebas)
 });

 const port = process.env.PORT || 3000;
 await app.listen(port);
}

bootstrap();