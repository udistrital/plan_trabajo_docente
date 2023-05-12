import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { PreAsignacionDto } from './dto/pre_asignacion.dto';
import { PreAsignacionService } from './pre_asignacion.service';

import { FilterDto } from "../filters/dto/filter.dto";
import { ApiTags } from '@nestjs/swagger';

@Controller('pre_asignacion')
@ApiTags('pre_asignacion')
export class PreAsignacionController {
    constructor(private preAsignacionService: PreAsignacionService) { }

    @Post()
    async post(@Res() res, @Body() pre_asignacionDto: PreAsignacionDto) {
        const pre_asignacion = await this.preAsignacionService.post(pre_asignacionDto);
        if (!pre_asignacion) {
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
                Data: pre_asignacion
            }
        );

    }

    @Get()
    async getAll(@Res() res, @Query() filterDto: FilterDto) {
        const pre_asignacion = await this.preAsignacionService.getAll(filterDto);
        if (!pre_asignacion) {
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
                Data: pre_asignacion
            }
        );
    }

    @Get('/:id')
    async getById(@Res() res, @Param('id') id: string) {
        const pre_asignacion = await this.preAsignacionService.getById(id);
        if (!pre_asignacion) {
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
                Data: pre_asignacion
            }
        );
    }

    @Put('/:id')
    async put(@Res() res, @Param('id') id: string, @Body() pre_asignacionDto: PreAsignacionDto) {
        const pre_asignacion = await this.preAsignacionService.put(id, pre_asignacionDto);
        if (!pre_asignacion) {
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
                Data: pre_asignacion
            }
        );
    }

    @Delete('/:id')
    async delete(@Res() res, @Param('id') id: string) {
        const pre_asignacion = await this.preAsignacionService.getById(id);
        pre_asignacion.activo = false;
        const response = await this.preAsignacionService.put(id, pre_asignacion);
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
