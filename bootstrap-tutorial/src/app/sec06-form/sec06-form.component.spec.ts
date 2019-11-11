import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec06FormComponent } from './sec06-form.component';

describe('Sec06FormComponent', () => {
  let component: Sec06FormComponent;
  let fixture: ComponentFixture<Sec06FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sec06FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec06FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
