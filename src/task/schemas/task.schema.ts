import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Task {
  @Prop()
  title: string;

  @Prop()
  editing: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
