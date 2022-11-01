import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundRingComponent } from './not-found-ring.component';

describe('NotFoundRingComponent', () => {
  let component: NotFoundRingComponent;
  let fixture: ComponentFixture<NotFoundRingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundRingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFoundRingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
