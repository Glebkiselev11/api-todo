import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodosService {
  private todos = [];

  getAll() {
    return this.todos;
  }

  getById(id) {
    return this.todos.find((t) => t.id === id);
  }

  create(todo: CreateTodoDto) {
    this.todos.push({
      ...todo,
      id: Date.now().toString(),
    });
  }
}
