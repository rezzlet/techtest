import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Team } from './';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class TeamService {

    private teams: Team[] = new Array<Team>();
    constructor( private http: Http ) {}

    public getAll(): Observable<Team[]>  {
        return this.http.get('/assets/data/teams.json')
        .map( (rs: Response) => rs.json().teams);
    }

}
