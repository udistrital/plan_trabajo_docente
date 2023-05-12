import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { EstadoConsolidadoDto } from './dto/estado_consolidado.dto';
import { EstadoConolidadoService } from './estado_consolidado.service';

import { FilterDto } from "../filters/dto/filter.dto";
import { ApiTags } from '@nestjs/swagger';

@Controller('estado_consolidado')
@ApiTags('estado_consolidado')
export class Estado_consolidadoController {
    constructor(private estadoConsolidadoService: EstadoConolidadoService) { }

    @Post()
    async post(@Res() res, @Body() estado_consolidadoDto: EstadoConsolidadoDto) {
        const estado_consolidado = await this.estadoConsolidadoService.post(estado_consolidadoDto);
        if (!estado_consolidado) {
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
                Data: estado_consolidado
            }
        );

    }

    @Get()
    async getAll(@Res() res, @Query() filterDto: FilterDto) {
        const estado_consolidado = await this.estadoConsolidadoService.getAll(filterDto);
        if (!estado_consolidado) {
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
                Data: estado_consolidado
            }
        );
    }

    @Get('/:id')
    async getById(@Res() res, @Param('id') id: string) {
        const estado_consolidado = await this.estadoConsolidadoService.getById(id);
        if (!estado_consolidado) {
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
                Data: estado_consolidado
            }
        );
    }

    @Put('/:id')
    async put(@Res() res, @Param('id') id: string, @Body() estado_consolidadoDto: EstadoConsolidadoDto) {
        const estado_consolidado = await this.estadoConsolidadoService.put(id, estado_consolidadoDto);
        if (!estado_consolidado) {
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
                Data: estado_consolidado
            }
        );
    }

    @Delete('/:id')
    async delete(@Res() res, @Param('id') id: string) {
        const estado_consolidad = await this.estadoConsolidadoService.getById(id);
        estado_consolidad.activo = false;
        const response = await this.estadoConsolidadoService.put(id, estado_consolidad);
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
