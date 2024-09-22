import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodicFormComponent } from './periodic-form.component';

describe('PeriodicFormComponent', () => {
  let component: PeriodicFormComponent<any>;
  let fixture: ComponentFixture<PeriodicFormComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeriodicFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeriodicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
