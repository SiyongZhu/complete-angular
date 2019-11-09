import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec05UtilitiesComponent } from './sec05-utilities.component';

describe('Sec05UtilitiesComponent', () => {
  let component: Sec05UtilitiesComponent;
  let fixture: ComponentFixture<Sec05UtilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sec05UtilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec05UtilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
