import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserResolverComponent } from './user-resolver.component';

describe('UserResolverComponent', () => {
  let component: UserResolverComponent;
  let fixture: ComponentFixture<UserResolverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserResolverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
