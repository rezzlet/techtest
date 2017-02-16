import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DriverService, Driver } from '../';
import { Subscription } from '';

@Component({
  selector: 'driver-list',
  styleUrls: ['./driver-list.component.css'],
  templateUrl: './driver-list.component.html'
})

export class DriverListComponent implements OnInit {

    private list: Driver[] = new Array<Driver>();
    private selectedTeam: string = '-1';

    constructor( private driverService: DriverService,
                 private route: ActivatedRoute) {

    }

    public ngOnInit(): void {

      this.route.params.subscribe( (params) => {

        this.selectedTeam = params['teamId'];

        this.driverService.getByTeam( this.selectedTeam ).subscribe(
          ( drivers: Driver[] ) => {
              this.list = drivers;
          },
          (error) => {
            console.log(error);
          });

      });

    }

    public currentDrivers(): Driver[] {

      return this.list.filter( ( item: Driver ) => {
        return item.fkteam === parseInt(this.selectedTeam, 10);
       });

    }
}
