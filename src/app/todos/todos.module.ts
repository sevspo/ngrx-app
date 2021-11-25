import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { EntityDataService, EntityDefinitionService } from '@ngrx/data';
import { todoEntityMetadata } from './store/todo-entity-metadata';
import { TuiButtonModule } from '@taiga-ui/core';
import { TodoDataServcie } from './store/todo-data.service';

@NgModule({
  declarations: [TodosComponent],
  imports: [CommonModule, TodosRoutingModule, TuiButtonModule],
})
export class TodosModule {
  constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private todoDataService: TodoDataServcie
  ) {
    eds.registerMetadataMap(todoEntityMetadata);
    entityDataService.registerService('Todo', todoDataService);
  }
}
