import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Task } from './schemas/task.schema';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task.name)
    private TaskModel: mongoose.Model<Task>,
  ) {}

  async findAll(): Promise<Task[]> {
    // find all the Tasks from the database
    const Tasks = await this.TaskModel.find();

    // return the Tasks here
    return Tasks;
  }

  async create(Task: Task): Promise<Task> {
    const res = await this.TaskModel.create(Task);
    return res;
  }

  async findById(id: string): Promise<Task> {
    const Task = await this.TaskModel.findById(id);

    if (!Task) {
      throw new NotFoundException('Task not found.');
    }
    return Task;
  }

  async updateById(id: string, Task: Task): Promise<Task> {
    return await this.TaskModel.findByIdAndUpdate(id, Task, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string): Promise<Task> {
    return await this.TaskModel.findByIdAndDelete(id);
  }
}
