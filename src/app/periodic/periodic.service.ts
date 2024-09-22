// Angular.
import { Injectable } from '@angular/core';

// Component.
import { PeriodicFormDialogComponent } from './periodic-form/dialog/periodic-form-dialog.component';

// Service.
import { IndexedDBService } from '../indexeddb/indexeddb.service';
import { TableService } from '../table/table.service';

// Immutable.
import Immutable from 'immutable';

@Injectable({
  providedIn: 'root',
})
export class PeriodicService<T> {
  #name = 'periodic';

  constructor(
    public indexedDBService: IndexedDBService,
    public tableService: TableService<T>
  ) {
    // Initialize state for periodic.
    if (!this.tableService.state.get(this.#name)) 
      this.tableService.state.set(() => {
        return { [this.#name]: Immutable.List([]) };
      });

    // Get all periodic data from indexedDB.
    this
      .tableService
      .setDialogComponent(PeriodicFormDialogComponent);

    // Initialize data.
    this.indexedDBService.indexeddb.getAll(undefined, 0, (result, request, ev: any) => {
        this.tableService.nameSubject.next(this.#name);
        this.tableService.state.set({ [this.#name]: Immutable.List(ev.target.result) });
      },
      (ev) => { console.log(`complete`) },
      (ev) => { console.log(`abort`) },
      (ev) => { console.log(`error`) },
      this.#name
    );

    this.tableService.updateState.select('index').subscribe({
      next: index => {
        if (typeof index === 'number') {
          this.indexedDBService.indexeddb.put(
            this.tableService.state.get(this.#name).get(index),
            undefined,
            (result, ev: any) => {
              console.log(ev.target.result)
            }
          );
        }
      }
    })
    console.log(`PeriodicService constructor`);
  }
}
