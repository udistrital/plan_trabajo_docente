import { Injectable } from '@nestjs/common';

import { EstadoPlan } from './schemas/estado_plan.schema';
import { EstadoPlanDto } from './dto/estado_plan.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { FilterDto } from "../filters/dto/filter.dto";
import { FiltersService } from "../filters/filters.service";

@Injectable()
export class EstadoPlanService {
    constructor(@InjectModel(EstadoPlan.name) private readonly estado_planModel: Model<EstadoPlan>) { }

    async post(estado_planDto: EstadoPlanDto): Promise<EstadoPlan> {
        try {
            const estado_plan = new this.estado_planModel(estado_planDto);
            estado_plan.fecha_creacion = new Date();
            estado_plan.fecha_modificacion = new Date();
            return await estado_plan.save();
        }
        catch (error) {
            return null;
        }
    }

    async getAll(filterDto: FilterDto): Promise<EstadoPlan[]> {
        try {
            const filtersService = new FiltersService(filterDto);
            return await this.estado_planModel.find(filtersService.getQuery(), filtersService.getFields(), filtersService.getLimitAndOffset())
                .sort(filtersService.getSortBy()).exec();
        }
        catch (error) {
            return null;
        }
    }

    async getById(id: string): Promise<EstadoPlan> {
        try {
            return await this.estado_planModel.findById(id).exec();
        }
        catch (error) {
            return null;
        };
    }

    async put(id: string, estado_planDto: EstadoPlanDto): Promise<EstadoPlan> {
        try {
            estado_planDto.fecha_modificacion = new Date();
            await this.estado_planModel.findByIdAndUpdate(id, estado_planDto, { new: true }).exec();
            return await this.estado_planModel.findById(id).exec();
        }
        catch (error) {
            return null;
        }
    }

    async delete(id: string): Promise<any> {
        try {
            return await this.estado_planModel.findByIdAndRemove(id).exec();
        }
        catch (error) {
            return null;
        }
    }
}
