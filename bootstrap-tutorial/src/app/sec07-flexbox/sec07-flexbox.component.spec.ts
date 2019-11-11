import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec07FlexboxComponent } from './sec07-flexbox.component';

describe('Sec07FlexboxComponent', () => {
  let component: Sec07FlexboxComponent;
  let fixture: ComponentFixture<Sec07FlexboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sec07FlexboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec07FlexboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
