import { Injectable } from '@nestjs/common';

import { PlanDocente } from './schemas/plan_docente.schema';
import { PlanDocenteDto } from './dto/plan_docente.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { FilterDto } from "../filters/dto/filter.dto";
import { FiltersService } from "../filters/filters.service";

@Injectable()
export class PlanDocenteService {
    constructor(@InjectModel(PlanDocente.name) private readonly plan_docenteModel: Model<PlanDocente>) { }

    async post(plan_docenteDto: PlanDocenteDto): Promise<PlanDocente> {
        try {
            const plan_docente = new this.plan_docenteModel(plan_docenteDto);
            plan_docente.fecha_creacion = new Date();
            plan_docente.fecha_modificacion = new Date();
            return await plan_docente.save();
        }
        catch (error) {
            return null;
        }
    }

    async getAll(filterDto: FilterDto): Promise<PlanDocente[]> {
        try {
            const filtersService = new FiltersService(filterDto);
            return await this.plan_docenteModel.find(filtersService.getQuery(), filtersService.getFields(), filtersService.getLimitAndOffset())
                .sort(filtersService.getSortBy()).exec();
        }
        catch (error) {
            return null;
        }
    }

    async getById(id: string): Promise<PlanDocente> {
        try {
            return await this.plan_docenteModel.findById(id).exec();
        }
        catch (error) {
            return null;
        };
    }

    async put(id: string, plan_docenteDto: PlanDocenteDto): Promise<PlanDocente> {
        try {
            plan_docenteDto.fecha_modificacion = new Date();
            await this.plan_docenteModel.findByIdAndUpdate(id, plan_docenteDto, { new: true }).exec();
            return await this.plan_docenteModel.findById(id).exec();
        }
        catch (error) {
            return null;
        }
    }

    async delete(id: string): Promise<any> {
        try {
            return await this.plan_docenteModel.findByIdAndRemove(id).exec();
        }
        catch (error) {
            return null;
        }
    }
}
