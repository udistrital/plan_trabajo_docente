import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ collection: 'plan_docente' })
export class PlanDocente extends Document {

    @Prop({ required: true })
    estado_plan_id: string

    @Prop({ required: true })
    docente_id: string

    @Prop({ required: true })
    tipo_vinculacion_id: string

    @Prop({ required: true })
    periodo_id: string

    @Prop({ required: false })
    soporte_documental: string

    @Prop({ required: false })
    respuesta: string

    @Prop({ required: false })
    resumen: string

    @Prop({ required: true })
    activo: boolean

    @Prop({ required: true })
    fecha_creacion: Date

    @Prop({ required: true })
    fecha_modificacion: Date

}

export const PlanDocenteSchema = SchemaFactory.createForClass(PlanDocente);