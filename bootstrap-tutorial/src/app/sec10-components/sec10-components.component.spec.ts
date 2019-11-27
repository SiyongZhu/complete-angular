import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec10ComponentsComponent } from './sec10-components.component';

describe('Sec10ComponentsComponent', () => {
  let component: Sec10ComponentsComponent;
  let fixture: ComponentFixture<Sec10ComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sec10ComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec10ComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
