// Angular.
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, model, OnInit, WritableSignal } from '@angular/core';
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

// Component.
import { PeriodicFormComponent } from '../periodic-form.component';

// Interface.
import { PeriodicFormData } from '../interface/periodic-form-data.interface';

@Component({
  selector: 'periodic-form-dialog',
  templateUrl: 'periodic-form-dialog.component.html',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    PeriodicFormComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeriodicFormDialogComponent<T> implements OnInit {
  readonly dialogRef = inject(MatDialogRef<PeriodicFormDialogComponent<T>>);
  readonly data = inject<PeriodicFormData<T>>(MAT_DIALOG_DATA);

  public submit = false;

  /**
   * 
   */
  constructor(public detector: ChangeDetectorRef) { }

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
    this.submit = true;
  
    // necessary, can be replaced by output
    this.detector.detectChanges();
  }
}
