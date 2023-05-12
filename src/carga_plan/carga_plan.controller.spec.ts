import { Test, TestingModule } from "@nestjs/testing";
import { CargaPlanController } from "./carga_plan.controller";

describe("CargaPlanController", () => {
    let controller: CargaPlanController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [CargaPlanController],
        }).compile();

        controller = module.get<CargaPlanController>(CargaPlanController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });
}
);