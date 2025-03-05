import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImperativeStyleComponent } from './imperative-style.component';

describe('ImperativeStyleComponent', () => {
  let component: ImperativeStyleComponent;
  let fixture: ComponentFixture<ImperativeStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImperativeStyleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImperativeStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
