import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ collection: 'carga_plan' })
export class CargaPlan extends Document {

    @Prop({ required: true })
    espacio_academico_id: string

    @Prop({ required: false })
    actividad_id: string

    @Prop({ required: false })
    plan_docente_id: string

    @Prop({ required: true })
    sede_id: string

    @Prop({ required: true })
    edificio_id: string

    @Prop({ required: true })
    salon_id: string

    @Prop({ required: true })
    horario: string

    @Prop({ required: true })
    hora_inicio: number

    @Prop({ required: true })
    duracion: number

    @Prop({ required: true })
    activo: boolean

    @Prop({ required: true })
    fecha_creacion: Date

    @Prop({ required: true })
    fecha_modificacion: Date

}

export const CargaPlanSchema = SchemaFactory.createForClass(CargaPlan);