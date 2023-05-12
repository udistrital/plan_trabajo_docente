import { Test, TestingModule } from "@nestjs/testing";
import { PreAsignacionController } from "./pre_asignacion.controller";

describe("PreAsignacionController", () => {
    let controller: PreAsignacionController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [PreAsignacionController],
        }).compile();

        controller = module.get<PreAsignacionController>(PreAsignacionController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });
}
);