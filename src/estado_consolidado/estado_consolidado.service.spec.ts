import { Test, TestingModule } from '@nestjs/testing';
import { EstadoConolidadoService } from './estado_consolidado.service';

describe('EstadoConsolidadoService', () => {
    let service: EstadoConolidadoService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [EstadoConolidadoService],
        }).compile();

        service = module.get<EstadoConolidadoService>(EstadoConolidadoService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
}
);