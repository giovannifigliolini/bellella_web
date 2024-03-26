import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrattoriaComponent } from './trattoria.component';

describe('TrattoriaComponent', () => {
  let component: TrattoriaComponent;
  let fixture: ComponentFixture<TrattoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrattoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrattoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
