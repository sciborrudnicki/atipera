import { Component, ViewEncapsulation } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

// Components.
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { FooterComponent } from "../footer/footer.component";
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent,
    LogoComponent,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    ToolbarComponent,
],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class MainComponent {
  constructor(private router: Router) {}
}
