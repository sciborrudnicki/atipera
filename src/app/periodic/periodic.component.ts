import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { PeriodicService } from './periodic.service';

// Interface.
import { PeriodicElement } from './interface';

@Component({
  selector: 'app-periodic',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './periodic.component.html',
  styleUrl: './periodic.component.scss',
  providers: [
    PeriodicService
  ]
})
export class PeriodicComponent<T extends PeriodicElement> {
  constructor(public periodicService: PeriodicService<T>) {}
}
