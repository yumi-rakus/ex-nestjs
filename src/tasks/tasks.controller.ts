import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TaskPropertyDto } from './dto/task-property.dto';
import { TaskStatusPipe } from './pipe/task-status.pipe';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(): Promise<Task[]> {
    return this.tasksService.getTasks();
  }

  @Get('/:id')
  getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    // ParseIntPipeはパイプという機能の一つ
    // コントローラのメソッドに値が引き渡される前に変換、もしくは検証を行う
    // この場合はidを数値型へと変換する（変換できなかった場合は例外をスローする）
    return this.tasksService.getTaskById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createTask(@Body() taskPropertyDto: TaskPropertyDto): Promise<Task> {
    // @UsePipeを付与したメソッドはバリデーションパイプ
    // 今回でいうとTaskPropertyDtoで定義した値のIsNotEmpty検証が有効になる
    return this.tasksService.createTask(taskPropertyDto);
  }

  @Delete('/:id')
  deleteTask(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.tasksService.deleteTask(id);
  }

  @Patch('/:id')
  updateTask(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', TaskStatusPipe) status: string,
  ): Promise<Task> {
    return this.tasksService.updateTask(id, status);
  }
}
