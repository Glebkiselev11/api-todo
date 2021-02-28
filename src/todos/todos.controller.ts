import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  findAll() {
    return this.todosService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todosService.getById(id);
  }

  @Post()
  create(@Body() todo: CreateTodoDto) {
    return this.todosService.create(todo);
  }
}
