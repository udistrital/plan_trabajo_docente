import { Test, TestingModule } from '@nestjs/testing';
import { CargaPlanService } from './carga_plan.service';

describe('CargaPlanService', () => {
    let service: CargaPlanService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [CargaPlanService],
        }).compile();

        service = module.get<CargaPlanService>(CargaPlanService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
}
);