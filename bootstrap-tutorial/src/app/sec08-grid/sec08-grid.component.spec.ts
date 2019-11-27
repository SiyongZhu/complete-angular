import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec08GridComponent } from './sec08-grid.component';

describe('Sec08GridComponent', () => {
  let component: Sec08GridComponent;
  let fixture: ComponentFixture<Sec08GridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sec08GridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec08GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
