import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { EstadoPlanDto } from './dto/estado_plan.dto';
import { EstadoPlanService } from './estado_plan.service';

import { FilterDto } from "../filters/dto/filter.dto";
import { ApiTags } from '@nestjs/swagger';

@Controller('estado_plan')
@ApiTags('estado_plan')
export class EstadoPlanController {
    constructor(private estadoPlanService: EstadoPlanService) { }

    @Post()
    async post(@Res() res, @Body() estado_planDto: EstadoPlanDto) {
        const estado_plan = await this.estadoPlanService.post(estado_planDto);
        if (!estado_plan) {
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
                Data: estado_plan
            }
        );

    }

    @Get()
    async getAll(@Res() res, @Query() filterDto: FilterDto) {
        const estado_plan = await this.estadoPlanService.getAll(filterDto);
        if (!estado_plan) {
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
                Data: estado_plan
            }
        );
    }

    @Get('/:id')
    async getById(@Res() res, @Param('id') id: string) {
        const estado_plan = await this.estadoPlanService.getById(id);
        if (!estado_plan) {
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
                Data: estado_plan
            }
        );
    }

    @Put('/:id')
    async put(@Res() res, @Param('id') id: string, @Body() estado_planDto: EstadoPlanDto) {
        const estado_plan = await this.estadoPlanService.put(id, estado_planDto);
        if (!estado_plan) {
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
                Data: estado_plan
            }
        );
    }

    @Delete('/:id')
    async delete(@Res() res, @Param('id') id: string) {
        const estado_plan = await this.estadoPlanService.getById(id);
        estado_plan.activo = false;
        const response = await this.estadoPlanService.put(id, estado_plan);
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
