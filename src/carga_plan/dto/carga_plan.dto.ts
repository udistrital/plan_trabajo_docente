import { ApiProperty } from '@nestjs/swagger';

export class CargaPlanDto {

    @ApiProperty()
    readonly espacio_academico_id: string;

    @ApiProperty()
    readonly actividad_id: string;

    @ApiProperty()
    readonly plan_docente_id: string;

    @ApiProperty()
    readonly colocacion: string;

    @ApiProperty()
    readonly horario: string;

    @ApiProperty()
    activo: boolean;

    @ApiProperty()
    fecha_creacion: Date;

    @ApiProperty()
    fecha_modificacion: Date;

}