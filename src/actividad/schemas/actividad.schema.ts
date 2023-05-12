import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ collection: 'actividad' })
export class Actividad extends Document {

    @Prop({ required: true })
    nombre: string

    @Prop({ required: true })
    descripcion: string

    @Prop({ required: true })
    codigo_abreviacion: string

    @Prop({ required: true })
    activo: boolean

    @Prop({ required: true })
    fecha_creacion: Date

    @Prop({ required: true })
    fecha_modificacion: Date

}

export const ActividadSchema = SchemaFactory.createForClass(Actividad);