import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesuvioComponent } from './vesuvio.component';

describe('VesuvioComponent', () => {
  let component: VesuvioComponent;
  let fixture: ComponentFixture<VesuvioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VesuvioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VesuvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
