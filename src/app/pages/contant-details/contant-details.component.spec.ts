import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContantDetailsComponent } from './contant-details.component';

describe('ContantDetailsComponent', () => {
  let component: ContantDetailsComponent;
  let fixture: ComponentFixture<ContantDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContantDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
