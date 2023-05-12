import { Test, TestingModule } from "@nestjs/testing";
import { EstadoPlanController } from "./estado_plan.controller";

describe("ActividadController", () => {
    let controller: EstadoPlanController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [EstadoPlanController],
        }).compile();

        controller = module.get<EstadoPlanController>(EstadoPlanController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });
}
);