import { Injectable } from '@nestjs/common';

import { Actividad } from './schemas/actividad.schema';
import { ActividadDto } from './dto/actividad.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { FilterDto } from "../filters/dto/filter.dto";
import { FiltersService } from "../filters/filters.service";

@Injectable()
export class ActividadService {
    constructor(@InjectModel(Actividad.name) private readonly actividadModel: Model<Actividad>) { }

    async post(actividadDto: ActividadDto): Promise<Actividad> {
        try {
            const actividad = new this.actividadModel(actividadDto);
            actividad.fecha_creacion = new Date();
            actividad.fecha_modificacion = new Date();
            return await actividad.save();
        }
        catch (error) {
            return null;
        }
    }

    async getAll(filterDto: FilterDto): Promise<Actividad[]> {
        try {
            const filtersService = new FiltersService(filterDto);
            return await this.actividadModel.find(filtersService.getQuery(), filtersService.getFields(), filtersService.getLimitAndOffset())
                .sort(filtersService.getSortBy()).exec();
        }
        catch (error) {
            return null;
        }
    }

    async getById(id: string): Promise<Actividad> {
        try {
            return await this.actividadModel.findById(id).exec();
        }
        catch (error) {
            return null;
        };
    }

    async put(id: string, actividadDto: ActividadDto): Promise<Actividad> {
        try {
            actividadDto.fecha_modificacion = new Date();
            await this.actividadModel.findByIdAndUpdate(id, actividadDto, { new: true }).exec();
            return await this.actividadModel.findById(id).exec();
        }
        catch (error) {
            return null;
        }
    }

    async delete(id: string): Promise<any> {
        try {
            return await this.actividadModel.findByIdAndRemove(id).exec();
        }
        catch (error) {
            return null;
        }
    }
}
