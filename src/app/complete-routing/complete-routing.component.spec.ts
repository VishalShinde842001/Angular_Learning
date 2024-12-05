import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteRoutingComponent } from './complete-routing.component';

describe('CompleteRoutingComponent', () => {
  let component: CompleteRoutingComponent;
  let fixture: ComponentFixture<CompleteRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompleteRoutingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
