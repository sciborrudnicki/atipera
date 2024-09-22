// Angular.
import { Injectable } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';
import { rxState } from '@rx-angular/state';
import { Subject } from 'rxjs';

// Angular Material.
import { MatTableDataSource } from '@angular/material/table';

// Immutable.
import Immutable from 'immutable';

// Services.
import { DialogService } from '../dialog/dialog.service';

import { IndexedDBService } from '../indexeddb/indexeddb.service';
import { IndexedDBState } from '../indexeddb/indexeddb.state';

@Injectable({
  providedIn: 'root',
})
export class TableService<T> { // <S, T>
  #dataState = rxState<{ [key: string]: Immutable.List<T> }>(({ set }) => {
    set({});
  });

  // change to Subject?
  #updateState = rxState<{ 'row': { [index: string]: T }, index?: number }>();

  // private store name.
  #name: string = '';
  #dialogComponent?: ComponentType<any>;

  // public state.
  readonly state = this.#dataState;
  readonly updateState = this.#updateState;

  //
  public columns = Immutable.List<{ id?: number, name: string, header: string; }>([
    { 'name': 'position', 'header': 'No.' },
    { 'name': 'name', 'header': 'Name' },
    { 'name': 'weight', 'header': 'Weight' },
    { 'name': 'symbol', 'header': 'Symbol' }
  ]);

  // public columns = Immutable.List<any>([]);
  public displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  // RxJS Subject.
  public nameSubject: Subject<string> = new Subject();

  /**
   * 
   * @param immutableService 
   * @param dialogService 
   */
  constructor(
    public indexedDBService: IndexedDBService,
    public dialogService: DialogService<any>,
    public indexedDBState: IndexedDBState,
  ) {
    this.nameSubject.subscribe(name => this.#name = name);
    this.updateState.select('row').subscribe({
      next: row => {
        if (row) {
          Object.keys(row).forEach(index => {
            this.update(Number(index), row[Number(index)]);
          });  
        }
      }
    })
  }

  /**
   * 
   * @param component 
   * @returns 
   */
  public setDialogComponent<C>(component: ComponentType<C>): this {
    this.#dialogComponent = component;
    return this;
  }

  /**
   * 
   * @returns 
   */
  public data(data: Immutable.List<T>): MatTableDataSource<T> {
    return new MatTableDataSource(data.toArray());
  }

  /**
   * Opens dialog with `data` retrieved from table state.
   * @param index 
   * @param field 
   */
  public openDialog(
    index: number,
    id: number,
    field: keyof T,
    component: ComponentType<T> | undefined = this.#dialogComponent
  ) {
    if (typeof index == 'number' && field && component) {
      this.dialogService.openDialog({
        data: { id, index, field, row: this.state.get(this.#name).get(index) }
      }, component);
    }
  }

  /**
   * 
   * @param row 
   * @returns 
   */
  public update(index: number, row: T, name = this.#name): this {
    console.log(row);
    if (typeof index === 'number' && row) {
      const list = this.state.get(name);
      if (typeof index === 'number') {
        this.state.set({ [this.#name]: list.set(index, { ...list.get(index), ...row }) });
        this.updateState.set({ index });
      }
    }
    return this;
  }
}
