import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PreAsignacionController } from "./pre_asignacion.controller";
import { PreAsignacionService } from "./pre_asignacion.service";
import { PreAsignacion, PreAsignacionSchema } from "./schemas/pre_asignacion.schema";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: PreAsignacion.name, schema: PreAsignacionSchema }])
    ],
    controllers: [PreAsignacionController],
    providers: [PreAsignacionService],
    exports: [PreAsignacionService]
})
export class PreAsignacionModule { }