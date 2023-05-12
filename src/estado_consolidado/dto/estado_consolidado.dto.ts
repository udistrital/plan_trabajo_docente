import { ApiProperty } from '@nestjs/swagger';

export class EstadoConsolidadoDto {

    @ApiProperty()
    readonly nombre: string;

    @ApiProperty()
    readonly descripcion: string;

    @ApiProperty()
    readonly codigo_abreviacion: string;

    @ApiProperty()
    activo: boolean;

    @ApiProperty()
    fecha_creacion: Date;

    @ApiProperty()
    fecha_modificacion: Date;

}