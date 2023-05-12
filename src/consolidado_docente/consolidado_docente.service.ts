import { Injectable } from '@nestjs/common';

import { ConsolidadoDocente } from './schemas/consolidado_docente.schema';
import { ConsolidadoDocenteDto } from './dto/consolidado_docente.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { FilterDto } from "../filters/dto/filter.dto";
import { FiltersService } from "../filters/filters.service";

@Injectable()
export class ConsolidadoDocenteService {
    constructor(@InjectModel(ConsolidadoDocente.name) private readonly consolidado_docenteModel: Model<ConsolidadoDocente>) { }

    async post(consolidado_docenteDto: ConsolidadoDocenteDto): Promise<ConsolidadoDocente> {
        try {
            const consolidado_docente = new this.consolidado_docenteModel(consolidado_docenteDto);
            consolidado_docente.fecha_creacion = new Date();
            consolidado_docente.fecha_modificacion = new Date();
            return await consolidado_docente.save();
        }
        catch (error) {
            return null;
        }
    }

    async getAll(filterDto: FilterDto): Promise<ConsolidadoDocente[]> {
        try {
            const filtersService = new FiltersService(filterDto);
            return await this.consolidado_docenteModel.find(filtersService.getQuery(), filtersService.getFields(), filtersService.getLimitAndOffset())
                .sort(filtersService.getSortBy()).exec();
        }
        catch (error) {
            return null;
        }
    }

    async getById(id: string): Promise<ConsolidadoDocente> {
        try {
            return await this.consolidado_docenteModel.findById(id).exec();
        }
        catch (error) {
            return null;
        };
    }

    async put(id: string, consolidado_docenteDto: ConsolidadoDocenteDto): Promise<ConsolidadoDocente> {
        try {
            consolidado_docenteDto.fecha_modificacion = new Date();
            await this.consolidado_docenteModel.findByIdAndUpdate(id, consolidado_docenteDto, { new: true }).exec();
            return await this.consolidado_docenteModel.findById(id).exec();
        }
        catch (error) {
            return null;
        }
    }

    async delete(id: string): Promise<any> {
        try {
            return await this.consolidado_docenteModel.findByIdAndRemove(id).exec();
        }
        catch (error) {
            return null;
        }
    }
}
