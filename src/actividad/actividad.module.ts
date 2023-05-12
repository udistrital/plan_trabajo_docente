import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ActividadController } from "./actividad.controller";
import { ActividadService } from "./actividad.service";
import { Actividad, ActividadSchema } from "./schemas/actividad.schema";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Actividad.name, schema: ActividadSchema }])
    ],
    controllers: [ActividadController],
    providers: [ActividadService],
    exports: [ActividadService]
})
export class ActividadModule { }