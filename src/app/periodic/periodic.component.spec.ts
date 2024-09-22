import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodicComponent } from './periodic.component';

describe('PeriodicComponent', () => {
  let component: PeriodicComponent<any>;
  let fixture: ComponentFixture<PeriodicComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeriodicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeriodicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
