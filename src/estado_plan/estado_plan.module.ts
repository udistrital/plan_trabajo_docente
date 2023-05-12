import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { EstadoPlanController } from "./estado_plan.controller";
import { EstadoPlanService } from "./estado_plan.service";
import { EstadoPlan, EstadoPlanSchema } from "./schemas/estado_plan.schema";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: EstadoPlan.name, schema: EstadoPlanSchema }])
    ],
    controllers: [EstadoPlanController],
    providers: [EstadoPlanService],
    exports: [EstadoPlanService]
})
export class EstadoPlanModule { }