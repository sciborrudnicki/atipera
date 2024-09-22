import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Component.
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

// Service.
import { IndexedDBService } from './indexeddb/indexeddb.service';
import { ELEMENT_DATA } from './element-data.const';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatProgressSpinnerModule, ProgressBarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: []
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'atipera';

  public progress = true;

  constructor(public router: Router, public indexedDBService: IndexedDBService) {
    indexedDBService.create();
  }

  ngAfterViewInit(): void {
    this.indexedDBService.indexeddb.onOpenSuccess(db => {
      // Add to database.
      db.addMultiple(
        ELEMENT_DATA,
        undefined,
        (result) => console.log(result),
        (ev: any) => console.log(`error`),
        undefined,
      );

      setTimeout(() => {
        this.progress = false;
      }, 2000);
    });
  }

  ngOnInit(): void { }
}
