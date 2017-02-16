import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Driver } from './driver';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DriverService {

    constructor( private http: Http ) {}

    public getAll(): Observable<Driver[]>  {

        return this.http.get('/assets/data/drivers.json')
            .map((rs: Response) => rs.json().drivers.map( this.typeData ))
            .catch( (error: Response | any) => Observable.throw(error.json()));

    }

    public getByTeam( teamId: string ): Observable<Driver[]>  {

        let params: URLSearchParams = new URLSearchParams();
        params.set('teamId', teamId);

        return this.http.get('/assets/data/drivers.json', params)
            .map((rs: Response) => rs.json().drivers.map( this.typeData ))
            .catch( (error: Response | any) => Observable.throw(error.json()));

    }

    private typeData( item: {} ): Driver {
        return new Driver().from(item);
    }

}
