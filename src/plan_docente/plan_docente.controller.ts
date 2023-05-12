import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { PlanDocenteDto } from './dto/plan_docente.dto';
import { PlanDocenteService } from './plan_docente.service';

import { FilterDto } from "../filters/dto/filter.dto";
import { ApiTags } from '@nestjs/swagger';

@Controller('plan_docente')
@ApiTags('plan_docente')
export class PlanDocenteController {
    constructor(private planDocenteService: PlanDocenteService) { }

    @Post()
    async post(@Res() res, @Body() plan_docenteDto: PlanDocenteDto) {
        const plan_docente = await this.planDocenteService.post(plan_docenteDto);
        if (!plan_docente) {
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
                Data: plan_docente
            }
        );

    }

    @Get()
    async getAll(@Res() res, @Query() filterDto: FilterDto) {
        const plan_docente = await this.planDocenteService.getAll(filterDto);
        if (!plan_docente) {
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
                Data: plan_docente
            }
        );
    }

    @Get('/:id')
    async getById(@Res() res, @Param('id') id: string) {
        const plan_docente = await this.planDocenteService.getById(id);
        if (!plan_docente) {
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
                Data: plan_docente
            }
        );
    }

    @Put('/:id')
    async put(@Res() res, @Param('id') id: string, @Body() plan_docenteDto: PlanDocenteDto) {
        const plan_docente = await this.planDocenteService.put(id, plan_docenteDto);
        if (!plan_docente) {
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
                Data: plan_docente
            }
        );
    }

    @Delete('/:id')
    async delete(@Res() res, @Param('id') id: string) {
        const plan_docente = await this.planDocenteService.getById(id);
        plan_docente.activo = false;
        const response = await this.planDocenteService.put(id, plan_docente);
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
