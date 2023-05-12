import { Test, TestingModule } from "@nestjs/testing";
import { PlanDocenteController } from "./plan_docente.controller";

describe("PlanDocenteController", () => {
    let controller: PlanDocenteController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [PlanDocenteController],
        }).compile();

        controller = module.get<PlanDocenteController>(PlanDocenteController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });
}
);