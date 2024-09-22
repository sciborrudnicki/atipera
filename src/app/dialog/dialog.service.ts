// Angular.
import { inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

// Component.
import { ComponentType } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class DialogService<T> {
  readonly dialog = inject(MatDialog);
  public title = '';

  #component?: ComponentType<T>;

  openDialog(config: MatDialogConfig, component: ComponentType<T> | undefined = this.#component): void {
    if (component) {
      const dialogRef = this.dialog.open(component, config);
  
      dialogRef.afterClosed().subscribe(result => {});  
    }
  }

  setComponent(component: ComponentType<T>) {
    this.#component = component;
    return this;
  }
}
