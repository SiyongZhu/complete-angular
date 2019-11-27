import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec09ListGroupsComponent } from './sec09-list-groups.component';

describe('Sec09ListGroupsComponent', () => {
  let component: Sec09ListGroupsComponent;
  let fixture: ComponentFixture<Sec09ListGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sec09ListGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec09ListGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
