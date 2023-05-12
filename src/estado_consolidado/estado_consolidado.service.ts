import { Injectable } from '@nestjs/common';

import { EstadoConsolidado } from './schemas/estado_consolidado.schema';
import { EstadoConsolidadoDto } from './dto/estado_consolidado.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { FilterDto } from "../filters/dto/filter.dto";
import { FiltersService } from "../filters/filters.service";

@Injectable()
export class EstadoConolidadoService {
    constructor(@InjectModel(EstadoConsolidado.name) private readonly estado_consolidadoModel: Model<EstadoConsolidado>) { }

    async post(estado_consolidadoDto: EstadoConsolidadoDto): Promise<EstadoConsolidado> {
        try {
            const estado_consolidado = new this.estado_consolidadoModel(estado_consolidadoDto);
            estado_consolidado.fecha_creacion = new Date();
            estado_consolidado.fecha_modificacion = new Date();
            return await estado_consolidado.save();
        }
        catch (error) {
            return null;
        }
    }

    async getAll(filterDto: FilterDto): Promise<EstadoConsolidado[]> {
        try {
            const filtersService = new FiltersService(filterDto);
            return await this.estado_consolidadoModel.find(filtersService.getQuery(), filtersService.getFields(), filtersService.getLimitAndOffset())
                .sort(filtersService.getSortBy()).exec();
        }
        catch (error) {
            return null;
        }
    }

    async getById(id: string): Promise<EstadoConsolidado> {
        try {
            return await this.estado_consolidadoModel.findById(id).exec();
        }
        catch (error) {
            return null;
        };
    }

    async put(id: string, estado_consolidadoDto: EstadoConsolidadoDto): Promise<EstadoConsolidado> {
        try {
            estado_consolidadoDto.fecha_modificacion = new Date();
            await this.estado_consolidadoModel.findByIdAndUpdate(id, estado_consolidadoDto, { new: true }).exec();
            return await this.estado_consolidadoModel.findById(id).exec();
        }
        catch (error) {
            return null;
        }
    }

    async delete(id: string): Promise<any> {
        try {
            return await this.estado_consolidadoModel.findByIdAndRemove(id).exec();
        }
        catch (error) {
            return null;
        }
    }
}
