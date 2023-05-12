import { ApiProperty } from '@nestjs/swagger';

export class PlanDocenteDto {

    @ApiProperty()
    readonly estado_plan_id: string;

    @ApiProperty()
    readonly docente_id: string;

    @ApiProperty()
    readonly tipo_vinculacion_id: string;

    @ApiProperty()
    readonly periodo_id: string;

    @ApiProperty()
    readonly soporte_documental: string;

    @ApiProperty()
    readonly respuesta: string;

    @ApiProperty()
    readonly resumen: string;

    @ApiProperty()
    activo: boolean;

    @ApiProperty()
    fecha_creacion: Date;

    @ApiProperty()
    fecha_modificacion: Date;

}