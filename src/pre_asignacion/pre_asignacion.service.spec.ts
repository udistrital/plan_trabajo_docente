import { Test, TestingModule } from '@nestjs/testing';
import { PreAsignacionService } from './pre_asignacion.service';

describe('PreAsignacionService', () => {
    let service: PreAsignacionService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [PreAsignacionService],
        }).compile();

        service = module.get<PreAsignacionService>(PreAsignacionService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
}
);