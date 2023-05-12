import { Test, TestingModule } from '@nestjs/testing';
import { ConsolidadoDocenteService } from './consolidado_docente.service';

describe('ConsolidadoDocenteService', () => {
    let service: ConsolidadoDocenteService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ConsolidadoDocenteService],
        }).compile();

        service = module.get<ConsolidadoDocenteService>(ConsolidadoDocenteService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
}
);