import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceService } from './service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stateless-observable-services',
  imports: [CommonModule],
  templateUrl: './stateless-observable-services.component.html',
  styleUrl: './stateless-observable-services.component.scss'
})
export class StatelessObservableServicesComponent {
  items$: Observable<any[]>;
  posts$: Observable<any[]>;
  

  constructor(private serviceService: ServiceService) {
    this.items$ = this.serviceService.getItems();
    this.posts$ = this.serviceService.getItems();
   }
}
