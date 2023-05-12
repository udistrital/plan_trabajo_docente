import { NestFactory } from '@nestjs/core';
import * as fstat from 'fs';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { environment } from './config/configuration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('plan_trabajo_docente_crud')
    .setDescription('API CRUD para el registro de planes de trabajo docente para el cliente de SGA')
    .setVersion('1.0')
    .addTag('plan_trabajo_docente')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  fstat.writeFileSync('./swagger.json', JSON.stringify(document));
  SwaggerModule.setup('api', app, document);

  await app.listen(parseInt(environment.HTTP_PORT, 10) || 8080);
}
bootstrap();
