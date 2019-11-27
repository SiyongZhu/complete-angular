import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec08FormgridComponent } from './sec08-formgrid.component';

describe('Sec08FormgridComponent', () => {
  let component: Sec08FormgridComponent;
  let fixture: ComponentFixture<Sec08FormgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sec08FormgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec08FormgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
