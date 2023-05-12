import { Test, TestingModule } from '@nestjs/testing';
import { PlanDocenteService } from './plan_docente.service';

describe('PlanDocenteService', () => {
    let service: PlanDocenteService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [PlanDocenteService],
        }).compile();

        service = module.get<PlanDocenteService>(PlanDocenteService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
}
);