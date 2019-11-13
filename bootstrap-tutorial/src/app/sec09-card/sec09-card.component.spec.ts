import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec09CardComponent } from './sec09-card.component';

describe('Sec09CardComponent', () => {
  let component: Sec09CardComponent;
  let fixture: ComponentFixture<Sec09CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sec09CardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec09CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
