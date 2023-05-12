import { Test, TestingModule } from "@nestjs/testing";
import { ConsolidadoDocenteController } from "./consolidado_docente.controller";

describe("ConsolidadoDocenteController", () => {
    let controller: ConsolidadoDocenteController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ConsolidadoDocenteController],
        }).compile();

        controller = module.get<ConsolidadoDocenteController>(ConsolidadoDocenteController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });
}
);