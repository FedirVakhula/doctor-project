import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentDocInfoComponent } from './department-doc-info.component';

describe('DepartmentDocInfoComponent', () => {
  let component: DepartmentDocInfoComponent;
  let fixture: ComponentFixture<DepartmentDocInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentDocInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentDocInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
