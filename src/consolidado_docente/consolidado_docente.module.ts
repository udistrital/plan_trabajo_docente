import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ConsolidadoDocenteController } from "./consolidado_docente.controller";
import { ConsolidadoDocenteService } from "./consolidado_docente.service";
import { ConsolidadoDocente, ConsolidadoDocenteSchema } from "./schemas/consolidado_docente.schema";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: ConsolidadoDocente.name, schema: ConsolidadoDocenteSchema }])
    ],
    controllers: [ConsolidadoDocenteController],
    providers: [ConsolidadoDocenteService],
    exports: [ConsolidadoDocenteService]
})
export class ConsolidadoDocenteModule { }