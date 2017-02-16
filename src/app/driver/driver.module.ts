
import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverItemComponent } from './item/driver-item.component';
import { DriverListComponent } from './list/driver-list.component';

import { DriverService } from './driver.service';
import { driverRouting } from './driver.routes';

@NgModule({
  imports: [ CommonModule, driverRouting ],
  declarations: [ DriverItemComponent, DriverListComponent ],
  providers: [ DriverService ],
  exports: [ DriverListComponent ]
})
export class DriverModule {
}
