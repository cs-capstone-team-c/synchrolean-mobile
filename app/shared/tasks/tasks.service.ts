import { Injectable, OnInit } from '@angular/core';

import { Task, Duration } from './task';
import { Observable, of } from 'rxjs';
import { DBService } from '~/shared/database/database.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService implements OnInit {
  private tasks: Array<Task>;
  private db: DBService;

  constructor(db: DBService) {
    this.db = db;
    this.tasks = new Array<Task>();
  }

  ngOnInit(): void {}

  public getTasks(): Observable<Task[]> {
    this.tasks = this.db.fetch();
    return of(this.tasks);
  }

  public addTask(task: Task): void {
    this.db.insert(task).then(
      id => {
        task.setId(id);
        this.tasks.push(task);
        console.log(this.tasks);
      },
      error => {
        console.log(error);
      }
    );
  }

  public getTaskById(id: number): Task {
    for (let task of this.tasks) {
      if (task.getId() === id) {
        return task;
      }
    }
    return null;
  }

  public updateTask(task: Task) {
    for (let value of this.tasks) {
      if (value.getId() === task.getId()) {
        task.setDescription(task.getDescription());
        task.setNote(task.getNote());
        task.setDuration(task.getDuration());
        task.setComplete(task.isComplete());
      }
    }
  }

  public deleteTask(id: number) {
    this.tasks.forEach((item, index) => {
      if (item.getId() === id) {
        this.tasks.splice(index, 1);
      }
    });
  }
}
