import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatelessObservableServicesComponent } from './stateless-observable-services.component';

describe('StatelessObservableServicesComponent', () => {
  let component: StatelessObservableServicesComponent;
  let fixture: ComponentFixture<StatelessObservableServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatelessObservableServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatelessObservableServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
