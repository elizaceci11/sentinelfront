import { Component } from '@angular/core';
import {LoginComponent} from './login/login.component';

@Component({
  selector: 'app-root',
  imports: [ LoginComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sentinel-front';
}
