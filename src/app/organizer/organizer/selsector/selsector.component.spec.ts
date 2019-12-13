import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelsectorComponent } from './selsector.component';

describe('SelsectorComponent', () => {
  let component: SelsectorComponent;
  let fixture: ComponentFixture<SelsectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelsectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelsectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
