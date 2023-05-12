import { Injectable } from '@nestjs/common';

import { PreAsignacion } from './schemas/pre_asignacion.schema';
import { PreAsignacionDto } from './dto/pre_asignacion.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { FilterDto } from "../filters/dto/filter.dto";
import { FiltersService } from "../filters/filters.service";

@Injectable()
export class PreAsignacionService {
    constructor(@InjectModel(PreAsignacion.name) private readonly pre_asignacionModel: Model<PreAsignacion>) { }

    async post(pre_asignacionDto: PreAsignacionDto): Promise<PreAsignacion> {
        try {
            const pre_asignacion = new this.pre_asignacionModel(pre_asignacionDto);
            pre_asignacion.fecha_creacion = new Date();
            pre_asignacion.fecha_modificacion = new Date();
            return await pre_asignacion.save();
        }
        catch (error) {
            return null;
        }
    }

    async getAll(filterDto: FilterDto): Promise<PreAsignacion[]> {
        try {
            const filtersService = new FiltersService(filterDto);
            return await this.pre_asignacionModel.find(filtersService.getQuery(), filtersService.getFields(), filtersService.getLimitAndOffset())
                .sort(filtersService.getSortBy()).exec();
        }
        catch (error) {
            return null;
        }
    }

    async getById(id: string): Promise<PreAsignacion> {
        try {
            return await this.pre_asignacionModel.findById(id).exec();
        }
        catch (error) {
            return null;
        };
    }

    async put(id: string, pre_asignacionDto: PreAsignacionDto): Promise<PreAsignacion> {
        try {
            pre_asignacionDto.fecha_modificacion = new Date();
            await this.pre_asignacionModel.findByIdAndUpdate(id, pre_asignacionDto, { new: true }).exec();
            return await this.pre_asignacionModel.findById(id).exec();
        }
        catch (error) {
            return null;
        }
    }

    async delete(id: string): Promise<any> {
        try {
            return await this.pre_asignacionModel.findByIdAndRemove(id).exec();
        }
        catch (error) {
            return null;
        }
    }
}
