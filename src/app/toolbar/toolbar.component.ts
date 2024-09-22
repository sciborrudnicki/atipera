import {Component, Input, ViewEncapsulation} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatDrawer } from '@angular/material/sidenav';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { RouterLink, RouterLinkActive } from '@angular/router';

/**
 * @title Toolbar overview
 */
@Component({
  selector: 'app-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrl: 'toolbar.component.scss',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive,
  ],
  encapsulation: ViewEncapsulation.None
})
export class ToolbarComponent {
  public github = 'https://github.com/angular/components/stargazers';

  @Input() drawer?: MatDrawer;

  public open(link: string) {
    window.open(link, '_blank'); 
  }
}
