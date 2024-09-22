import { Routes } from '@angular/router';

// Components.
import { MainComponent } from './main/main.component';
import { PeriodicComponent } from './periodic/periodic.component';
import { TableComponent } from './table/table.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: '', redirectTo: 'periodic', pathMatch: 'full' },
      { path: 'periodic', component: PeriodicComponent },
      { path: 'table', component: TableComponent },
    ]
  },
];
