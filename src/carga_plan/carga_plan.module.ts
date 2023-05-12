import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CargaPlanController } from "./carga_plan.controller";
import { CargaPlanService } from "./carga_plan.service";
import { CargaPlan, CargaPlanSchema } from "./schemas/carga_plan.schema";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: CargaPlan.name, schema: CargaPlanSchema }])
    ],
    controllers: [CargaPlanController],
    providers: [CargaPlanService],
    exports: [CargaPlanService]
})
export class CargaPlanModule { }