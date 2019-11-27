import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec04BasicComponent } from './sec04-basic.component';

describe('Sec04BasicComponent', () => {
  let component: Sec04BasicComponent;
  let fixture: ComponentFixture<Sec04BasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sec04BasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec04BasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
