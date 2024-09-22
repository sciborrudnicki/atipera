import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, model, OnInit, WritableSignal } from '@angular/core';

// Forms.
import { FormsModule } from '@angular/forms';

// Material.
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogActions, MatDialogContent } from '@angular/material/dialog';

// Service.
import { TableService } from '../../table/table.service';

// Interface.
import { PeriodicFormData } from './interface/periodic-form-data.interface';
import { Observable, Subject } from 'rxjs';


/** @title Simple form field */
@Component({
  selector: 'app-periodic-form',
  standalone: true,
  imports: [
    FormsModule,
    MatDialogActions,
    MatDialogContent,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './periodic-form.component.html',
  styleUrl: './periodic-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeriodicFormComponent<T> implements OnInit {
  @Input('data') public data?: PeriodicFormData<T>;
  @Input('submit') public set save(save: boolean) {
    save && this.submit();
  };

  #name = 'periodic';

  public label = '';

  // Model
  readonly fieldModel: WritableSignal<keyof T | undefined> = model();
  readonly indexModel: WritableSignal<number | undefined> = model();
  readonly model = model();

  public updateRow = new Subject<{ [index: number]: T; }>();

  /**
   * 
   */
  constructor(
    public tableService: TableService<T>,
    public detector: ChangeDetectorRef
  ) {
    // Updates row.
    tableService.updateState.connect('row', this.updateRow);
  }

  /**
   * 
   */
  ngOnInit(): void {
    if (this.data) {
      this.fieldModel.set(this.data.field);
      this.indexModel.set(this.data.index);

      // Model to update.
      const fieldModel = this.fieldModel();
      if (fieldModel) {
        this.model.set(this.data.row[fieldModel]);
      }

      this.label = `${(this.fieldModel() as String).charAt(0)?.toUpperCase()}${(this.fieldModel() as String).slice(1)}`;
    }
  }

  public submit() {
    if (this.data) {
      const fieldModel = this.fieldModel();
      if (fieldModel) {
        const index = this.data.index;

        // Update ROW.
        this.updateRow.next({ [index]: { [fieldModel]: this.model() } as NonNullable<T> });
        // this.updateRow.next({ ...{ index }, ...{ [fieldModel]: this.model() } as NonNullable<T> });



        // const list = this.tableService.state.get(this.#name);
        // const row = list.get(index);

        // if (row) {
        //   const list1 = list.set(index, Object.assign(row, { [fieldModel]: this.model() }));

        //   console.log(`form submit: `, list);
        //   this.update.next({ ...{ id: index }, ...row });

        //   // SAVE FORM STATE 

        //   // this.tableService.state.set({[this.#name]: list1});
        //   // console.log(list === list1);
        // }

      }
    }
  }


  // public submit() {
  //   if (this.data) {
  //     const fieldModel = this.fieldModel();
  //     if (fieldModel) {
  //       const index = this.data.index;

  //       const list = this.tableService.state.get(this.#name);
  //       const row = list.get(index);
  //       if (row) {
  //         const list1 = list.set(index, Object.assign(row, {[fieldModel]: this.model()}));

  //         console.log(`form submit: `, list);
  //         this.update.next({ ...{id: index}, ...row});

  //         // SAVE FORM STATE 

  //         // this.tableService.state.set({[this.#name]: list1});
  //         // console.log(list === list1);
  //       }        
  //     }
  //   }
  // }

}
