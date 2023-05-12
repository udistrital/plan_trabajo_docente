import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PlanDocenteController } from "./plan_docente.controller";
import { PlanDocenteService } from "./plan_docente.service";
import { PlanDocente, PlanDocenteSchema } from "./schemas/plan_docente.schema";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: PlanDocente.name, schema: PlanDocenteSchema }])
    ],
    controllers: [PlanDocenteController],
    providers: [PlanDocenteService],
    exports: [PlanDocenteService]
})
export class PlanDocenteModule { }