// Angular.
import { AfterViewInit, Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';

// Angular Material.
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

// Service.
import { TableService } from './table.service';

/**
 * @title Basic use of `<table mat-table>`
 * Component to display view.
 */
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-table',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  providers: [
    // TableService
  ]
})
export class TableComponent {
  @Input('data') public dataSource: MatTableDataSource<any> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public page = 0;

  /**
   * 
   * @param tableService 
   */
  constructor(public tableService: TableService<any>) {
    this.tableService.nameSubject.subscribe(storeName => {
      this.tableService.state.select(storeName).subscribe(result => {
        this.dataSource = this.tableService.data(result);
        this.dataSource.paginator = this.paginator;
        this.dataSource.paginator?.page.subscribe((value) => this.page = this.dataSource.paginator!.pageIndex * this.dataSource.paginator!.pageSize);
      });
    });
  }

  /**
   * 
   * @param event 
   */
  applyFilter(event: Event) {
    setTimeout(() => {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }, 3000);
  }
}
