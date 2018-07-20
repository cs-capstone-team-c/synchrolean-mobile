import { Injectable, OnInit } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Task } from '~/shared/tasks/task';
import { ServerTask } from '~/shared/tasks/serverTask';
import { team } from '~/shared/teams/team';
import { valueProperty } from '../../../node_modules/tns-core-modules/ui/slider/slider';

const serverURL: string = 'http://localhost:55542';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private http: HttpClient;
  private url: string;
  private userId: number;

  constructor(http: HttpClient) {
    this.http = http;
    this.url = serverURL;
    this.userId = 0;
  }

  postTask(task: Task) {
    let postUrl: string = this.url + '/api/tasks';
    let postTask = new ServerTask(task, this.userId);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    console.log(postUrl);
    console.log(postTask.toJson());
    let observer = this.http
      .post<ServerTask>(postUrl, postTask.toJson(), httpOptions)
      .subscribe(response => {
        console.log('Server Response:', response);
      });
    observer.unsubscribe();
  }

  postTasks(tasks: Task[]) {
    tasks.forEach(task => {
      this.postTask(task);
    });
  }
  getTasks(): Observable<Task[]> {
    let getUrl: string = this.url + '/api/tasks/' + this.userId;
    return this.http.get<Task[]>(getUrl);
  }


  getTeams(){
      return this.http.get('http://localhost:5000/api/team');
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occured on the client side', error.error.message);
    } else {
      console.error(
        'Backend returned: ${error.status}',
        +'body was ${error.error}'
      );
    }
    return throwError('Something bad happened');
  }
}
