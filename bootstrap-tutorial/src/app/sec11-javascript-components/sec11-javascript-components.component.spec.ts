import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec11JavascriptComponentsComponent } from './sec11-javascript-components.component';

describe('Sec11JavascriptComponentsComponent', () => {
  let component: Sec11JavascriptComponentsComponent;
  let fixture: ComponentFixture<Sec11JavascriptComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sec11JavascriptComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec11JavascriptComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
