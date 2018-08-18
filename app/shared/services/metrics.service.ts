import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable, of } from 'rxjs';

import { AuthenticationService } from '~/shared/services/auth.service';


@Injectable({
  providedIn: 'root'
})

export class MetricsService {
  //variables here
  constructor(
    private http: HttpClient, 
    private authService: AuthenticationService
  ){
      //
  }
  
  //GetTeamCompletionRate gets the completion rate of a team from a specified date range
  public getTeamCompletionRate(teamId: number, startDate: Date, endDate: Date): Observable<number> {
    //const endpoint = this.authService.url + `/api/tasks/metrics/team/${teamId}/${startDate}/${endDate}`;
    //return this.http.get<any>(endpoint);
    return of(0.75);
  }

  //GetMemberCompletionRate gets the completion rate of an individual from a specified date range
  public getMemberCompletionRate(memberId: string, startDate: Date, endDate: Date): Observable<number> {
    //const endpoint = this.authService.url + `/api/tasks/metrics/user/${memberId}/${startDate}/${endDate}`;
    //return this.http.get<any>(endpoint);
    return of(0.50);
  }
}