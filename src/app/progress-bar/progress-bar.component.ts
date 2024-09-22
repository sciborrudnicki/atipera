import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LogoComponent } from '../logo/logo.component';

/**
 * @title Query progress-bar
 */
@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [LogoComponent, MatProgressBarModule],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ProgressBarComponent {

  @HostBinding('class.active') public active = true;

  @Input('active') public set setActive(value: boolean) {
    this.active = value;
  };

}
