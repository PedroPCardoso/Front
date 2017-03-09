import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeucliComponent } from './meucli.component';

describe('MeucliComponent', () => {
  let component: MeucliComponent;
  let fixture: ComponentFixture<MeucliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeucliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeucliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
