import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImperativeStyleComponent } from './imperative-style/imperative-style.component';
import { StatelessObservableServicesComponent } from './stateless-observable-services/stateless-observable-services.component';

@Component({
  selector: 'app-root',
  imports: [ImperativeStyleComponent, StatelessObservableServicesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'reactive-angular';
}
