import { Test, TestingModule } from "@nestjs/testing";
import { Estado_consolidadoController } from "./estado_consolidado.controller";

describe("ActividadController", () => {
    let controller: Estado_consolidadoController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [Estado_consolidadoController],
        }).compile();

        controller = module.get<Estado_consolidadoController>(Estado_consolidadoController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });
}
);