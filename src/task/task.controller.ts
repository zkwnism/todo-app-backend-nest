import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './schemas/task.schema';

@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  async getAllTasks(): Promise<Task[]> {
    return this.taskService.findAll();
  }

  @Post()
  async createTask(
    @Body()
    Task: CreateTaskDto,
  ): Promise<Task> {
    return this.taskService.create(Task);
  }

  @Get(':id')
  async getTask(
    @Param('id')
    id: string,
  ): Promise<Task> {
    return this.taskService.findById(id);
  }

  @Put(':id')
  async updateTask(
    @Param('id')
    id: string,
    @Body()
    Task: UpdateTaskDto,
  ): Promise<Task> {
    return this.taskService.updateById(id, Task);
  }

  @Delete(':id')
  async deleteTask(
    @Param('id')
    id: string,
  ): Promise<Task> {
    return this.taskService.deleteById(id);
  }
}
