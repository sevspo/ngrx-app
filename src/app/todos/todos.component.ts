import { Component, OnInit } from '@angular/core';
import { TodoEntityService } from './store/todo-entity.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  constructor(private todoEntityService: TodoEntityService) {}

  ngOnInit(): void {}

  todos$ = this.todoEntityService.entities$;

  onGetTodos() {
    this.todoEntityService.getAll();
  }
}
