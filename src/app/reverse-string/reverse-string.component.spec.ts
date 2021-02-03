import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseStringComponent } from './reverse-string.component';

describe('ReverseStringComponent', () => {
  let component: ReverseStringComponent;
  let fixture: ComponentFixture<ReverseStringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReverseStringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReverseStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
