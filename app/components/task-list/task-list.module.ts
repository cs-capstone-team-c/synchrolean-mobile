import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { TaskListComponent } from './task-list.component';

@NgModule({
  imports: [NativeScriptCommonModule],
  declarations: [TaskListComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class TaskListModule {}
