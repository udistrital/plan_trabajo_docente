import { Injectable } from '@nestjs/common';

import { CargaPlan } from './schemas/carga_plan.schema';
import { CargaPlanDto } from './dto/carga_plan.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { FilterDto } from "../filters/dto/filter.dto";
import { FiltersService } from "../filters/filters.service";

@Injectable()
export class CargaPlanService {
    constructor(@InjectModel(CargaPlan.name) private readonly carga_planModel: Model<CargaPlan>) { }

    async post(carga_planDto: CargaPlanDto): Promise<CargaPlan> {
        try {
            const carga_plan = new this.carga_planModel(carga_planDto);
            carga_plan.fecha_creacion = new Date();
            carga_plan.fecha_modificacion = new Date();
            return await carga_plan.save();
        }
        catch (error) {
            return null;
        }
    }

    async getAll(filterDto: FilterDto): Promise<CargaPlan[]> {
        try {
            const filtersService = new FiltersService(filterDto);
            return await this.carga_planModel.find(filtersService.getQuery(), filtersService.getFields(), filtersService.getLimitAndOffset())
                .sort(filtersService.getSortBy()).exec();
        }
        catch (error) {
            return null;
        }
    }

    async getById(id: string): Promise<CargaPlan> {
        try {
            return await this.carga_planModel.findById(id).exec();
        }
        catch (error) {
            return null;
        };
    }

    async put(id: string, carga_planDto: CargaPlanDto): Promise<CargaPlan> {
        try {
            carga_planDto.fecha_modificacion = new Date();
            await this.carga_planModel.findByIdAndUpdate(id, carga_planDto, { new: true }).exec();
            return await this.carga_planModel.findById(id).exec();
        }
        catch (error) {
            return null;
        }
    }

    async delete(id: string): Promise<any> {
        try {
            return await this.carga_planModel.findByIdAndRemove(id).exec();
        }
        catch (error) {
            return null;
        }
    }
}
