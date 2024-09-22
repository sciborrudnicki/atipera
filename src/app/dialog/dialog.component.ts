// Angular.
import { ChangeDetectionStrategy, Component, inject, model, OnInit, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DialogService } from './dialog.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'dialog',
  templateUrl: 'dialog.component.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ]
})
export class DialogComponent<T> implements OnInit {
  readonly dialogRef = inject(MatDialogRef<DialogComponent<T>>);
  readonly data = inject<any>(MAT_DIALOG_DATA);

  /**
   * 
   */
  constructor(public dialogService: DialogService<T>) { }

  /**
   * 
   */
  ngOnInit(): void { }

  /**
   * Closes.
   */
  onNoClick(): void {
    this.dialogRef.close();
  }

  /**
   * Saves.
   */
  public save() {
  }
}
