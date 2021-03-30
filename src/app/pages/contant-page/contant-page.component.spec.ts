import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContantPageComponent } from './contant-page.component';

describe('ContantPageComponent', () => {
  let component: ContantPageComponent;
  let fixture: ComponentFixture<ContantPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContantPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
