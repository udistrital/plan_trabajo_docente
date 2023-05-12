import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { ConsolidadoDocenteDto } from './dto/consolidado_docente.dto';
import { ConsolidadoDocenteService } from './consolidado_docente.service';

import { FilterDto } from "../filters/dto/filter.dto";
import { ApiTags } from '@nestjs/swagger';

@Controller('consolidado_docente')
@ApiTags('consolidado_docente')
export class ConsolidadoDocenteController {
    constructor(private consolidadoDocenteService: ConsolidadoDocenteService) { }

    @Post()
    async post(@Res() res, @Body() consolidado_docenteDto: ConsolidadoDocenteDto) {
        const consolidado_docente = await this.consolidadoDocenteService.post(consolidado_docenteDto);
        if (!consolidado_docente) {
            throw new HttpException({
                Success: false,
                Status: "400",
                Message: "Error service Post: The request contains an incorrect data type or an invalid parameter",
                Data: null
            }, HttpStatus.BAD_REQUEST)
        }
        res.status(HttpStatus.CREATED).json(
            {
                Success: true,
                Status: "201",
                Message: "Registration successful",
                Data: consolidado_docente
            }
        );

    }

    @Get()
    async getAll(@Res() res, @Query() filterDto: FilterDto) {
        const consolidado_docente = await this.consolidadoDocenteService.getAll(filterDto);
        if (!consolidado_docente) {
            throw new HttpException({
                Success: false,
                Status: "404",
                Message: "Error service GetAll: The request contains an incorrect parameter or no record exist",
                Data: null
            }, HttpStatus.NOT_FOUND)
        }
        res.status(HttpStatus.OK).json(
            {
                Success: true,
                Status: "200",
                Message: "Request successful",
                Data: consolidado_docente
            }
        );
    }

    @Get('/:id')
    async getById(@Res() res, @Param('id') id: string) {
        const consolidado_docente = await this.consolidadoDocenteService.getById(id);
        if (!consolidado_docente) {
            throw new HttpException({
                Success: false,
                Status: "404",
                Message: "Error service GetOne: The request contains an incorrect parameter or no record exist",
                Data: null
            }, HttpStatus.NOT_FOUND)
        }
        res.status(HttpStatus.OK).json(
            {
                Success: true,
                Status: "200",
                Message: "Request successful",
                Data: consolidado_docente
            }
        );
    }

    @Put('/:id')
    async put(@Res() res, @Param('id') id: string, @Body() consolidado_docenteDto: ConsolidadoDocenteDto) {
        const consolidado_docente = await this.consolidadoDocenteService.put(id, consolidado_docenteDto);
        if (!consolidado_docente) {
            throw new HttpException({
                Success: false,
                Status: "400",
                Message: "Error service Put: The request contains an incorrect data type or an invalid parameter",
                Data: null
            }, HttpStatus.BAD_REQUEST)
        }
        return res.status(HttpStatus.OK).json(
            {
                Success: true,
                Status: "200",
                Message: "Update successful",
                Data: consolidado_docente
            }
        );
    }

    @Delete('/:id')
    async delete(@Res() res, @Param('id') id: string) {
        const consolidado_docente = await this.consolidadoDocenteService.getById(id);
        consolidado_docente.activo = false;
        const response = await this.consolidadoDocenteService.put(id, consolidado_docente);
        if (response instanceof Error) {
            return res.status(HttpStatus.OK).json({
                Success: false,
                Status: "400",
                Message: response.message,
                Data: null
            });
        } else {
            return res.status(HttpStatus.OK).json(
                {
                    Success: true,
                    Status: "200",
                    Message: "Delete successful",
                    Data: response
                }
            );
        }
    }
}
