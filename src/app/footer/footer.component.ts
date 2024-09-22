import { Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { LogoComponent } from '../logo/logo.component';
import { FooterCopyrightComponent } from "./footer-copyright/footer-copyright.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    FooterCopyrightComponent,
    LogoComponent,
    MatButtonModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent {

}
