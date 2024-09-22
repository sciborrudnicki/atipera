import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent {
  @Input() fill = '#0f5cbd';
  @Input() height = 50;
  @Input() width = 50;
  @Input() symbol = false;
}
