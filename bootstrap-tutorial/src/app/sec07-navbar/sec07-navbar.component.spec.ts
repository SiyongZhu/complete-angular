import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec07NavbarComponent } from './sec07-navbar.component';

describe('Sec07NavbarComponent', () => {
  let component: Sec07NavbarComponent;
  let fixture: ComponentFixture<Sec07NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sec07NavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec07NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
